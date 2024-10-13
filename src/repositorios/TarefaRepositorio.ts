import { Tarefa } from "../modelos/Tarefa";
import { IdGenerator } from "../utils/idGenerator";

export class TarefaRepositorio {

    private static instance:TarefaRepositorio;
    private idGenerator:IdGenerator;

    public static getInstance() {
        if(!TarefaRepositorio.instance)
            TarefaRepositorio.instance = new TarefaRepositorio();
        return TarefaRepositorio.instance
    }

    private constructor() {
        this.idGenerator = new IdGenerator();
    }

    private Tarefas:Tarefa[] = [];


    public create(tarefa:Tarefa):Tarefa {
        tarefa.id = this.idGenerator.nextId();
        this.Tarefas.push(tarefa);
        return tarefa;
    }

    public find(id:number):Tarefa | undefined {
        return this.Tarefas.find(tarefa => tarefa.id === id);
    }

    public findAllByUser(id:number) {
        return this.Tarefas.filter(tarefa => tarefa.id_usuario === id);
    }

    public update(tarefa:Tarefa):Tarefa {
        const index = this.Tarefas.findIndex(valor => valor.id == tarefa.id);
        if(index === -1) {
            throw new Error("Tarefa não encontrada");
        }
        this.Tarefas[index] = tarefa;
        return this.Tarefas[index];
    }

    public delete(id:number):boolean {
        const index = this.Tarefas.findIndex(valor => valor.id === id);
        if(index != -1) {
            this.Tarefas.splice(index, 1);
            return true;
        }
        return false;
    }
}