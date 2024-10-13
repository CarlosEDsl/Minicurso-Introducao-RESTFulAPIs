export class Tarefa {

    private _id:number;
    private _id_usuario:number;
    private _titulo:string;
    private _descricao:string;

    constructor(id_usuario:number, titulo:string, descricao:string, id?:number) {
        this._id = id || 0;
        this._id_usuario = id_usuario;
        this._titulo = titulo;
        this._descricao = descricao;
    }

    public get id() {
        return this._id;
    }

    public get id_usuario() {
        return this._id_usuario;
    }

    public get titulo() {
        return this._titulo;
    }

    public get descricao() {
        return this._descricao;
    }

    public set id(id:number) {
        this._id = id;
    }

    public set id_usuario(id_usuario: number) {
        this._id_usuario = id_usuario;
    }

    public set titulo(titulo:string) {
        this._titulo = titulo;
    }

    public set descricao(descicao:string) {
        this._descricao = this.descricao;
    }

}