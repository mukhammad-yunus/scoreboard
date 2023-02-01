let addLeftEL=document.getElementById("score-left")
let addRightEl=document.getElementById("score-right")

let score=0

function addLeftOne(){
    score+=1
    addLeftEL.textContent=score
}
function addLeftTwo(){
    score+=2
    addLeftEL.textContent=score
}
function addLeftThree(){
    score+=3
    addLeftEL.textContent=score
}