import {Router} from "express";
import * as reserveController from "../controllers/apiController";

const router = Router();

router.get("/reserva", reserveController.all);
router.get("/reserva/:id", reserveController.single);
router.post("/reserva", reserveController.add);
router.put("/reserva/:id", reserveController.update);
router.delete("/reserva/:id", reserveController.destroy);


export default router;