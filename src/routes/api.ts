import {Router} from "express";
import * as reserveController from "../controllers/apiController";
import {privateRouter} from "../config/passport";

import AuthValidator from "../validators/AuthValidator";

import ClientValidator from "../validators/ClientValidator";

const router = Router();

router.get("/reserva",privateRouter, reserveController.all);
router.get("/reserva/:id",privateRouter, reserveController.single);
router.post("/reserva", ClientValidator.addClient, privateRouter, reserveController.add);
router.patch("/reserva/:id", ClientValidator.updateClient ,privateRouter, reserveController.update);
router.delete("/reserva/:id",privateRouter, reserveController.destroy);

router.post("/register", AuthValidator.register,reserveController.register);
router.post("/login", AuthValidator.login,reserveController.login);
router.get("/list", privateRouter, reserveController.list);


export default router;