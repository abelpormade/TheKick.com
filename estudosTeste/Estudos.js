
import { cliente } from "./Classes.js";
import { contacorrente } from "./ContaCorrente.js";

const cliente1 = new cliente();
cliente1.nome = "Abel";
cliente1.cpf = '00000000000';
cliente1.saldo=0;


const cliente2 = new cliente();
cliente2.nome = "pedro";
cliente2.cpf = '00000000000';


const contacorrenteAbel = new contacorrente();
contacorrenteAbel.agencia = 1001;
contacorrenteAbel.cliente=cliente1
contacorrenteAbel.depositar(300)
contacorrenteAbel.depositar(500);
contacorrenteAbel.depositar(1)




const conta2=new contacorrente();
conta2.cliente=cliente2;
conta2.agencia=102

contacorrenteAbel.trasferir(0,conta2)



console.log(conta2.saldo)

