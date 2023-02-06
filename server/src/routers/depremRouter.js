import {Router} from "express";
import {create, index} from '../controllers/depremController.js'

const router = Router();

router.get("/", index);
router.post("/create", create);

export default router