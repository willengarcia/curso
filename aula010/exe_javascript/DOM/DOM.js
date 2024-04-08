// Selecionando elementos
/* 
    Pegando e acessando valores dos elementos

    document.getElementById('') - seleciona a partir do ID
    document.getElementsByTagName('') - seleciona pelo nome da tag
    document.getElementsByClassName('') - seleciona  class da tag
    document.getElementsByName('') - seleciona o nome da tag atribuido

    Pode acessar atrvés dos atributos

    console.log(document.getElementsByTagName('h2')) // pega todos os atributos das tags
    document.getElementById('teste')

function distribuiCaractere(){
    // selecionar o valor digitado
    var valor = document.getElementById('entrada').value
    document.getElementById('entrada').value = ''
    valor.trim() // limpar espaços
    switch (valor){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('inumero').value = valor
            break
        default:
            document.getElementById('iletra').value = valor
    }
}
*/

/* 
    Manipulando os estilos do elemento (css)
    document.getElementById('').style.'a propriedade em css' - para palavras como background-image, basta utilizar o came-on-case: backgroundImage

    Para alterar as classes dos elementos
    document.getElementById('rosa').className = 'cor2'
    pega a sintaxe normal e depois utiliza o className para selecionar a classe em css, e altera o valor da classe já existente em css
*/

function modificaEstilo (cor){
    document.getElementById('container').style.background = cor

}
function modifica_classe(){
    document.getElementById('vermelho').className = 'cor2'
    document.getElementById('amarelo').className = 'cor1'
    document.getElementById('rosa').className = 'cor2'
}
// Funções de fixação
function modifica_background(cor){
    document.getElementById('teste').style.background = cor
}
function recupera_valor(){
    var valor = document.getElementById('teste').value
    if (valor.length < 3){
        document.getElementById('teste').style.background = 'red'
    } else if(valor.length >= 3){
        document.getElementById('teste').style.background = 'green'
    }
}