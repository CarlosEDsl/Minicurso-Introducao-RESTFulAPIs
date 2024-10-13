"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioServico = void 0;
const Usuario_1 = require("../modelos/Usuario");
const UsuarioRepositorio_1 = require("../repositorios/UsuarioRepositorio");
class UsuarioServico {
    constructor() {
        this.usuarioRepositorio = UsuarioRepositorio_1.UsuarioRepositorio.getInstance();
    }
    createUsuario(usuarioData) {
        const { nome } = usuarioData;
        const usuario = new Usuario_1.Usuario(nome);
        return this.usuarioRepositorio.create(usuario);
    }
    findUsuario(id) {
        const usuario = this.usuarioRepositorio.find(id);
        if (usuario == undefined)
            throw new Error("Usuário não encontrado no id " + id);
        return usuario;
    }
    updateUsuario(usuarioData) {
        const { id, nome } = usuarioData;
        this.usuarioRepositorio.find(id);
        const usuario = new Usuario_1.Usuario(nome, id);
        return this.usuarioRepositorio.update(usuario);
    }
    deleteUsuario(id) {
        return this.usuarioRepositorio.delete(id);
    }
}
exports.UsuarioServico = UsuarioServico;
