"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = __importDefault(require("express-validator"));
exports.default = {
    addClient: (0, express_validator_1.default)({
        name: {
            trim: true,
            isLength: {
                options: { min: 2 },
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres',
        },
        phone: {
            trim: true,
            isLength: {
                options: { min: 11, max: 15 },
            },
            matches: {
                options: [/^\+?\d{10,15}$/],
                errorMessage: 'Telefone inválido, deve ser um número válido',
            },
        },
        dateReserve: {
            isDate: {
                errorMessage: 'Data inválida. Use o formato YYYY-MM-DD',
            },
            toDate: true,
            errorMessage: 'Data inválida',
        },
        timeReserve: {
            matches: {
                options: [/^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/],
                errorMessage: 'Hora inválida. Use o formato HH:mm',
            },
        },
        quantity: {
            isInt: true,
            toInt: true,
            errorMessage: 'A quantidade deve ser um número inteiro',
            isPositive: true,
            custom: {
                options: (value) => value >= 1,
                errorMessage: 'A quantidade deve ser maior ou igual a 1',
            },
        },
        observations: {
            optional: true,
            isString: {
                errorMessage: 'Observações devem ser uma string',
            },
            trim: true,
            isLength: {
                options: { max: 500 },
                errorMessage: 'Observações podem ter no máximo 500 caracteres',
            },
        },
    }),
    updateClient: (0, express_validator_1.default)({
        name: {
            optional: true,
            isLength: {
                options: { min: 2 },
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres',
        },
        phone: {
            optional: true,
            isLength: {
                options: { min: 11, max: 15 },
            },
            matches: {
                options: [/^\+?\d{10,15}$/],
                errorMessage: 'Telefone inválido, deve ser um número válido',
            },
        },
        dateReserve: {
            optional: true,
            isDate: {
                errorMessage: 'Data inválida. Use o formato YYYY-MM-DD',
            },
            toDate: true,
        },
        timeReserve: {
            optional: true,
            matches: {
                options: [/^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/],
                errorMessage: 'Hora inválida. Use o formato HH:mm',
            },
        },
        quantity: {
            optional: true,
            isInt: true,
            toInt: true,
            errorMessage: 'A quantidade deve ser um número inteiro',
            isPositive: true,
            custom: {
                options: (value) => value >= 1,
                errorMessage: 'A quantidade deve ser maior ou igual a 1',
            },
        },
        observations: {
            optional: true,
            isString: {
                errorMessage: 'Observações devem ser uma string',
            },
            trim: true,
            isLength: {
                options: { max: 500 },
                errorMessage: 'Observações podem ter no máximo 500 caracteres',
            },
        },
    }),
};
