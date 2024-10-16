import express from 'express';
import router from './rotas/rotaUsuario';
import usuarioRouter from './rotas/rotaUsuario';
const app = express();

const PORT = 8080;

app.use(express.json());
app.use('/user', usuarioRouter);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));
