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

class Orcamento{
    constructor(valorDinheiro, valorDeposito, parcelamento){
        this.valorTotal = valorDinheiro
        this.valorDividas = Array()
        this.valorDeposito = valorDeposito
        this.parcelamento = parcelamento
    }
    depositaDinheiro(){
        this.valorTotal += this.valorDeposito
        console.log(`Você depositou R$${this.valorDeposito}, e agora tem um total de R$${this.valorTotal} `)
    }
    dividas(){
        this.valor
    }
}