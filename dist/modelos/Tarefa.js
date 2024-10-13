"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    constructor(id_usuario, titulo, descricao, id) {
        this._id = id || 0;
        this._id_usuario = id_usuario;
        this._titulo = titulo;
        this._descricao = descricao;
    }
    get id() {
        return this._id;
    }
    get id_usuario() {
        return this._id_usuario;
    }
    get titulo() {
        return this._titulo;
    }
    get descricao() {
        return this._descricao;
    }
    set id(id) {
        this._id = id;
    }
    set id_usuario(id_usuario) {
        this._id_usuario = id_usuario;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    set descricao(descicao) {
        this._descricao = this.descricao;
    }
}
exports.Tarefa = Tarefa;
