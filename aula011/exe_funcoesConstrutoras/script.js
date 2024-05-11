let Carro = function (){
    this.cor = 'amarelo'
    this.modelo = 'x'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 300
    this.acelerar = function (){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
        this.setVelociadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function (){
        return this.velocidadeAtual
    }
    this.setVelociadeAtual = function (velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}
let carro = new Carro()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())

let Carro2 = function (){
    this.cor = 'amarelo'
    this.modelo = 'x'
    this.velocidadeAtual = 0
    var velocidadeMaxima = 200 // é só tirar o this, para deixar a váriavel no contexto da função
    this.acelerar = function (){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
        this.setVelociadeAtual(velocidade)
        kmRodados += 0.05
        console.log(kmRodados)
    }
    this.getVelocidadeAtual = function (){
        return this.velocidadeAtual
    }
    this.setVelociadeAtual = function (velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}
let carro2 = new Carro2()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())

console.log(carro)
console.log(carro2)