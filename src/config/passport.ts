import passport from "passport"; 
import dotenv from "dotenv";
import { Strategy as JWTStrategy, ExtractJwt} from "passport-jwt";
import  User  from "../model/User";
import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

dotenv.config();

const notAuthorizedJson = {status: 401, message: "Não autorizado"};

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY as string
}

passport.use(new JWTStrategy(options, async (payload, done) => {
  const user = await User.findById(payload.id);
  if (user) {
    return done(null, user);
  } else {
    return done(notAuthorizedJson, false);
  }
}));

export const generateToken = (data: object) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });
};

export const privateRouter = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", (err: any, user: Express.User | undefined) => {
    if (err || !user) {
      return res.status(401).json(notAuthorizedJson);
    }

    req.user = user;
    next();
  })(req, res, next);
};

export default passport;