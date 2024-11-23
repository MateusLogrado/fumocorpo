let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")
let resposta3 = document.getElementById("resposta3")
let resposta4 = document.getElementById("resposta4")
let resposta5 = document.getElementById("resposta5")
let resposta6 = document.getElementById("resposta6")
let resposta8 = document.getElementById("resposta8")
let resposta9 = document.getElementById("resposta9")

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

let bubblearrray = []
let insertionarrray = []
let selectionarrray = []

function gerar4(){
    for(let i = 0; i < 10; i++){
        bubblearrray[i] = random(1,20)
    }

    resposta4.innerHTML = "[ " + bubblearrray + " ]" + "<br><br>"
}

function ordenar1(){
    for(let j = bubblearrray.length-1; j > 0; j--){
        for(let i = 0; i < bubblearrray.length-1; i++){
            if(bubblearrray[i] > bubblearrray[i+1]){
                let valor_atual = bubblearrray[i]
                bubblearrray[i] = bubblearrray[i+1]
                bubblearrray[i+1] = valor_atual
            }
        }
    }

    resposta4.innerHTML += "[ " + bubblearrray + " ]" + "<br><br>"
}

function gerar5(){
    for(let i = 0; i < 10; i++){
        insertionarrray[i] = random(1,20)
    }

    resposta5.innerHTML = "[ " + insertionarrray + " ]" + "<br><br>"
}

function ordenar2(){
    for(let i = 1; i < insertionarrray.length; i++){
        let j = i - 1
        let valor_atual = insertionarrray[i]
        while(j >= 0 && valor_atual < insertionarrray[j]){
            insertionarrray[j+1] = insertionarrray[j]
            j--
        }
        insertionarrray[j+1] = valor_atual
    }

    resposta5.innerHTML += "[ " + insertionarrray + " ]" + "<br><br>"
}

function gerar6(){
    for(let i = 0; i < 10; i++){
        selectionarrray[i] = random(1,20)
    }

    resposta6.innerHTML = "[ " + selectionarrray + " ]" + "<br><br>"
}

function ordenar3(){
    for(let i = 0; i < selectionarrray.length; i++){
        let menor = i
        for(let j = i+1; j < selectionarrray.length; j++){
            if(selectionarrray[j] < selectionarrray[menor]){
                menor = j
            }
        }
        if(i != menor){
            let valor_atual = selectionarrray[i]
            selectionarrray[i] = selectionarrray[menor]
            selectionarrray[menor] = valor_atual
        }
    }

    resposta6.innerHTML += "[ " + selectionarrray + " ]" + "<br><br>"
}

let gerar7 = document.getElementById("gerar7")
let numarray = []

gerar7.addEventListener('click', ()=>{
    let num = document.querySelector('#num').value

    for(let i = 0; i < num; i++){
        numarray[i] = i + 1
    }
    console.table(numarray)

    let soma = 0
    for(let i = 0; i < num; i++){
        soma += numarray[i]
    }
    console.log(soma)

    let pagin = document.querySelector('#arrow')

    let resposta = document.createElement('div')
    pagin.appendChild(resposta)

    resposta.setAttribute('class','estilo')
    resposta.setAttribute('id','res')
    console.log(pagin)

    resposta.textContent = `A soma do Array é: ${soma}`
})

function gerar8(){
    let array = []
    let num = Number(document.getElementById("num1").value)

    for(let i = 0; i < num; i++){
        array[i] = i+1
    }

    resposta8.innerHTML = "[ " + array + " ]"
}

function gerar9(){
    let num2 = Number(document.getElementById("num2").value)
    let array = []
    let i = 0

    while(i < num2){
        array[i] = i+1
        i++
    }

    resposta9.innerHTML = "[ " + array + " ]"
}