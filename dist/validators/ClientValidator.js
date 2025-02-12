"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const { body } = require("express-validator");

exports.default = {
    addClient: [
        body('name')
            .trim()
            .isLength({ min: 2 })
            .withMessage('Nome precisa ter pelo menos 2 caracteres'),

        body('phone')
            .trim()
            .isLength({ min: 11, max: 15 })
            .matches(/^\+?\d{10,15}$/)
            .withMessage('Telefone inválido, deve ser um número válido'),

        body('dateReserve')
            .isDate()
            .withMessage('Data inválida. Use o formato YYYY-MM-DD')
            .toDate(),

        body('timeReserve')
            .matches(/^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/)
            .withMessage('Hora inválida. Use o formato HH:mm'),

        body('quantity')
            .isInt()
            .toInt()
            .withMessage('A quantidade deve ser um número inteiro')
            .isPositive()
            .custom(value => value >= 1)
            .withMessage('A quantidade deve ser maior ou igual a 1'),

        body('observations')
            .optional()
            .isString()
            .withMessage('Observações devem ser uma string')
            .trim()
            .isLength({ max: 500 })
            .withMessage('Observações podem ter no máximo 500 caracteres'),
    ],

    updateClient: [
        body('name')
            .optional()
            .isLength({ min: 2 })
            .withMessage('Nome precisa ter pelo menos 2 caracteres'),

        body('phone')
            .optional()
            .isLength({ min: 11, max: 15 })
            .matches(/^\+?\d{10,15}$/)
            .withMessage('Telefone inválido, deve ser um número válido'),

        body('dateReserve')
            .optional()
            .isDate()
            .withMessage('Data inválida. Use o formato YYYY-MM-DD')
            .toDate(),

        body('timeReserve')
            .optional()
            .matches(/^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/)
            .withMessage('Hora inválida. Use o formato HH:mm'),

        body('quantity')
            .optional()
            .isInt()
            .toInt()
            .withMessage('A quantidade deve ser um número inteiro')
            .custom(value => value >= 1)
            .withMessage('A quantidade deve ser maior ou igual a 1'),

        body('observations')
            .optional()
            .isString()
            .withMessage('Observações devem ser uma string')
            .trim()
            .isLength({ max: 500 })
            .withMessage('Observações podem ter no máximo 500 caracteres'),
    ],
};
