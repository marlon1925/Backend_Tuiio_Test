import { Router } from "express";
import {
  getJwtGenerate,
  getPersonalInfo,
  sendCodeClient,
  validationCode,
} from "../controllers/cliente_controller.js";
import bodyParser from "body-parser";

const router = Router();

router.post("/security/client/sendCode", bodyParser.json(), sendCodeClient);
router.post(
  "/security/client/validationCode",
  bodyParser.json(),
  validationCode
);
router.post("/renapo/curp", bodyParser.json(), getPersonalInfo);
router.post("/security/getAccessToken", bodyParser.json(),
  getJwtGenerate)
export default router;
