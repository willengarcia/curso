const botao = document.querySelector('.botoes')
const consulta = document.querySelector('#consulta')
const cadastro = document.querySelector('#cadastro')
const informacao = document.querySelector('.infor')
const tabela = document.getElementById('#tabela')

botao.addEventListener('click', (evento)=>{
    const data = document.querySelector('#data').value
    const selecao = document.querySelector('#selecao').value
    const descricao = document.querySelector('#descricao').value
    const valor = document.querySelector('#valor').value
    console.log(data)
    console.log(selecao)
    console.log(descricao)
    console.log(valor)
})
consulta.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    text.textContent = 'Consulta de despesas'
    tabela.style.opacity = '1'
})
cadastro.addEventListener('click', (evento)=>{
    const text = document.querySelector('h1')
    const tabela = document.getElementById('tabela')
    tabela.style.opacity = '0'
    text.textContent = 'Registro de nova despesa'
})