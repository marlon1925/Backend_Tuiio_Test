
const sendCodeClient = async (req, res) => {
    try {
        if (Object.values(req.body).includes("")) {
            return res.status(400).json({ msg: "Lo sentimos, los campos deben estar llenos" });
        }

        // Devolver una variable quemada de verdadero cuando el registro sea exitoso
        res.status(200).json({ result: true, data:{idEnte:0, idProce:0, mode:0},messages:[]});
    } catch (error) {
        console.log(error);
        // Manejar el error y devolver una variable quemada de falso en caso de error
        res.status(500).json({ result: false, messages:[{message:"Error al enviar OTP"}] });
    }
};



export {
    sendCodeClient,

}