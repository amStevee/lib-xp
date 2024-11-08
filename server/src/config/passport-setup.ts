import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import db from './db';
import { User } from '../types';



passport.serializeUser((user,done) => {
  done(null, (user as User).id)
});

passport.deserializeUser((id:string, done) => {
  db.patron.findUnique({where: {id}})
  .then((user) => {
    done(null, user);
  });
});


const passportMiddleware = () => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error('passport client_id and secret required');
  }
  return passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/oauth2/redirect/google",
    scope: ['profile']
  },
  function(accessToken, refreshToken, profile, done) {
    
    db.patron.findUnique({where: {google_Id: profile.id}}).then((currentUser) => {
      if (currentUser) {
        done(null, currentUser);
      }else {

        db.patron.create({
          data: {
            google_Id: profile.id,
            email: profile._json.email || 'googole',
            firstname: profile._json.given_name,
            lastname: profile._json.family_name,
            profile_img: profile._json.picture || '',
            displayname: profile.displayName
          }
        }).then((newUser) => {
          done(null, newUser)
        })
      }
    })
  }
));}


export default passportMiddleware;