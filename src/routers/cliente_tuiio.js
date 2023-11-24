import { Router } from "express";
import {
  getJwtGenerate,
  getPersonalInfo,
  sendCodeClient,
  validationCode,
  onboarding,
} from "../controllers/cliente_controller.js";
import bodyParser from "body-parser";
import { route } from "moongose/routes/users.js";

const router = Router();

router.post("/security/client/sendCode", bodyParser.json(), sendCodeClient);
router.post(
  "/security/client/validationCode",
  bodyParser.json(),
  validationCode
);
router.post("/renapo/curp", bodyParser.json(), getPersonalInfo);
router.post("/security/getAccessToken", bodyParser.json(),
  getJwtGenerate);
route.post("/orchestation/onboarding", bodyParser.json(),
onboarding);

export default router;
