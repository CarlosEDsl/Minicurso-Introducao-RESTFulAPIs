import { Tarefa } from "../modelos/Tarefa";
import { TarefaRepositorio } from "../repositorios/TarefaRepositorio";

export class TarefaServico {
    
    tarefaRepositorio:TarefaRepositorio = TarefaRepositorio.getInstance();
    
    public createTarefa(tarefaData:any) {
        const {id_usuario, titulo, descricao} = tarefaData;
        if(!id_usuario)
            throw new Error("Especifique o usuário");
        const tarefa = new Tarefa(id_usuario, titulo, descricao);
        console.log(id_usuario, tarefa)
        return this.tarefaRepositorio.create(tarefa);
    }

    public findTarefa(id:number) {
        const tarefa = this.tarefaRepositorio.find(id);
        if(!tarefa)
            throw new Error("Tarefa não encontrada");
        return tarefa;
    }

    public findTarefasDoUsuario(id:number) {
        return this.tarefaRepositorio.findAllByUser(id);
    }

    public updateTarefa(tarefaData:any) {
        const {id, id_usuario, titulo, descricao} = tarefaData;

        const tarefa = new Tarefa(id_usuario, titulo, descricao, id);
        console.log("tarefa1: " + tarefa)
        return this.tarefaRepositorio.update(tarefa);
    }

    public deleteTarefa(id:number) {
        return this.tarefaRepositorio.delete(id);
    }

}