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

const cobisOCR = async (req, res) => {
  try {
    res.status(200).json({
      result: true,
      data: {
        idExpediente: "554769202207120121530000",
        idValidas: "610375adba3a4b7cb99b545fddbefd7b",
        documentType: "MX_IDCard_2019",
        ocr: [
          {
            fielName: "Nombre / Name",
            name: "PD_Name_Out",
            text: "JUAN JESUS",
          },
          {
            fieldName: "Apellidos / Last Name",
            name: "PD_LastName_Out",
            text: "SANTOS SANCHEZ"
          },
          {
            fieldName: "Primer Apellido / First Last Name",
            name: "PD_LastName1_Out",
            text: "SANTOS"
          },
          {
            fieldName: "Segundo Apellido / Second Last Name",
            name: "PD_LastName2_Out",
            text: "SANCHEZ"
          },
          {
            fieldName: "Clave de Elector / Elector Key",
            name: "PD_IdentificationNumber_Out",
            text: "SNSNIN01061609H500"
          },
          {
            fieldName: "Código de Identificación de la Credencial / Code Identification Credential",
            name: "OD_IDCredentialCode_Out",
            text: "211364350"
          },
          {
            fieldName: "País de expedición / Issuing country",
            name: "DD_IssuingCountry_Out",
            text: "MEX"
          },
          {
            fieldName: "Número OCR / OCR Number",
            name: "OD_OCRNumber_Out",
            text: "2089124511845"
          },
          {
            fieldName: "Sección / Section",
            name: "OD_Section_Out",
            text: "2089"
          },
          {
            fieldName: "Número de Emisión / Issue Number",
            name: "OD_EmissionNumber_Out",
            text: "01"
          },
          {
            fieldName: "FUAR / FUAR",
            name: "OD_FUAR_Out",
            text: "00998"
          },
          {
            fieldName: "",
            name: "OD_EmisionNumber_Out",
            text: ""
          },
          {
            fieldName: "",
            name: "OD_Folio_Out",
            text: ""
          },
          {
            fieldName: "",
            name: "PD_AddressDistrict_Out",
            text: ""
          },
          {
            fieldName: "",
            name: "PD_AddressMunicipality_Out",
            text: ""
          }
        ],
        triesNumber: 2
      },
      messages: []
    })


  } catch (error) {
    console.error(error);
    res.status(500).json({ result: true, message: "Error." });
  }
}

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
    res.status(500).json({ result: true, message: "Error." });
  }
};
const onboardingRegister = async (req, res) => {
  try {
    const result = {
      result: true,
      data: {
        consent: {
          privacyNotice: "true",
          state: "true",
          termsConditions: "true",
        },
        data: {
          bioCic: "211364350",
          bioEmissionNumber: "01",
          bioIdentificationType: "INE",
          bioOCR: "2089124511845",
          bioReaderKey: "SNSNIN01061609H500",
          birthdate: "2001-06-16",
          birthplace: "DF",
          codCliente: 0,
          curp: "SASJ010616HDFNNNA3",
          firstName: "JUAN",
          gender: "H",
          lastName: "SANTOS",
          mail: "cacuangodarwin1999@gmail.com",
          secondLastName: "SANCHEZ",
          secondName: " JESUS",
        },
        modo: 0,
        security: {
          geolocationPassword: {
            dateAndTime: "2023-01-13 11:17:57",
            latitude: "-0.1805775",
            longitude: "-78.4886669",
          },
          mode: "I",
          password: "123580",
          phrase: "Frase",
          proceedingsID: "554769202207120121530000",
          welcomeImageId: 25,
        },
      },
    };

    // Agregar información del dispositivo al JSON
    result.device = {
      brandDevice: "Redmi",
      carrier: "Claro",
      cellphoneNumber: "0955853566",
      connectAddress: "192.168.200.34",
      device: "RKQ1.211001.001",
      modelDevice: "2201117TG",
      versionOS: "11",
    };

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: false, message: "Error." });
  }
};


export { sendCodeClient, onboarding, validationCode, getPersonalInfo, getJwtGenerate, onboardingRegister,cobisOCR };
