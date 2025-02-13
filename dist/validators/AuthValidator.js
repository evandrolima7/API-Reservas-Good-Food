"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = __importDefault(require("express-validator"));
exports.default = {
    register: (0, express_validator_1.default)({
        name: {
            trim: true,
            isLength: {
                options: { min: 2 },
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres',
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido',
        },
        password: {
            isLength: {
                options: { min: 6 },
            },
            errorMessage: 'Senha precisa ter pelo menos 6 caracteres',
        },
    }),
    login: (0, express_validator_1.default)({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido',
        },
        password: {
            isLength: {
                options: { min: 6 },
            },
            errorMessage: 'Senha precisa ter pelo menos 6 caracteres',
        },
    }),
};
