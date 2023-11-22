import Paciente from "../models/Cliente.js"
import mongoose from "mongoose"

const listarPacientes = async (req,res)=>{
    const pacientes = await Paciente.find({estado:true}).where('veterinario').equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    res.status(200).json(pacientes)
}


const detallePaciente = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Sorry, there is no vet ${id}`});
    const paciente = await Paciente.findById(id).select("-createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    res.status(200).json(paciente)
}


const registrarCliente = async (req, res) => {
    try {
        if (Object.values(req.body).includes("")) {
            return res.status(400).json({ msg: "Lo sentimos, los campos deben estar llenos" });
        }

        // Devolver una variable quemada de verdadero cuando el registro sea exitoso
        res.status(200).json({ success: true, msg: "Registro exitoso" });
    } catch (error) {
        console.log(error);
        // Manejar el error y devolver una variable quemada de falso en caso de error
        res.status(500).json({ success: false, msg: "Error al registrar el cliente" });
    }
};




const actualizarPaciente = async(req,res)=>{
    try {
        const {id} = req.params
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Sorry, you must fill in all fields"})
        if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Sorry, there is no vet ${id}`});
        await Paciente.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"Successful patient update"})
    } 
    catch (error) {
        console.log(error)
    }
}



const eliminarPaciente = async (req,res)=>{
    try{
        const {id} = req.params
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Sorry, you must fill in all fields"})
        if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Sorry, there is no vet ${id}`})
        const {salida} = req.body
        await Paciente.findByIdAndUpdate(req.params.id,{salida:Date.parse(salida),estado:false})
        res.status(200).json({msg:"Date of successful patient departure"})
    }
    catch(error){
        console.log(error)
    }
}

export {
    listarPacientes,
    detallePaciente,
    registrarCliente,
    actualizarPaciente,
    eliminarPaciente
}