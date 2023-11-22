import {Router} from 'express'
import { sendCodeClient } from "../controllers/cliente_controller.js";

const router = Router()


router.post("/security/client/sendCode", sendCodeClient);



export default router