"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = exports.generateToken = void 0;
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_jwt_1 = require("passport-jwt");
const User_1 = __importDefault(require("../model/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const notAuthorizedJson = { status: 401, message: "Não autorizado" };
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY
};
passport_1.default.use(new passport_jwt_1.Strategy(options, async (payload, done) => {
    const user = await User_1.default.findById(payload.id);
    if (user) {
        return done(null, user);
    }
    else {
        return done(notAuthorizedJson, false);
    }
}));
const generateToken = (data) => {
    return jsonwebtoken_1.default.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const privateRouter = (req, res, next) => {
    passport_1.default.authenticate("jwt", (err, user) => {
        if (err || !user) {
            return res.status(401).json(notAuthorizedJson);
        }
        req.user = user;
        next();
    })(req, res, next);
};
exports.privateRouter = privateRouter;
exports.default = passport_1.default;
