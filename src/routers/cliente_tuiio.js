import {Router} from 'express'
import { registrarCliente } from "../controllers/cliente_controller.js";

const router = Router()


router.post("/client/register", registrarCliente);



export default router