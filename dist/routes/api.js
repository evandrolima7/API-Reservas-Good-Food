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
const express_1 = require("express");
const reserveController = __importStar(require("../controllers/apiController"));
const passport_1 = require("../config/passport");
const AuthValidator_1 = __importDefault(require("../validators/AuthValidator"));
const ClientValidator_1 = __importDefault(require("../validators/ClientValidator"));
const router = (0, express_1.Router)();
router.get("/reserva", passport_1.privateRouter, reserveController.all);
router.get("/reserva/:id", passport_1.privateRouter, reserveController.single);
router.post("/reserva", ClientValidator_1.default.addClient, passport_1.privateRouter, reserveController.add);
router.patch("/reserva/:id", ClientValidator_1.default.updateClient, passport_1.privateRouter, reserveController.update);
router.delete("/reserva/:id", passport_1.privateRouter, reserveController.destroy);
router.post("/register", AuthValidator_1.default.register, reserveController.register);
router.post("/login", AuthValidator_1.default.login, reserveController.login);
router.get("/list", passport_1.privateRouter, reserveController.list);
exports.default = router;
