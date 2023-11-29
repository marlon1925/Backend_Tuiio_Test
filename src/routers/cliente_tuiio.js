import { Router } from "express";
import {
  getJwtGenerate,
  getPersonalInfo,
  sendCodeClient,
  validationCode,
  onboarding,
  onboardingRegister,
  cobisOCR,
  Address,
  kyc,
  
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
router.post("/managequeue/ocrmsg", bodyParser.json(), cobisOCR);
router.post("/security/getAccessToken", bodyParser.json(),
  getJwtGenerate);
router.post("/orchestation/onboarding", bodyParser.json(),
onboarding);
router.post("/onboarding/register", bodyParser.json(),
onboardingRegister);
router.post("/address", bodyParser.json(),Address);
router.post("/customer/kycForm", bodyParser.json(),kyc);

export default router;
