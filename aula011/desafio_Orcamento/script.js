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
        // identificação do objeto, dado (precisa ser encmainhado através da notaçao JSON). Notacao JSON >'{"chave":"valor"}'. Obj Literal > {chave:"valor"}. Usar a lib JSON com o metodo stringfy(objeto literal) - conversão em JSON. Usar a lib JSON com o metodo parse(objeto JSON) - para conversão em obj Literal
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id) 
        console.log('Dados gravados!')
    }
    recuperarDados(){
        let id = localStorage.getItem('id')
        for(let i = 1; i<= id; i++){
             let despesa = localStorage.getItem(i)
              return console.log(i, despesa)
        }
    }
}
const alerta = (mensagem, cor)=>{
    let div = document.querySelector('.container')
    let h2 = document.createElement('h2')
    let sapn = document.createElement('span')
    div.firstElementChild.appendChild(h2)
    h2.appendChild(sapn)

    let tempo = 5
    let cronometro = setInterval(function(){
        tempo--
        document.querySelector('h2').textContent = mensagem
        document.querySelector('h2').style.color = cor
    }, 1000)
    setTimeout(function(){
        clearInterval(cronometro)
        h2.remove()
    }, 2000)
}
// localStorage: Persiste no navegador
function cadastrarDespesa(){
    let data = document.getElementById('data').value
    let selecao = document.getElementById('selecao').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value
    if((data == '') || (selecao == '') || (descricao == '') || (valor == '')){
        const a = alerta('Insira todos os dados!', 'red')
    }else{
        const linhaCriada = criaLinhaTabela()
        const dadosFilho = [...linhaCriada.children]
        dadosFilho[0].textContent = data
        dadosFilho[1].textContent = selecao
        dadosFilho[2].textContent = descricao
        dadosFilho[3].textContent = valor
        let despesas = new Despesa(
            dadosFilho[0].textContent,
            dadosFilho[1].textContent,
            dadosFilho[2].textContent,
            dadosFilho[3].textContent,
        )
        let bd = new Bd()
        bd.gravar(despesas)
        const a = alerta('Dados inseridos com sucesso!', 'blue')
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
    consulta.style.backgroundColor = 'white'
    consulta.style.color = 'blue'
    cadastro.style.backgroundColor = 'rgba(55, 68, 248, 0.911)'
    cadastro.style.color = 'white'
})
cadastro.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    tabela.style.visibility = 'hidden'
    text.textContent = 'Registro de nova despesa'
    botao.textContent = 'Adicionar'
    cadastro.style.backgroundColor = 'white'
    cadastro.style.color = 'blue'
    consulta.style.backgroundColor = 'rgba(55, 68, 248, 0.911)'
    consulta.style.color = 'white'
})