const getMessage = () => 'Hello Word'
document.getElementById('ecma').innerHTML = getMessage()
/*
    const > são constantes, e não altera o valor
    Var > variável global
    let > variavel de bloco, preserva o valor dentro do bloco ou escopo em que ela foi declarada.

    Existe diferença entre variável Global, Função e de Bloco
    
    vai depender muito do contexto o uso do var e let

var serie = 'GOT' // Variável global
function x(){
    var serie = 'Friends' // Variável de função
    console.log('função: '+serie)
    if(true){
        console.log('bloco e função: '+serie)
    }
}
x()
if(true){
    console.log('Global: '+serie)
}

var serie = 'variavel global'
if(true){
    let serie = 'Variavel de bloco1'
    console.log(serie)
}
if(true){
    let serie = 'Variavel de bloco2'
    console.log(serie)
}
console.log(serie)

let nome = 'jorge'
console.log(`Olá ${nome}`) // Para concatenar uma variável dentro de um console, basta utilizar: `Olá ${variavel}`

function contarUmaHistoria(person='José'){ // Pode adicionar um valor default nos parametros
    document.write(`Era uma vez um cachorro chamado ${person}.`)
}
contarUmaHistoria(undefined) // Quando não for encaminhado na chamada da função, vai o default, se existir muitos parametros e só quiser definir uns, pode colocar o undefined



let quadrado = (x) => x*x // Arrow de função, é a mesma coisa de definir a função normal, e pode ter um return implicito, caso não tenha vários blocos
document.write(quadrado(3))

let parOuImpar = function(n){
    if(n % 2 === 0){
        console.log('Número Par')
    }else {
        console.log('Número Impar')
    }
}
let par = n => n%2===0 ? 'Par':'Impar'; // Muito utilizada para deixar o código mais enxuto
console.log(par(2))
*/