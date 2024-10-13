import { Request, Response } from 'express';
import { TarefaServico } from './../servicos/TarefaServico';

const tarefaServico:TarefaServico = new TarefaServico();

export function createTarefa(req:Request, res:Response) {
    try{
        const data = req.body;
        return res.status(200).json(tarefaServico.createTarefa(data));
    } catch (e:any) {
        return res.status(400).json(e.message);
    }
}

export function findTarefa(req:Request, res:Response) {
    try {
        const id = req.params.id;
        
        return res.status(200).json(tarefaServico.findTarefa(parseInt(id)))
    } catch (e:any) {
        return res.status(404).json(e.message);
    }
}

export function updateTarefa(req:Request, res:Response) {
    try{
        const id = req.params.id;
        const data = req.body;
        data.id = parseInt(id);

        return res.status(200).json(tarefaServico.updateTarefa(data));
    } catch (e:any) {
        return res.status(404).json(e.message);
    }
}

export function deleteTarefa(req:Request, res:Response) {
    try {
        const id = req.params.id;
        return res.status(200).json(tarefaServico.deleteTarefa(parseInt(id)));
    } catch (e:any) {
        return res.status(404).json(e.message);
    }
}


