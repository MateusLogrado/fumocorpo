let array = []
let aux = 0
let codigo = document.getElementById("codigo01")

function numAleatorio(min, max){
    valor = Math.floor(Math.random() * (max - min + 1) + min)

    return valor
}

function gerarArray1(){
    for(let i = 0; i < 5; i++){
        array[i] = numAleatorio(1, 20)
    }
    console.log(array)
    console.log("--------------------------")
    codigo.innerHTML = array + "<br>"
}

function ordenarArray1(){
    for(let j = array.length - 1; j > 0; j--){
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i+1]){
                aux = array[i]
                array[i] = array[i+1]
                array[i+1] = aux
            }
        }
        console.log(array)
        console.log("--------------------------")
    }
    codigo.innerHTML += array
}