"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = createUsuario;
exports.findUsuario = findUsuario;
exports.updateUsuario = updateUsuario;
exports.deleteUsuario = deleteUsuario;
const UsuarioServico_1 = require("./../servicos/UsuarioServico");
const usuarioServico = new UsuarioServico_1.UsuarioServico();
function createUsuario(req, res) {
    try {
        const data = req.body;
        return res.status(200).json(usuarioServico.createUsuario(data));
    }
    catch (err) {
        return res.status(400).json(err);
    }
}
function findUsuario(req, res) {
    try {
        const id = req.params.id;
        return res.status(200).json(usuarioServico.findUsuario(parseInt(id)));
    }
    catch (e) {
        return res.status(404).json(e.message);
    }
}
function updateUsuario(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        data.id = parseInt(id);
        return res.status(200).json(usuarioServico.updateUsuario(data));
    }
    catch (e) {
        return res.status(404).json(e.message);
    }
}
function deleteUsuario(req, res) {
    try {
        const id = req.params.id;
        return res.status(200).json(usuarioServico.deleteUsuario(parseInt(id)));
    }
    catch (e) {
        return res.status(404).json(e.message);
    }
}
