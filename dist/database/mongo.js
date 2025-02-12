"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoConnect = async () => {
    try {
        console.log("Conectando ao MongoDB...");
        await (0, mongoose_1.connect)(process.env.MONGO_URL);
        console.log("MongoDB conectado com sucesso");
    }
    catch (e) {
        console.log("Erro ao Conectar MongoDB: ", e);
    }
};
exports.mongoConnect = mongoConnect;
