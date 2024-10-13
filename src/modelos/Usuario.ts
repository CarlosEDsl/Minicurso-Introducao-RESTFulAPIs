export class Usuario {

    private _id:number;
    private _nome:string;

    constructor(nome:string, id?:number) {
        this._id = id || 0;
        this._nome = nome;
    }

    public get id() {
        return this._id;
    }

    public get nome() {
        return this._nome;
    }

    public set id(id:number) {
        this._id = id;
    }

    public set nome(nome:string) {
        this._nome = nome;
    }

}