import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import db from './db';

// JWT strategy options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'your_jwt_secret', // Secret key to sign and verify the JWT token
};

// JWT Strategy
const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    // Find user based on ID stored in the JWT payload
    const user = await db.patron.findUnique({where: {id: payload.sub}});
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
});

// Use the strategy
export const passport_jwt = () => passport.use(jwtStrategy);
