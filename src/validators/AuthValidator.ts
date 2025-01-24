import checkSchema from 'express-validator';
import { RequestHandler } from 'express';

export default {
    register: checkSchema({
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
    }) as RequestHandler,

    login: checkSchema({
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
    }) as RequestHandler,
};
