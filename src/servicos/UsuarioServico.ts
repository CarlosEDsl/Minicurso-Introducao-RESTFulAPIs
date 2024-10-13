import { Usuario } from "../modelos/Usuario";
import { UsuarioRepositorio } from "../repositorios/UsuarioRepositorio";

export class UsuarioServico {

    private usuarioRepositorio:UsuarioRepositorio = UsuarioRepositorio.getInstance();

    public createUsuario(usuarioData:any) {
        const { nome } = usuarioData;
        const usuario = new Usuario(nome);
        return this.usuarioRepositorio.create(usuario);
    }

    public findUsuario(id:number) {
        const usuario = this.usuarioRepositorio.find(id);
        if(usuario == undefined)
            throw new Error("Usuário não encontrado no id " + id);
        return usuario;
    }

    public updateUsuario(usuarioData:any) {
        const { id, nome } = usuarioData;
        this.usuarioRepositorio.find(id)
        
        const usuario = new Usuario(nome, id);
        return this.usuarioRepositorio.update(usuario);
    }

    public deleteUsuario(id:number) {
        return this.usuarioRepositorio.delete(id);
    }

}