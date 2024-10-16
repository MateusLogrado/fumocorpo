let fibonacci = []
let codigo01 = document.getElementById("codigo01")

function gerarFibonacci(){
    for(let i = 0; i < 7; i++){
        if(fibonacci[0] + fibonacci[1] != 2 ){
            fibonacci[i] = 1
        }else{
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
        }
    }
    console.log(fibonacci)


    codigo01.innerHTML = ""
    codigo01.innerHTML += ""
    codigo01.innerHTML += fibonacci
}