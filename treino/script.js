let mai = document.getElementById('maior')
let men = document.getElementById('menor')

function m(){
    if(mai.value.length == 0 || men.value.length == 0){
        window.alert('[ERRO] adicione valores')
    } else {
        var s = Number(mai.value)
        var s1 = Number(men.value) 
        window.alert(`A soma dos valores são ${s + s1}`)
    }
}

function n(){
    if(mai.value.length == 0 || men.value.length == 0){
        window.alert('[ERRO] adicione valores')
    } else {
        var s = Number(mai.value)
        var s1 = Number(men.value)
        var f = s1 - s
        window.alert(`A subtração dos valores são ${f}`)
    }
}