var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exsatamente ${horas} horas!`)
if (horas < 12) {
    console.log('BOM DIA!')
} else if (horas <= 18) {
    console.log('BOA TARDE!')
} else {
    console.log('BOA NOITE!')
}