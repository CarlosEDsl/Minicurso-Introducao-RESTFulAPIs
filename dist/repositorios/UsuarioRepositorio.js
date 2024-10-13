"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepositorio = void 0;
const idGenerator_1 = require("./../utils/idGenerator");
class UsuarioRepositorio {
    static getInstance() {
        if (!UsuarioRepositorio.instance)
            UsuarioRepositorio.instance = new UsuarioRepositorio();
        return UsuarioRepositorio.instance;
    }
    constructor() {
        this.usuarios = [];
        this.idGenerator = new idGenerator_1.IdGenerator();
    }
    create(usuario) {
        usuario.id = this.idGenerator.nextId();
        this.usuarios.push(usuario);
        return usuario;
    }
    find(id) {
        return this.usuarios.find(usuario => usuario.id === id);
    }
    update(usuario) {
        const index = this.usuarios.findIndex(user => user.id === usuario.id);
        if (index === -1) {
            throw new Error(`Usuário não encontrado com o id ${usuario.id}`);
        }
        this.usuarios[index] = usuario;
        return this.usuarios[index];
    }
    delete(id) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.UsuarioRepositorio = UsuarioRepositorio;
