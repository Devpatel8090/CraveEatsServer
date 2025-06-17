// all startegies for google authentication. passport is only for authentication but we are using the google auth so we are using the google passport libarary to make it easier.
import googleOAuth from 'passport-google-oauth20';
import { UserModel } from '../database/allModelsIndex';

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "https://craveeats-server-a514484aed4c.herokuapp.com/auth/google/callback",
            },
            // after authorization this function will call
            // accessToken and refreshToken is not required
            async (accessToken, refreshToken, profile, done) => {
                /// create a new user object
                const newUser = {
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,

                };
                try {
                    // check if the user exist
                    const user = await UserModel.findOne({ email: newUser.email });
                    if (user) {
                        //generate token as user exists
                        const token = user.generateJwtToken();

                        // return user
                        done(null, { user, token });
                    }
                    else {
                        // create new user
                        const user = await UserModel.create(newUser);

                        // generate token
                        const token = user.generateJwtToken();

                        // return user
                        done(null, { user, token });
                    }
                } catch (error) {
                    done(error, null);
                }
            }
        )
    );

    passport.serializeUser((userData, done) => done(null, { ...userData }));
    passport.deserializeUser((id, done) => done(null, id));

};
