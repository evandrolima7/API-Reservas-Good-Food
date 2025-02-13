"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.matchPassword = exports.findByEmail = exports.createUser = void 0;
const User_1 = __importDefault(require("../model/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = async (name, email, password) => {
    let hasUser = await User_1.default.findOne({ email });
    if (!hasUser) {
        const hash = bcrypt_1.default.hashSync(password, 10);
        const newUser = await User_1.default.create({
            name,
            email,
            password: hash
        });
        return newUser;
    }
    else {
        return new Error("Email já existe.");
    }
};
exports.createUser = createUser;
const findByEmail = async (email) => {
    return await User_1.default.findOne({ email });
};
exports.findByEmail = findByEmail;
const matchPassword = async (passwordText, encrypted) => {
    return bcrypt_1.default.compare(passwordText, encrypted);
};
exports.matchPassword = matchPassword;
const all = async () => {
    return User_1.default.find();
};
exports.all = all;
