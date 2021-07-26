let ini = document.getElementById('txti')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let lis = document.getElementById('lis')

function calcular(){
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] INSIRA VALORES')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        lis.innerHTML = ''
        if(p <= 0){
            window.alert('PASSO INVALIDO! o passo foi substituído pelo passo 1')
            p = 1
        } 
        if (i <= f){
            for (var c = i;c <= f;c += p){
                var item = document.createElement('option')
                item.text = `${c}`
                lis.appendChild(item)
            }
        } else{
            for (var c = i;c >= f;c -= p){
                var item = document.createElement('option')
                item.text = `${c}`
                lis.appendChild(item)
            }
        }
    }
}