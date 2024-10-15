import { Tarefa } from "../modelos/Tarefa";

export class TarefaRepositorio {

    private static instance:TarefaRepositorio;
    private Tarefas:Tarefa[] = [];

    public static getInstance() {
        if(!TarefaRepositorio.instance)
            TarefaRepositorio.instance = new TarefaRepositorio();
        return TarefaRepositorio.instance
    }


}