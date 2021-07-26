function calcular(){
    let num = document.getElementById('num')
    let lis = document.getElementById('lis')

    if (num.value.length == 0){
        window.alert('ERRO')
    } else {
        let n = Number(num.value)
        lis.innerHTML = ''
        
        for(let c = 1;c <= 10;c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            lis.appendChild(item)
        }
    }
}