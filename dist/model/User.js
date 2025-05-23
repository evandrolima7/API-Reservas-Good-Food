"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const modelName = "users";
exports.default = mongoose_1.models[modelName] || (0, mongoose_1.model)(modelName, schema);
