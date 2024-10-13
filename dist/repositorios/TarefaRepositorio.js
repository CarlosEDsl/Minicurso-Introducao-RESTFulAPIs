"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaRepositorio = void 0;
const idGenerator_1 = require("../utils/idGenerator");
class TarefaRepositorio {
    static getInstance() {
        if (!TarefaRepositorio.instance)
            TarefaRepositorio.instance = new TarefaRepositorio();
        return TarefaRepositorio.instance;
    }
    constructor() {
        this.Tarefas = [];
        this.idGenerator = new idGenerator_1.IdGenerator();
    }
    create(tarefa) {
        tarefa.id = this.idGenerator.nextId();
        this.Tarefas.push(tarefa);
        return tarefa;
    }
    find(id) {
        return this.Tarefas.find(tarefa => tarefa.id === id);
    }
    update(tarefa) {
        const index = this.Tarefas.findIndex(valor => valor.id == tarefa.id);
        if (index === -1) {
            throw new Error("Tarefa não encontrada");
        }
        this.Tarefas[index] = tarefa;
        return this.Tarefas[index];
    }
    delete(id) {
        const index = this.Tarefas.findIndex(valor => valor.id === id);
        if (index != -1) {
            this.Tarefas.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.TarefaRepositorio = TarefaRepositorio;
