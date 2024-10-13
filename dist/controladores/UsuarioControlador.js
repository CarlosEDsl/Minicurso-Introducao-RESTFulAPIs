"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            data.id = parseInt(id);
            return res.status(200).json(usuarioServico.updateUsuario(data));
        }
        catch (e) {
            return res.status(404).json(e.message);
        }
    });
}
function deleteUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            return res.status(200).json(usuarioServico.deleteUsuario(parseInt(id)));
        }
        catch (e) {
            return res.status(404).json(e.message);
        }
    });
}
