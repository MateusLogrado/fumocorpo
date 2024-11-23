let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")
let resposta3 = document.getElementById("resposta3")

function gerar1(){
    let array = []
    let slice1 = []
    let slice2 = []

    for(let i = 0; i < 7; i++){
        if((i === 0) || (i === 1)){
            array[i] = 1
        }else{
            array[i] = array[i-1] + array[i-2]
        }
    }

    resposta1.innerHTML = "[ " + array + " ]" + "<br>"

    slice1 = array.slice(0,4)
    slice2 = array.slice(4)

    resposta1.innerHTML += "[ " + slice1 + " ]" + "<br>"
    resposta1.innerHTML += "[ " + slice2 + " ]"
}

function gerar2(){
    let capitais = ['São Paulo', 'Rio de Janeiro','Belo Horizonte', 'Salvador', 'Fortaleza']

    resposta2.innerHTML = "[ " + capitais + " ]" + "<br><br>"

    capitais.splice(3, 0, "Brasilia", "Curitiba")

    resposta2.innerHTML += "[ " + capitais + " ]" + "<br><br>"

    capitais.splice(1,1, "Florianópolis")
    capitais.splice(2,1, "Porto alegre")

    resposta2.innerHTML += "[ " + capitais + " ]" + "<br><br>"
}


function random(min,max){
    let valor = Math.floor(Math.random() * (max - min + 1) + min)

    return valor
}

function gerar3(){
    let array = []

    for(let i = 0; i < 10; i++){
        array[i] = random(1,20)
    }

    console.log(array)

    resposta3.innerHTML = " [" + array + " ]" + "<br><br>"

    let somaImpar = 0, somaPar = 0

    for(let j = 0; j < 10; j++){
        if(array[j] % 2 == 0){
            somaPar += array[j]
        }else{
            somaImpar += array[j]
        }
    }

    resposta3.innerHTML += "Soma dos pares: " + somaPar + "<br><br>"
    resposta3.innerHTML += "Soma dos impares: " + somaImpar + "<br><br>"
}