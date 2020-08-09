import Server from './classes/server';
import userRoutes from './routes/usuario';
const server = new Server();


// Rutas de mi app

server.app.use('/user', userRoutes);


server.start(() => {
    console.log(`Servidor corriendo en port: ${server.port}`)
});