let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")
let resposta3 = document.getElementById("resposta3")

function gerar1(){
    let matriz1 = [[0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0]]
    
    let matriz2 = [[0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0]]

    let matriz3 = [[0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0]]

    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            if(i == j){
                matriz1[i][j] = 7
            }

            if(i - j == 6){
                matriz2[i][j] = 5
            }

            matriz3[i][j] = matriz1[i][j] + matriz2[i][j] 
        }
    }
}