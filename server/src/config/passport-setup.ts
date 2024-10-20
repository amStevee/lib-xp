import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import jwt from 'passport-jwt';


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    
  }
));
