let addLeftEL=document.getElementById("score-left")
let addRightEl=document.getElementById("score-right")

let leftscore=0
let rightscore=0
function addLeftOne(){
    leftscore+=1
    addLeftEL.textContent=leftscore
}
function addLeftTwo(){
    leftscore+=2
    addLeftEL.textContent=leftscore
}
function addLeftThree(){
    leftscore+=3
    addLeftEL.textContent=leftscore
}

function addRightOne(){
    rightscore+=1
    addRightEl.textContent=rightscore
}
function addRightTwo(){
    rightscore+=2
    addRightEl.textContent=rightscore
}
function addRightThree(){
    rightscore+=3
    addRightEl.textContent=rightscore
}

function newGame(){
    rightscore=0
    leftscore=0
    addRightEl.textContent=rightscore
    addLeftEL.textContent=leftscore
}
