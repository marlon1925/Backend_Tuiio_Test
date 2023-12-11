import express from "express";
import { CURP } from "../constants/data.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const LoginAdmin = async (req, res) => {
    try {
        const requiredFields = [
            "connectAddress",
            "culture",
            "device",
            "password",
            "username",
            "devVersion",
            "ip",
            "latitude",
            "longitude",
            "mac"
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: { "sessionTimeOut": "5" },
                messages: [],
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
const LogoutAdmin = async (req, res) => {
    try {
        const requiredFields = [];

        res.status(200).json({
            result: true,
            data: { "sessionTimeOut": "5" },
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
const PagosElavon = async (req, res) => {
    try {
        const requiredFields = [
            "amount",
            "email",
            "loanId",
            "maximumPayment",
            "minimumPayment",
            "moneda",
            "reference",
            "devVersion",
            "ip",
            "latitude",
            "longitude",
            "mac",
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: { "code": "" },
                messages: [],
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

const ObtenerParametrosPrestamo = async (req, res) => {
    try {
        const requiredFields = [
            "loanId"
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: { "code": "" },
                messages: [],
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

const ObtenerInformacionPrestamo = async (req, res) => {
    try {
        const requiredFields = [
            "customerId",
            "devVersion",
            "ip",
            "latitude",
            "longitude",
            "mac",
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: { "code": "" },
                messages: [],
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
const DefinirContrasena = async (req, res) => {
    try {
        const requiredFields = [
            "brandDevice",
            "carrier",
            "device",
            "modelDevice",
            "value",
            "versionOS",
            "devVersion",
            "ip",
            "latitude",
            "longitude",
            "mac",
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: { "code": "" },
                messages: [],
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
const ValidarEnrolamiento = async (req, res) => {
    try {
        const requiredFields = [
            "codigo",
            "devVersion",
            "ip",
            "latitude",
            "longitude",
            "mac",
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: {
                    "registryCode": null,
                    "nombres": "NOMBRE621181",
                    "apellidos": "APELLIDO621181",
                    "numeroTramite": null,
                    "telefono": "0000621181",
                    "idCliente": "621181",
                    "numeroCredito": "223810355675",
                    "ipLocal": null,
                    "idSesionCliente": null
                },
                messages: [],
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
const ReenvioEnrolamiento = async (req, res) => {
    try {
        const requiredFields = [
            "cellphoneNumber",
            "validationType",
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: {
                    "mail": null,
                    "cellphoneNumber": null,
                    "validationType": null,
                    "isValid": true
                },
                messages: [],
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
const Prestamo = async (req, res) => {
    try {
        const requiredFields = [
            "customerId",
            "operation",
            "option",
            "productType",
        ];
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
        } else {
            res.status(200).json({
                result: true,
                data: {
                    "code": "",
                },
                messages: [],
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

const ObtenerParametros = async (req, res) => {
    try {
        res.status(200).json({
            result: true,
            data: [],
            messages: [],

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: "Error." });
    }
}

const CambiarTelefono = async (req, res) => {
    try {
        const requiredFields = [
            "numero",
        ];
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
        } else {

            // Lógica para actualizar el número de teléfono
            // await updateUserPhoneNumber(req.user.id, req.body.numero);

            res.status(200).json({
                result: true,
                data: {
                    "code": "",
                },
                messages: [],
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

export { LoginAdmin, PagosElavon, ObtenerParametrosPrestamo, ObtenerInformacionPrestamo, DefinirContrasena, ValidarEnrolamiento, ReenvioEnrolamiento, LogoutAdmin, Prestamo, ObtenerParametros, CambiarTelefono };