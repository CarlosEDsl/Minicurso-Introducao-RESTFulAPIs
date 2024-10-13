"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaServico = void 0;
const Tarefa_1 = require("../modelos/Tarefa");
const TarefaRepositorio_1 = require("../repositorios/TarefaRepositorio");
class TarefaServico {
    constructor() {
        this.tarefaRepositorio = TarefaRepositorio_1.TarefaRepositorio.getInstance();
    }
    createTarefa(tarefaData) {
        const { id_usuario, titulo, descricao } = tarefaData;
        if (!id_usuario)
            throw new Error("Especifique o usuário");
        const tarefa = new Tarefa_1.Tarefa(id_usuario, titulo, descricao);
        console.log(id_usuario, tarefa);
        return this.tarefaRepositorio.create(tarefa);
    }
    findTarefa(id) {
        const tarefa = this.tarefaRepositorio.find(id);
        if (!tarefa)
            throw new Error("Tarefa não encontrada");
        return tarefa;
    }
    findTarefasDoUsuario(id) {
        return this.tarefaRepositorio.findAllByUser(id);
    }
    updateTarefa(tarefaData) {
        const { id, id_usuario, titulo, descricao } = tarefaData;
        const tarefa = new Tarefa_1.Tarefa(id_usuario, titulo, descricao, id);
        console.log("tarefa1: " + tarefa);
        return this.tarefaRepositorio.update(tarefa);
    }
    deleteTarefa(id) {
        return this.tarefaRepositorio.delete(id);
    }
}
exports.TarefaServico = TarefaServico;
