function adicionarCaracter(caracter) {
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + caracter

console.log(valorInput)
}

function limparTela(){
    document.querySelector('.display').value = ''
}

function calcular(){
const valorInput = document.querySelector('.display').value

document.querySelector('.display').value = eval(valorInput)

/*EVAL FAZ O CALCULO*/ 
}

function inverte(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput * -1


}