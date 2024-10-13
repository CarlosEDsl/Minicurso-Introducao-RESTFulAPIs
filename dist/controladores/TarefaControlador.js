"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTarefa = createTarefa;
exports.findTarefa = findTarefa;
exports.updateTarefa = updateTarefa;
exports.deleteTarefa = deleteTarefa;
const TarefaServico_1 = require("./../servicos/TarefaServico");
const tarefaServico = new TarefaServico_1.TarefaServico();
function createTarefa(req, res) {
    try {
        const data = req.body;
        return res.status(200).json(tarefaServico.createTarefa(data));
    }
    catch (e) {
        return res.status(400).json(e.message);
    }
}
function findTarefa(req, res) {
    try {
        const id = req.params.id;
        return res.status(200).json(tarefaServico.findTarefa(parseInt(id)));
    }
    catch (e) {
        return res.status(404).json(e.message);
    }
}
function updateTarefa(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        data.id = parseInt(id);
        return res.status(200).json(tarefaServico.updateTarefa(data));
    }
    catch (e) {
        return res.status(404).json(e.message);
    }
}
function deleteTarefa(req, res) {
    try {
        const id = req.params.id;
        return res.status(200).json(tarefaServico.deleteTarefa(parseInt(id)));
    }
    catch (e) {
        return res.status(404).json(e.message);
    }
}
