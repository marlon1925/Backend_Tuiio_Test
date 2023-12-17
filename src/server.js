import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerCliente from './routers/cliente_tuiio.js'
import routerAmin from '../src/routers/admin.js'



// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port', process.env.port || 3000)
app.use(cors())

// Middlewares no
app.use(express.json())


// Variables globales


// Rutas 
app.use('/CTSProxy/services/resources/channels/mobilebanking', routerCliente)
//app.use('/CTSProxy/services/resources/channels/mobilebanking', routerAmin)

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"))

export default app