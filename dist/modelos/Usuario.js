"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, id) {
        this._id = id || 0;
        this._nome = nome;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    set id(id) {
        this._id = id;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
exports.Usuario = Usuario;
