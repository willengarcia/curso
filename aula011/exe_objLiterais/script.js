class Produto{
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao(){
        console.log(`${this.descricao} por apenas R$${this.preco}`)
    }
}
let produto = new Produto('Notebook', 200)
produto.verDescricao()
let produtoLiteral = {
    descricao:'Celular',
    preco:1300,
    veDescricao: function(){
        console.log(`${this.descricao} por apenas R$${this.preco}`)
    }
} // É como se fosse uma construção de lista, pois nem sempre é preciso criar uma classe para um objeto, porém só serve quando o objeto é só um
// ---------- Utilidade ----------
    // formulário -> servidor
    //     recupera dados e monta um objeto literal
    //         obj literal -> JSON -> HTTP -> Servidor -> Armazena
produtoLiteral.veDescricao()
let nome = 'jorge' // Pode utilizar o DOM para recuperar valores de formuários
let sexo = 'Masc'
let profissao = 'DEV'
let idade =19
let objeto = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`O seu nome é ${this.nome}, sua idade é ${this.idade} anos, sua profisao é ${this.profissao}, e seu sexo é ${this.sexo}`)
    }
} // Objeto mais 'enxuto'
objeto.exibirResumo()

// Lidando com 'Listas' -> diferente de listas, essa aqui só pode conter um valor para cada 'chave'
let pessoa = {
    nome: 'Maria',
    idade: 12
}
console.log(pessoa.nome) // Pegando os atributos
pessoa.nome = 'Everton' // Alterando o atributo
console.log(pessoa.nome) // Pegando o novo valor
pessoa.sexo = 'Femenino' // Atribuindo um novo atributo
console.log(pessoa.sexo) // Pegando o novo atributo
pessoa.dizerOi = () => {
    console.log('OI')
} // Atribuindo uma função dentro do obj pessoa
pessoa.dizerOi() // Chamando a função

// -------------------------------------
// Aumentando tamanho da Letra Dinamicamente
function aumentaTamanho(){
    let valor = document.getElementById('tamanho').value
    console.log(valor)
    if(valor > 90){
        document.getElementById('fonte').style.color = 'white'
        document.getElementById('fonte').style.backgroundColor = 'red'
    }else if(valor > 70){
        document.getElementById('fonte').style.color = 'blue'
        document.getElementById('fonte').style.backgroundColor = 'yellow'
    }else if(valor > 60){
        document.getElementById('fonte').style.color = 'yellow'
        document.getElementById('fonte').style.backgroundColor = 'blue'
    }else if(valor > 50){
        document.getElementById('fonte').style.color = 'orange'
        document.getElementById('fonte').style.backgroundColor = 'pink'
    }else if(valor > 40){
        document.getElementById('fonte').style.color = 'darkblue'
        document.getElementById('fonte').style.backgroundColor= 'gray'
    }else if(valor > 30){
        document.getElementById('fonte').style.fontFamily = 'monospace'
    }else if(valor > 20){
        document.getElementById('fonte').style.color = 'brown'
        document.getElementById('fonte').style.backgroundColor = '#2a5f4d'
    }else if(valor > 10){
        document.getElementById('fonte').style.color = 'white'
        document.getElementById('fonte').style.backgroundColor = 'black'
    }else if(valor < 10){
        document.getElementById('fonte').style.color = '#1a3d56'
        document.getElementById('fonte').style.backgroundColor = 'black'
    }
}