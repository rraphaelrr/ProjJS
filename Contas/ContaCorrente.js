import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numContas = 0;
    constructor(saldoInicial, cliente, agencia,) {
        super(0, cliente, agencia,);
        ContaCorrente.numContas++;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}