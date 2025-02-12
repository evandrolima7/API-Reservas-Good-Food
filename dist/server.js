"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./routes/api"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = require("./database/mongo");
const passport_1 = __importDefault(require("passport"));
dotenv_1.default.config();
(0, mongo_1.mongoConnect)();
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
server.use(express_1.default.urlencoded({ extended: true }));
server.use(passport_1.default.initialize());
server.use(api_1.default);
server.use((req, res) => {
    res.status(404);
    res.json({ error: "Endpoint não encontrado." });
});
const errorHandler = (err, req, res, next) => {
    err.status ? res.status(err.status) : res.status(400);
    err.message ? res.json({ error: err.message }) : res.json({ error: "Ocorreu um erro" });
};
server.use(errorHandler);
server.listen(process.env.PORT);
