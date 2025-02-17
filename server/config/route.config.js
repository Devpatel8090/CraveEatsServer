import JwtPassport from "passport-jwt";
require(`dotenv`).config();

// Database Model
import { UserModel } from "../database/allModelsIndex";
import passport from "passport";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_GENERATOR,
};

export default (passport) => {
    passport.use(
        new JWTStrategy(options, async (jwt_payload, done) => {
            try {
                const doesUserExist = await UserModel.findById(jwt_payload.user);
                if (!doesUserExist) return done(null, false);
                return done(null, doesUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
}
//Explanation
// const req = {
//     headers:{
//         Authorization: "Bearer afsfasfdshflasdjfdshfhadsjlflsdkfhsdfkahsflhsdfhsfaldhfklhslf"
//     }
// }