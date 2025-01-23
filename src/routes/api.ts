import {Router} from "express";
import * as reserveController from "../controllers/apiController";
import {privateRouter} from "../config/passport";

const router = Router();

router.get("/reserva", reserveController.all);
router.get("/reserva/:id", reserveController.single);
router.post("/reserva", reserveController.add);
router.patch("/reserva/:id", reserveController.update);
router.delete("/reserva/:id", reserveController.destroy);

router.post("/register", reserveController.register);
router.post("/login", reserveController.login);
router.get("/list", privateRouter, reserveController.list);


export default router;