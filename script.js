let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('id#res')
let valores = []

function isNumero(n) {
if(Number(n) >= 1 && Number(n) <=100) {
  return true
 }else {
   return false
 }
}

function inlist(n, l) {
if(l.indexOf(Number(n)) !=-1) {
   return true
 }else {
   return false
 }
}

function adicionar() {
if(isNumero(num.value) && !inlist(num.value, valores)){
   valores.push(Number(num.value))
   let item = document.createElement('option')
   item.text = `Valor ${num.value} adicionado.`
   list.appendChild(item)
   
  }else {
    window.alert('Valor inválido ou já cadastrado na lista.')
  }
  num.value = ''
  num.focus()

}
function finalizar(){
  if(valores.length == 0){
    window.alert('Por favor adicione um número antes de finalizar!')
  }else{
    let tot = valores.length
    res.innerHTML = ''
    res.innerHTML+= `<p>Ao todo temos ${tot} números cadastrados.`
  }
}




  
