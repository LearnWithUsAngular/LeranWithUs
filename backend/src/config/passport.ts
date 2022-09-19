import passport from "passport";
import { Strategy } from "passport-jwt";

/**
 * check http only cookie header.
 */
const cookieExtractor = (req: any) => {
  let jwt = null;
  if (req && req.cookies) {
    jwt = req.cookies['jwt'];
  }
  return jwt
}

const JWTStrategy = Strategy;
const secret = process.env.JWT_SECRET;

/**
 * passport authentication.
 */
passport.use('jwt', new JWTStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: secret
},
  function (jwtPayload: any, done: any) {
    const { expiration } = jwtPayload;
    if (Date.now() > expiration) {
      done('Unauthorized', false)
    }

    done(null, jwtPayload)
  }
));