import { Router } from "express";
import { sendCodeClient } from "../controllers/cliente_controller.js";
import bodyParser from "body-parser";
import {
  CambiarTelefono,
  DefinirContrasena,
  LoginAdmin,
  LogoutAdmin,
  ObtenerInformacionPrestamo,
  ObtenerParametros,
  ObtenerParametrosPrestamo,
  PagosElavon,
  Prestamo,
  ReenvioEnrolamiento,
  ValidarEnrolamiento,
} from "../controllers/admin_controller.js";

const router = Router();

// router.post("/security/client/sendCode", bodyParser.json(), sendCodeClient);
router.post("security/login", bodyParser.json(), LoginAdmin);
router.post("loan/elavonPayments", bodyParser.json(), PagosElavon);
router.post(
  "security/client/parameters",
  bodyParser.json(),
  ObtenerParametrosPrestamo
);
router.post("loan/info", bodyParser.json(), ObtenerInformacionPrestamo); //igual
router.post("security/password", bodyParser.json(), DefinirContrasena);
router.post("security/onboard", bodyParser.json(), ValidarEnrolamiento);
router.post("security/mail/valid", bodyParser.json(), ReenvioEnrolamiento);
router.post("security/logout", bodyParser.json(), LogoutAdmin);
router.post("loan/info", bodyParser.json(), Prestamo); //igual
router.get("/security/client/parameters", bodyParser.json(), ObtenerParametros);
router.put("security/client/changePhone", bodyParser.json(), CambiarTelefono);

export default router;
