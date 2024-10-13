import { Router } from "express";
import { createUsuario, deleteUsuario, findUsuario, updateUsuario } from "../controladores/UsuarioControlador";

const usuarioRouter:Router = Router();

usuarioRouter.post('/', createUsuario);
usuarioRouter.get('/:id', findUsuario);
usuarioRouter.put('/:id', updateUsuario);
usuarioRouter.delete('/:id', deleteUsuario);

export default usuarioRouter;
