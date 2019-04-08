import Server from './classes/Server';
import router from  './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();
// BodyParser
server.app.use( bodyParser.urlencoded({extended : true}) );
server.app.use( bodyParser.json());
// Rutas de servicio
server.app.use('/', router)

// CORS
server.app.use(cors({ origin : true, credentials : true}))

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});