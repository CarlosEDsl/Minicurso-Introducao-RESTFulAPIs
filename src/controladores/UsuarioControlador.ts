import { UsuarioServico } from './../servicos/UsuarioServico';
import { Request, Response } from "express";


const usuarioServico:UsuarioServico = new UsuarioServico();

export function createUsuario(req:Request, res:Response) {
    try{    
        const data = req.body;
        return res.status(200).json(usuarioServico.createUsuario(data));
    } catch(err) {
        return res.status(400).json(err);
    }
}

export function findUsuario(req:Request, res:Response) {
    try {
        const id = req.params.id;
        return res.status(200).json(usuarioServico.findUsuario(parseInt(id)))
    } catch (e:any) {
        return res.status(404).json(e.message);
    }
}

export async function updateUsuario(req:Request, res:Response) {
    try{
        const id = req.params.id;
        const data = req.body;
        data.id = parseInt(id);

        return res.status(200).json(usuarioServico.updateUsuario(data));
    } catch (e:any) {
        return res.status(404).json(e.message);
    }
}

export async function deleteUsuario(req:Request, res:Response) {
    try {
        const id = req.params.id;

        return res.status(200).json(usuarioServico.deleteUsuario(parseInt(id)));
    } catch (e:any) {
        return res.status(404).json(e.message);
    }
}
