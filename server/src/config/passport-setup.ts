import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import jwt from 'passport-jwt';
import db from './db';
import { UserData } from '../types';

passport.serializeUser((user,done) => {
  done(null, (user as UserData).id)
});

passport.deserializeUser((id:string, done) => {
  db.patron.findUnique({where: {id}})
  .then((user) => {
    done(null, user);
  });
})


const passportMiddleware = () => passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:8000/oauth2/redirect/google",
    scope: ['profile']
  },
  function(accessToken, refreshToken, profile, done) {

    db.patron.findUnique({where: {google_Id: profile.id}}).then((currentUser) => {
      if (currentUser) {
        done(null, currentUser);
      }else {
        const email = (profile.emails && profile.emails.length > 0) ? profile?.emails[0]?.value : null;

        if (!email) {
          return done(new Error('No email found'), undefined);
        }
        db.patron.create({
          data: {
            google_Id: profile.id,
            email,
            profile_img: profile.profileUrl,
            displayname: profile.displayName
          }
        }).then((newUser) => {
          done(null, newUser)
        })
      }
    })
  }
));


export default passportMiddleware;