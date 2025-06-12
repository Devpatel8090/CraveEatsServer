import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }]
    },
    {
        timestamps: true,
    }
);

// for universal access
// use methods can be used when you want to data in between the process. (this can be used in methods ) 
UserSchema.methods.generateJwtToken = function () {
    // generate the JWT auth token  (for authorizing the user Jsonwebtoken)
    const token = jwt.sign({ user: this._id.toString() }, process.env.TOKEN_GENERATOR); // token would contain fullName and email
    return token;
}

// Helper functions
UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    // check wether email, phoneNumber exists in out database or not
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exists!");
    }

    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    // check weather email exists or not 

    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User does not exists");

    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error("invalid Password!!!");

    return user;
};

// pre means before save do this
// YOu can not use async. you need to use call back

UserSchema.pre("save", function (next) {
    const user = this;

    // password is modified
    if (!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error) {
            return next(error);
        }

        // Hash password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);
            user.password = hash;
            return next();
        })

    })
})

export const UserModel = mongoose.model("Users", UserSchema);