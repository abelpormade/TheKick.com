export class contacorrente {
    agencia;
    cliente;
    saldo;
sacar(valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
    } else{
        console.log(`Saldo insufiete para sacar R$${valor}`)
    }
}

depositar(valor){
    if (valor > 0) {
        this.saldo += valor
    }
}
trasferir(valor,conta){
    const valorSacado=this.sacar(valor);
    conta.depositar(valorSacado)


}
}

