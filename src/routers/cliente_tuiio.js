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
  simulation,
  createOperation,
  flowRoute,
  fingerPrint,
  evaluation,
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
router.post("/security/getAccessToken", bodyParser.json(), getJwtGenerate);
router.post("/orchestation/onboarding", bodyParser.json(), onboarding);
router.post("/onboarding/register", bodyParser.json(), onboardingRegister);
router.post("/address", bodyParser.json(), Address);
router.post("/customer/kycForm", bodyParser.json(), kyc);

router.post("/loan/simulation", bodyParser.json(), simulation);
router.post("/loan/createOperation", bodyParser.json(), createOperation);
router.post("/security/flow/route", bodyParser.json(), flowRoute);
router.post("/capture/fingerprint", bodyParser.json(), fingerPrint);
router.post("/customer/evaluation", bodyParser.json(), evaluation);



export default router;
