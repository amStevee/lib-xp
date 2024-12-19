import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import db from './prismaClient';
import { User } from '../entities/User';



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
    return
  }
  return passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.API_URL}/oauth2/redirect/google`,
    scope: ['profile']
  },
  function(accessToken, refreshToken, profile, done) {
    
    db.patron.findUnique({where: {google_Id: profile.id}}).then((currentUser) => {
      if (currentUser) {
        done(null, currentUser);
      }else {

        console.log( profile._json.email, profile.emails)
        if (!profile.name) {
          throw new Error('name is undefined in patron relation')
        }
          
          db.patron.create({
            data: {
              google_Id: profile.id,
              email: profile._json.email || profile.id,
              firstname: profile._json.family_name || profile.name.familyName,
              lastname: profile._json.given_name || profile.name.givenName,
              profile_img: profile._json.picture || '',
              displayname: profile.displayName,
              borrowed_books: []
            }

        }).then((newUser) => {
          done(null, newUser)
        })
      }
    })
  }
));}


export default passportMiddleware;