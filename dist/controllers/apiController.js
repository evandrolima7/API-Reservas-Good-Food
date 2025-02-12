"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.login = exports.register = exports.destroy = exports.update = exports.add = exports.single = exports.all = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = require("../config/passport");
const UserService = __importStar(require("../services/UserService"));
const ClientService = __importStar(require("../services/ClientService"));
dotenv_1.default.config();
const all = async (req, res) => {
    let reservations = await ClientService.all();
    res.json({ reservations });
};
exports.all = all;
const single = async (req, res) => {
    let { id } = req.params;
    let reservations = await ClientService.findId(id);
    res.json({ reservations });
};
exports.single = single;
const add = async (req, res) => {
    const { name, phone, dateReserve, timeReserve, quantity, observations } = req.body;
    if (name && phone && dateReserve && timeReserve && quantity && observations) {
        const newReserve = await ClientService.addUser(name, phone, dateReserve, timeReserve, quantity, observations);
        res.status(201).json({ newReserve });
    }
    else {
        res.status(400).json({ error: "Dados não enviados" });
    }
};
exports.add = add;
const update = async (req, res) => {
    const { id } = req.params;
    let client = await ClientService.findId(id);
    if (!client) {
        res.status(404).json({ error: "Reserva não encontrada!" });
        return;
    }
    const updatedFields = req.body;
    Object.keys(updatedFields).forEach(field => {
        if (updatedFields[field]) {
            client[field] = updatedFields[field];
        }
    });
    try {
        await client.save();
        res.json({ client });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar reserva" });
    }
};
exports.update = update;
const destroy = async (req, res) => {
    let { id } = req.params;
    let reserve = await ClientService.findId(id);
    if (reserve) {
        await reserve.deleteOne();
    }
    res.json({});
};
exports.destroy = destroy;
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let newUser = await UserService.createUser(name, email, password);
        if (newUser instanceof Error) {
            res.status(400).json({ error: newUser.message });
            return;
        }
        const token = (0, passport_1.generateToken)({ id: newUser._id });
        res.status(201).json({ id: newUser._id, token });
    }
    catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await UserService.findByEmail(email);
        if (!user) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }
        const isPasswordValid = await UserService.matchPassword(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: "Credenciais inválidas" });
            return;
        }
        const token = (0, passport_1.generateToken)({ id: user._id });
        res.json({ status: true, token });
    }
    catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
};
exports.login = login;
const list = async (req, res) => {
    let users = await UserService.all();
    const list = users.map(user => user.email);
    res.json({ list });
};
exports.list = list;
