"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    dateReserve: { type: String, required: true },
    timeReserve: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    observations: { type: String, default: "" },
});
const modelName = "clients";
exports.default = mongoose_1.models[modelName] || (0, mongoose_1.model)(modelName, schema);
