let num = document.getElementById('num')
let lis = document.getElementById('lis')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function islista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adiciona(){
    if(isnumero(num.value) && !islista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `você adicionou o ${num.value}`
        lis.appendChild(item)
    } else {
        window.alert('número invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if(valores.length == 0) {
        window.alert('Insira um valor!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>O total de elementos colocado na lista foi ${tot}</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores digitados foi ${soma}</p>`
        res.innerHTML += `<p>A medía dos valores foram ${media}</p>`
    }
}