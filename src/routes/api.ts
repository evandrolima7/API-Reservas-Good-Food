import {Router} from "express";
import * as reserveController from "../controllers/apiController";
import {privateRouter} from "../config/passport";

const router = Router();

router.get("/reserva",privateRouter, reserveController.all);
router.get("/reserva/:id",privateRouter, reserveController.single);
router.post("/reserva",privateRouter, reserveController.add);
router.patch("/reserva/:id",privateRouter, reserveController.update);
router.delete("/reserva/:id",privateRouter, reserveController.destroy);

router.post("/register", reserveController.register);
router.post("/login", reserveController.login);
router.get("/list", privateRouter, reserveController.list);


export default router;