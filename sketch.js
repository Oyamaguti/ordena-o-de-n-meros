let numeros = [];

function adicionarNumeros() {
    let inputNumero = document.getElementById('numero')
    let numero = parseInt(inputNumero.value)

    if (!isNaN(numero)) {
        colocarNaLista(numero)
        inputNumero.value = ''
        exibirNumeros()
    } else {
        alert('Por favor, digite um número válido')
    }
}

function colocarNaLista(numero) {
    let novaLista = []
    for (let i = 0; i < numeros.length; i++) {
    novaLista[i] = numeros[i]
    }
novaLista.push(numero)
numeros = novaLista
}

function ordenarNumeros() {
        let tamanho = numeros.length;
        for (let i = 0; i < tamanho - 1; i++) {
            for (let j = 0; j < tamanho - 1 - i; j++) {
                if (numeros[j] > numeros[j + 1]) {
                    let temp = numeros[j]
                    numeros[j] = numeros[j + 1]
                    numeros[j + 1] = temp
                }
            }
        }
        exibirNumeros()
    }


function exibirNumeros() {
    let listaNumeros = document.getElementById('res')
    listaNumeros.innerHTML = ''

    for (let i = 0; i < numeros.length; i++) {
        let li = document.createElement('li')
        li.textContent = numeros[i]
        listaNumeros.appendChild(li)
    }
}