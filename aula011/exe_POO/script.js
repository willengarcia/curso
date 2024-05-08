// Introdução a Programação Orientado a Objeto
class ContaBancaria{ // Definindo a Entidade, porém essa até então só é um modelo
    // Atribututos:
    // Agencia
    // numeroConta
    // Saldo
    // Limite
    constructor(){ // Aqui é a instancia do objeto, é onde define os atributos
        // o 'this' faz ficar "conectados" com todos dentro do objeto
        this.agencia = 1075
        this.numeroConta = 345124
        this.saldo = 22
        this.limite = 450
    }
    depositar(valorDeposito) { // Aqui coloca as 'ações' da entidade, e essas ações são chamadas de metodos
        this.saldo += valorDeposito
    }
    sacar(valorSaque){
        if(this.saldo > valorSaque){
            this.saldo -= valorSaque
        }else{
            console.log(`Você não tem saldo suficiente, seu valor atual é: R$${this.saldo}`)
        }
        
    }
    consultarSaldo(){
        return this.saldo
    }
}
// let Banco = new ContaBancaria() // Transforma a classe em um objeto, e pode criar 2 obejtos diferentes baseados no mesmo modelo, definindo a 'Identidade'
// console.log(Banco.consultarSaldo()) // acessa os metodos da entidade pela definição da Identidade
// Banco.depositar(200) //depositando
// console.log(Banco.consultarSaldo()) // visualizando
// Banco.sacar(500)
// console.log(Banco.consultarSaldo()) // valor atualizado

class Cadeira{
    constructor(qtdPernas, giratoria, cor){
        this.qtdPernas = qtdPernas
        this.giratoria = giratoria
        this.cor = cor
    }
    girarCadeira(){
        if(this.giratoria === true){
            console.log('Girou')
        }else{
            console.log('Não girou')
        }
    }
}
// let cadeira = new Cadeira(4, false, 'vermelho')
// cadeira.girarCadeira()
// let cadeira2 = new Cadeira(1, true, 'red')
// cadeira2.girarCadeira()
// let cadeiras = [new Cadeira(1, true, 'azul'), new Cadeira(4, false, 'azul')]
// console.log(cadeiras[0])
class Tv{
    constructor(){
        this._relacoesCanais = [1,2,4,5,6] // colocar o _ significa que não é para acessar o atributo de forma direta
        this._canalAtivo = 5
        this._volume = 1
    }

    //getters setters - tem ah ver com atributos privados
    get canalAtivo(){ // essa 'função', é uma pseudo-variavel, que é usado para segurança
        return this._relacoesCanais
    }
    set canalAtivo(canal){  // Acessa indiretamente o atributo do objeto, pode colocar um 'controle' para melhorar a segurança
        if (this._relacoesCanais.indexOf(canal) !== -1){
            this._relacoesCanais = canal
        }else{
            console.log('Canal inválido')
        }
        
    } // Em relação ao metodo getters e setters, o interpretador vai fazer a verificação automática do metodo get e set
    // get - recupera
    // set - modifica
}
// let canal = new Tv()
// canal.canalAtivo = 0
// console.log(canal.canalAtivo)

class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
        // Essa é a classe pai, a qual serve como ponte para as outras classes que irão utilizar os mesmos atributos, e o mesmo serve para os metodos
    }
    dormir(){
        console.log('Dormir')
    }
}
// class Cachorro extends Animal{ // Para fazer essa 'ponte', basta ultilizar o 'extend' e logo em seguida, a classe pai
//     constructor(){
//         super() // tem que utilizar essa função sempre antes da palavra 'this', ele fornece acesso a classe pai, por isso é importante!
//         this.orelhas = 'Grandes e caídas'
//     }
//     correr(){
//         console.log('Correr')
//     }
//     rosnar(){
//         console.log('Rosnar')
//     }
// }
class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){// pode colocar como parametro para depois chamar na classe filha
        super(cor, tamanho, peso) 
        this.bico = bico
    }
    voar(){
        console.log('Voar')
    }
}
class Papagaio extends Passaro{
    constructor(bico, fala, cor, tamanho, peso){
        super(bico, cor, tamanho, peso) // Atribuindo o parametro 'bico'
        this.falar = fala
    }
    fala(){
        console.log('Falando')
    }
}
// let dog = new Cachorro()
// let bird = new Passaro()
let papagaio = new Papagaio('curto' ,true, 'verde', 20, 120)
// dog.dormir() // pode acessar mesmo o metodo não estando na class cachorro
// bird.dormir()
// papagaio.dormir() // Aqui as heranças são como cascatas de herança
console.log(papagaio)