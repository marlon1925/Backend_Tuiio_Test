import express from "express";
import { CURP } from "../constants/data.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const validateType = (phoneMail) => {
  if (/@/.test(phoneMail)) {
    return "email";
  } else {
    return "phone";
  }
};

const getInfoCurp = (curp) => {
  return CURP[curp];
};

const sendCodeClient = async (req, res) => {
  console.log("\n________________________________________");
  console.log("\nINICIA SERVICIO DE ENVIO DE CÓDIGO OTP");
  console.log("\n________________________________________");
  console.log("ESTO TIENE REQ: ", req.body);
  try {
    // Verificar que todos los campos requeridos estén presentes
    const requiredFields = ["tipo", "canal", "phoneMail"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(402).json({
        result: false,
        messages: [
          `Los campos siguientes son requeridos: ${missingFields.join(", ")}`,
        ],
      });
    }

    // Verificar que el campo 'code' no esté vacío
    if (!req.body.phoneMail || req.body.phoneMail.trim() === "") {
      return res.status(403).json({
        result: false,
        messages: ["No existe un medio para enviar el código"],
      });
    }

    // Lógica adicional de validación si es necesario
    if (validateType(req.body.phoneMail) === "email") {
      // ES MAIL
      res.status(200).json({
        result: true,
        data: { idEnte: 0, idProce: 0, mode: 0 },
        messages: [
          "El código de verificación ha sido enviado a tu correo electrónico",
        ],
      });
    } else {
      // ES PHONE
      res.status(200).json({
        result: true,
        data: { idEnte: 0, idProce: 0, mode: 0 },
        messages: [
          "El código de verificación ha sido enviado a tu número telefónico",
        ],
      });
    }
  } catch (error) {
    console.log(error);
    // Manejar el error y devolver una variable quemada de falso en caso de error
    res
      .status(500)
      .json({ result: false, messages: [{ message: "Error al enviar OTP" }] });
  }
};

const validationCode = async (req, res) => {
  console.log("\n________________________________________");
  console.log("\nINICIA SERVICIO DE VALIDACIÓN DE CÓDIGO OTP");
  console.log("\n________________________________________");
  console.log("ESTO TIENE REQ: ", req.body);
  try {
    // Verificar que todos los campos requeridos estén presentes
    const requiredFields = ["tipo", "canal", "phoneMail", "code"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(402).json({
        result: false,
        messages: [
          `Los campos siguientes son requeridos: ${missingFields.join(", ")}`,
        ],
      });
    }

    // Verificar que el campo 'code' no esté vacío
    if (!req.body.code || req.body.code.trim() === "") {
      return res.status(403).json({
        result: false,
        messages: ["El campo 'code' no puede estar vacío"],
      });
    }

    // Lógica adicional de validación si es necesario
    if (req.body.code === "237509") {
      // Código válido
      res.status(200).json({
        result: true,
        data: { idEnte: 0, idProce: 0, mode: 0 },
        messages: ["Código validado con éxito"],
      });
    } else {
      // Código inválido
      res.status(404).json({
        result: false,
        data: { idEnte: 0, idProce: 0, mode: 0 },
        messages: ["Código inválido"],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      result: false,
      messages: [{ message: `Error al validar el código: ${error.message}` }],
    });
  }
};

const getPersonalInfo = async (req, res) => {
  console.log("\n________________________________________");
  console.log("\nINICIA SERVICIO DE ENVIO DE CONSULTA POR CURP");
  console.log("\n________________________________________");
  console.log("ESTO TIENE REQ: ", req.body);
  try {
    // Verificar que el campo 'code' no esté vacío
    if (!req.body.curp || req.body.curp.trim() === "") {
      return res.status(402).json({
        result: false,
        messages: ["El campo curp es obligatorio"],
      });
    }

    // Lógica adicional de validación si es necesario
    if (req.body.curp) {
      let infoCurp = getInfoCurp(req.body.curp);

      if (infoCurp) {
        res.status(200).json({
          result: true,
          data: { ...infoCurp },
          messages: ["Información obtenida con éxito"],
        });
      } else {
        res.status(403).json({
          result: true,
          data: {},
          messages: ["Curp incorrecto"],
        });
      }
    }
  } catch (error) {
    console.log(error);
    // Manejar el error y devolver una variable quemada de falso en caso de error
    res.status(500).json({
      result: false,
      messages: [{ message: "Error al consultar el curp" }],
    });
  }
};
const getJwtGenerate = async (req, res) => {
  try {
    if (Object.values(req.body).includes("")) {
      return res
        .status(400)
        .json({ msg: "Lo sentimos, los campos deben estar llenos" });
    }

    // Devolver una variable quemada de verdadero cuando el registro sea exitoso
    res.status(200).json({
      result: true,
      data: { token: "abcd" },
      messages: [],
    });
  } catch (error) {
    console.log(error);
    // Manejar el error y devolver una variable quemada de falso en caso de error
    res
      .status(500)
      .json({ result: false, messages: [{ message: "Error JWT" }] });
  }
};

const onboarding = async (req, res) => {
  try {
    const { password } = req.body;

    if (password == null) {
      return res.status(400).json({ result: false, message: "Ingrese correctamente la contraseña." });
    }

    res.status(200).json({
      result: true,
      data: {
        urlWeb: "https://bion.santander.com.mx/?token=TjNS5V1rMTpWOHhoXpPTw+mZzLppFbeQj3K1PUKGXOghtpvmOiwmQQkgNJDBstZiucB3ahna4N42qfadWr0zqgmtSPBn9jtU8RdD/QlCUlsUNWRCX2iPRxt3h9Oz4E8DARQidLu7QT1uehDTq0TeYKijrQkbaGDwhcvFZiJGNs8b3uYLAOWKx/BW+ukSvanIICN37zbiZzPVkjFzRxFrHbn5iZnAuI/PST1qaiTMeOZcezD/sRPY/vhG88QV665IGGhrotX3cJxL06qoH+7drgGTKpOHwCmsSGQNg4SzJkrdOBmmClTzhta/lB+J/PYw5VWn2pmlZh61EM5hxgnVxg==",
        idClient: null,
        idExpediente: "208832023011310050700000",
        code: null,
        message: null,
        opakeToken: null,
        evaluation: null
      },
      messages: [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: false, message: "Error." });
  }
};

export { sendCodeClient, onboarding, validationCode, getPersonalInfo, getJwtGenerate };
