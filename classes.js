
class cliente {
    nome;
    cpf;

}
const cliente1 = new cliente();

cliente1.nome = "Abel";
cliente1.cpf = '00000000000';
cliente1.saldo = 1;

const cliente2 = new cliente();

cliente2.nome = "pedro";
cliente2.cpf = '00000000000';

class contacorrente {
    agencia;
    saldo;

mensagem(valor){
   return `saldo insuficiente para sacar ${valor}`;
}

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }else{
            console.log(this.mensagem(valor))
        }
    }

    depositar(valor){
        if(valor>0){
          this.saldo+=valor  
        }
    }
}

const contacorrenteAbel = new contacorrente();
contacorrenteAbel.agencia = 1001;
contacorrenteAbel.saldo=1000;
console.log(contacorrenteAbel.saldo)

contacorrenteAbel.depositar(-1)

contacorrenteAbel.sacar(10000);


console.log(contacorrenteAbel)