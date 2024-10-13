import { Router } from "express";
import { createTarefa, deleteTarefa, findTarefa, updateTarefa } from "../controladores/TarefaControlador";

const tarefaRouter:Router = Router();

tarefaRouter.post('/', createTarefa);
tarefaRouter.get('/:id', findTarefa);
tarefaRouter.put('/:id', updateTarefa);
tarefaRouter.delete('/:id', deleteTarefa);

export default tarefaRouter;
