let countEl_1 = document.getElementById("count-el_1")
let countEl_2 = document.getElementById("count-el_2")
let countEl_3 = document.getElementById("count-el_3")
let count_1 = 0
let count_2 = 0
let count_3 = 0

function increment_1() {
    count_1 += 1
    countEl_1.textContent = count_1
    
}

function increment_2() {
    count_2 += 1
    countEl_2.textContent = count_2
    
}

function increment_3() {
    count_3 += 1
    countEl_3.textContent = count_3
}

function reset() {
    countEl_1.textContent = 0
    countEl_2.textContent = 0
    countEl_3.textContent = 0
    count_1 = 0
    count_2 = 0
    count_3 = 0
}
