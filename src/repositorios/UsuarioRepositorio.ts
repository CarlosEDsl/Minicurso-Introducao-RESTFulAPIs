import { IdGenerator } from './../utils/idGenerator';
import { Usuario } from './../modelos/Usuario';
export class UsuarioRepositorio {
    private static instance:UsuarioRepositorio;
    private idGenerator:IdGenerator;

    public static getInstance() {
        if(!UsuarioRepositorio.instance)
            UsuarioRepositorio.instance = new UsuarioRepositorio();
        return UsuarioRepositorio.instance
    }

    constructor() {
        this.idGenerator = new IdGenerator();
    }

    private usuarios:Usuario[] = [];

    public create(usuario: Usuario): Usuario {
        usuario.id = this.idGenerator.nextId();
        this.usuarios.push(usuario);
        return usuario;
    }

    public find(id: number): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    public update(usuario: Usuario): Usuario {
        const index = this.usuarios.findIndex(user => user.id === usuario.id);
        if (index === -1) {
            throw new Error(`Usuário não encontrado com o id ${usuario.id}`);
        }
        this.usuarios[index] = usuario;
        return this.usuarios[index];
    }

    public delete(id: number): boolean {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            return true;
        }
        return false;
    }

}