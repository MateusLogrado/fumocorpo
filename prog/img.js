let imagem1 = document.getElementById("imagem01")
let imagem2 = document.getElementById("imagem02")
let imagem3 = document.getElementById("imagem03")
let esta = false
let esta2 = false
let esta3 = false

function img1(){
    if(esta == false){
        esta = true
        imagem1.innerHTML = '<img src="./img/ordenacao01.jpg" alt=""></img>'
    }else{
        esta = false
        imagem1.innerHTML = ""
    }
}

function img2(){
    if(esta2 == false){
        esta2 = true
        imagem2.innerHTML = '<img src="./img/ordenacao02.jpg" alt=""></img>'
    }else{
        esta2 = false
        imagem2.innerHTML = ""
    }
}

function img3(){
    if(esta3 == false){
        esta3 = true
        imagem3.innerHTML = '<img src="./img/ordenacao03.jpg" alt=""></img>'
    }else{
        esta3 = false
        imagem3.innerHTML = ""
    }
}