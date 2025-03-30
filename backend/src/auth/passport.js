const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await User.findById(payload.id);
      if (!user) return done(null, false);
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
