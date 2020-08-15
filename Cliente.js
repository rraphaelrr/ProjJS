import { Funcionario } from "./Funcionarios/Funcionario.js";

export class Cliente extends Funcionario {

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        super(nome, cpf, senha);
        //this.nome = nome;
        //this._cpf = cpf;
        //this._senha = senha
    }
}