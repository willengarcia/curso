const botao = document.querySelector('.botoes')
const consulta = document.querySelector('#consulta')
const cadastro = document.querySelector('#cadastro')
const informacao = document.querySelector('.infor')
const tabela = document.getElementById('#tabela')

const criaLinhaTabela = ()=>{
    const tabela = document.querySelector('tbody')
    const linha = document.createElement('tr')
    tabela.appendChild(linha)

    for(let l =1 ; l<=4; l++){
        let dado = document.createElement('td')
        dado.setAttribute('class', 'desc')
        linha.appendChild(dado)
    }
    return linha
}
class Despesa{
    constructor(data, tipo, desc, valor){
        this.data = data
        this.tipo = tipo
        this.desc = desc
        this.valor = valor
    }
}
class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        } // setando um ID
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId)+1
    }
    gravar(d){
        // identificação do objeto, dado (precisa ser encmainhado através da notaçao JSON)
    
        // notacao JSON >'{"chave":"valor"}'
        // obj Literal > {chave:"valor"}
        // Usar a lib JSON com o metodo stringfy(objeto literal) - conversão em JSON
        // Usar a lib JSON com o metodo parse(objeto JSON) - para conversão em obj Literal
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id) 
        console.log('Dados gravados!')
    }
    recuperarDados(){
        let id = localStorage.getItem('id')
        for(let i = 1; i<= id; i++){
             let despesa = localStorage.getItem(i)
              return console.log(despesa)
        }
    }
}
const alerta = ()=>{
    let div = document.querySelector('.container')
    let h2 = document.createElement('h2')
    let sapn = document.createElement('span')
    div.firstElementChild.appendChild(h2)
    h2.appendChild(sapn)
    return h2
}
// localStorage: Persiste no navegador
function cadastrarDespesa(){
    let data = document.getElementById('data')
    let selecao = document.getElementById('selecao')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')
    if((data.value == '') || (selecao.value == '') || (descricao.value == '') || (valor.value == '')){
        let tempo = 5
        const a = alerta()
        let cronometro = setInterval(function(){
            tempo--
            document.querySelector('h2').textContent = 'Preencha todos os dados!'
            document.querySelector('span').textContent = tempo
        }, 1000)
        setTimeout(function(){
            clearInterval(cronometro)
            a.remove()
        }, 5000)
    }else{
        const linhaCriada = criaLinhaTabela()
        const dadosFilho = [...linhaCriada.children]
        dadosFilho[0].textContent = data.value
        dadosFilho[1].textContent = selecao.value
        dadosFilho[2].textContent = descricao.value
        dadosFilho[3].textContent = valor.value
        let despesas = new Despesa(
            data.value,
            selecao.value,
            descricao.value,
            valor.value
        )
        let bd = new Bd()
        bd.gravar(despesas)
        let tempo = 5
        const a = alerta()
        let cronometro = setInterval(function(){
            document.querySelector('h2').textContent = 'Dados inseridos com sucesso'
            document.querySelector('h2').style.color = 'blue'
            tempo--
        }, 1000) // Cronometro que remove o h2
        setTimeout(function(){
            clearInterval(cronometro)
            a.remove()
        }, 5000) // Cronometro de 5s
    }
}
let bd = new Bd()

botao.addEventListener('click', (evento)=>{
    if(botao.textContent =='Adicionar'){
        cadastrarDespesa()
    }else{
        bd.recuperarDados()
    }
})
consulta.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    text.textContent = 'Consulta de despesas'
    tabela.style.visibility = 'visible'
    botao.textContent = 'Pesquisar'
})
cadastro.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    tabela.style.visibility = 'hidden'
    text.textContent = 'Registro de nova despesa'
    botao.textContent = 'Adicionar'
})