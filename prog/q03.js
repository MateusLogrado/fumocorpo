let codigo3 = document.getElementById("codigo03")
let array2 = []
let aux3 = 0

function numAleatorio(min, max){
    valor = Math.floor(Math.random() * (max - min + 1) + min)

    return valor
}

function gerarArray3(){
    for(let i = 0; i < 8; i++){
        array2[i] = numAleatorio(1, 20)
    }
    console.log(array2)
    console.log("--------------------------")
    codigo3.innerHTML = "<br>" + "<br>" + "[" + array2.join(', ') + "]" + "<br>" + "<br>"
}

function ordenarArray3(){
    for(let j = array2.length - 1; j > 0; j--){
        for(let i = 0; i < array2.length - 1; i++){
            if(array2[i] < array2[i+1]){
                aux3 = array2[i]
                array2[i] = array2[i+1]
                array2[i+1] = aux3
            }
        }
        console.log(array2)
        console.log("--------------------------")
    }
    codigo3.innerHTML += "[" + array2.join(', ') + "]"  
}