"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const { body } = require('express-validator');

exports.default = {
    register: [
        body('name')
            .trim()
            .isLength({ min: 2 })
            .withMessage('Nome precisa ter pelo menos 2 caracteres'),

        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('Email inválido'),

        body('password')
            .isLength({ min: 6 })
            .withMessage('Senha precisa ter pelo menos 6 caracteres')
    ],

    login: [
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('Email inválido'),

        body('password')
            .isLength({ min: 6 })
            .withMessage('Senha precisa ter pelo menos 6 caracteres')
    ]
};