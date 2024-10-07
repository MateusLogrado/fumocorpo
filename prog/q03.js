let array = []
let aux = 0

function numAleatorio(min, max){
    valor = Math.floor(Math.random() * (max - min + 1) + min)

    return valor
}

function gerarArray3(){
    for(let i = 0; i < 10; i++){
        array[i] = numAleatorio(1, 20)
    }
    console.log(array)
    console.log("--------------------------")
}

function ordenarArray3(){
    for(let j = array.length - 1; j > 0; j--){
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] < array[i+1]){
                aux = array[i]
                array[i] = array[i+1]
                array[i+1] = aux
            }
        }
        console.log(array)
        console.log("--------------------------")
    }
}

gerarArray()
ordenarArray()