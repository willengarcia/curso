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
        linha.appendChild(dado)
    }
    return linha
}

botao.addEventListener('click', (evento)=>{
    const data = document.querySelector('#data').value
    const selecao = document.querySelector('#selecao').value
    const descricao = document.querySelector('#descricao').value
    const valor = document.querySelector('#valor').value
    if((data == '') || (selecao == '') || (descricao == '') || (valor == '')){
        alert('Tem que preencher todos os dados!')
    }else{
        const linhaCriada = criaLinhaTabela()
        const dadosFilho = [...linhaCriada.children]
        dadosFilho[0].textContent = data
        dadosFilho[1].textContent = selecao
        dadosFilho[2].textContent = descricao
        dadosFilho[3].textContent = valor
    }
    
})
consulta.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    text.textContent = 'Consulta de despesas'
    tabela.style.visibility = 'visible'
})
cadastro.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    tabela.style.visibility = 'hidden'
    text.textContent = 'Registro de nova despesa'
})