"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.findId = exports.all = void 0;
const Agenda_1 = __importDefault(require("../model/Agenda"));
const all = async () => {
    await Agenda_1.default.find();
    return;
};
exports.all = all;
const findId = async (id) => {
    return await Agenda_1.default.findOne({ _id: id });
};
exports.findId = findId;
const addUser = async (name, phone, dateReserve, timeReserve, quantity, observations) => {
    return await Agenda_1.default.create({
        name,
        phone,
        dateReserve,
        timeReserve,
        quantity,
        observations,
    });
};
exports.addUser = addUser;
