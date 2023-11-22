import {Router} from 'express'
import { registrarCliente } from "../controllers/cliente_controller.js";

const router = Router()


router.post("security/client/sendCode", registrarCliente);



export default router