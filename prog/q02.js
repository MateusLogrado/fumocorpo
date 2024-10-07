let num = [5, 3, 1, 4, 2]
let aux2 = 0
let codigo02 = document.getElementById("codigo02")

console.log(num)
console.log("--------------------------------")

function ordenarArray2(){
    for(let j = num.length - 1; j > 0; j--){
        for(let i = 0; i < num.length -1; i++){
            if(num[i] < num[i+1]){
                aux2 = num[i]
                num[i] = num[i + 1]
                num[i+1] = aux2
            }
        }
        console.log(num)
        console.log("--------------------------------")
    }
    codigo02.innerHTML = "[" + num + "]"
}