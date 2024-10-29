import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import jwt from 'passport-jwt';
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
        const profile_photo = profile.photos ? profile.photos?.map(url => (url.value)) : 'null';

        db.patron.create({
          data: {
            google_Id: profile.id,
            email: profile.id,
            profile_img: profile_photo[0]!,
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