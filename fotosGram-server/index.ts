import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';


const server = new Server();


// Rutas de mi app

server.app.use('/user', userRoutes);


// Conectar db
mongoose.connect('mongodb://localhost:27017/fotosgram', 
                { useNewUrlParser: true, useCreateIndex: true}, ( err )=> {
                    if( err ) throw err;

                    console.log('Base de datos ONLINE');
                });



// Levantar express
server.start(() => {
    console.log(`Servidor corriendo en port: ${server.port}`)
});