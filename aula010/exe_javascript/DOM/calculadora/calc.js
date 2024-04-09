function calcular(tipo, valor){
    if (tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }
        if(valor == '+' || valor == '-' || valor == '/' || valor == '*' || valor == '.'){
            document.getElementById('resultado').value +=valor
        }
        if(valor === '='){
            var valor_campo = document.getElementById('resultado').value 
            document.getElementById('resultado').value = eval(valor_campo) // função eval, pega a string e 'converte' em um número, o qual pode ser efetuado a operação

        }
    } else if (tipo == 'valor'){
        document.getElementById('resultado').value += valor

    }
}