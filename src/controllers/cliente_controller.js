import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sendCodeClient = async (req, res) => {
  try {
    if (Object.values(req.body).includes("")) {
      return res
        .status(400)
        .json({ msg: "Lo sentimos, los campos deben estar llenos" });
    }

    // Devolver una variable quemada de verdadero cuando el registro sea exitoso
    res.status(200).json({
      result: true,
      data: { idEnte: 0, idProce: 0, mode: 0 },
      messages: [],
    });
  } catch (error) {
    console.log(error);
    // Manejar el error y devolver una variable quemada de falso en caso de error
    res
      .status(500)
      .json({ result: false, messages: [{ message: "Error al enviar OTP" }] });
  }
};

const validationCode = async (req, res) => {
  console.log("ESTO TIENE REQ: ", req.body);
  try {
    // Verificar que todos los campos requeridos estén presentes
    const requiredFields = ["tipo", "canal", "phoneMail", "code"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        result: false,
        messages: [
          `Los campos siguientes son requeridos: ${missingFields.join(", ")}`,
        ],
      });
    }

    // Verificar que el campo 'code' no esté vacío
    if (!req.body.code || req.body.code.trim() === "") {
      return res.status(400).json({
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
      res.status(400).json({
        result: false,
        data: { idEnte: 0, idProce: 0, mode: 0 },
        messages: ["Código incorrecto"],
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

export { sendCodeClient, validationCode };
