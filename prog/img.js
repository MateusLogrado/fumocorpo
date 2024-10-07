let imagem1 = document.getElementById("imagem01")
let esta = false

function img1(){
    if(esta == false){
        esta = true
        imagem1.innerHTML = '<img src="./img/ordenacao01.jpg" alt=""></img>'
    }else{
        esta = false
        imagem1.innerHTML = ""
    }
}