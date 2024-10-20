import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import jwt from 'passport-jwt';
import db from './db';


const passportMiddleware = () => passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:8000/oauth2/redirect/google",
    scope: ['profile']
  },
  function(accessToken, refreshToken, profile, cb) {
    db.patron.findUnique({where: {google_Id: profile.id}})
  }
));


export default passportMiddleware;