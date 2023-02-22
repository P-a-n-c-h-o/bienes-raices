import express  from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import usarioRoutes from './routes/usuarioRoutes.js'
import propiedadesRoutes from './routes/propiedadesRoutes.js'
import appRoutes from './routes/appRoutes.js'
import apiRoutes from './routes/apiRoutes.js'
import db from './config/db.js'

// crear la app
const app = express()


//Habilitar lectura de datos de formularios
app.use(express.urlencoded({extended: true}))

// Habilitar cookie Parser
app.use(cookieParser())

// Habilitar csrf
app.use( csrf({cookie: true}))

//Conexion a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('conexión Correcta a la Base de datos')


} catch (error) {
    console.log(error);
}

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta Pública
app.use(express.static('public'))


// routing
app.use('/', appRoutes) 
app.use('/auth', usarioRoutes)
app.use('/', propiedadesRoutes)
app.use('/api', apiRoutes)

const host= '0.0.0.0';


//definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3001;
  app.listen(port,host, () => {
    console.log(`EL SERVIDOR ESTA FUNCIONANDO EN EL PUERTO ${port}`)
});