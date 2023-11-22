import mongoose, {Schema,model} from 'mongoose'

const clienteSchema = new Schema({
    fullname:{
        type:String,
        require:true,
        trim:true
    },
    mail:{
        type:String,
        require:true,
        trim:true
    },
    phone:{
        type:String,
        require:true,
        trim:true
    },
},{
    timestamps:true
})

export default model('Cliente',clienteSchema)