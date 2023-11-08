// setting variables to check if someone won
var a = 0
var b = 0
var c = 0
var d = 0
var e = 0
var f = 0
var g = 0
var h = 0
var i = 0


// checks the players turn and the sum of all plays to end the game by a draw
var round = 0
var totalPlays = 0


// function that checks if the game ended
function checkGameEnd() {
    // checks every game win possibility
    var abc = a + b + c
    var aei = a + e + i
    var adg = a + d + g
    var beh = b + e + h
    var cfi = c + f + i
    var ceg = c + e + g
    var def = d + e + f
    var ghi = g + h + i

    if (abc == 3 || aei == 3 || adg == 3 || beh == 3 || cfi == 3 || ceg == 3 || def == 3 || ghi == 3) {
        setTimeout(() => {
            window.alert('JOGADOR "X" GANHOU!')
            location.reload()
        }, 100)
    } else if (abc == 30 || aei == 30 || adg == 30 || beh == 30 || cfi == 30 || ceg == 30 || def == 30 || ghi == 30) {
        setTimeout(() => {
            window.alert('JOGADOR "0" GANHOU!')
            location.reload()
        }, 100)
    } else if (totalPlays == 54 || totalPlays == 45) {
        setTimeout(() => {
            window.alert('EMPATE!')
            location.reload()
        }, 100)
    }
}


// setting a "play" function to the buttons
var btn1 = document.getElementById('btn-1')
btn1.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn1.innerHTML = 'X'
        a = 1
        totalPlays += 1
    } else {
        btn1.innerText = '0'
        a = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn2 = document.getElementById('btn-2')
btn2.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn2.innerText = 'X'
        b = 1
        totalPlays += 1
    } else {
        btn2.innerText = '0'
        b = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn3 = document.getElementById('btn-3')
btn3.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn3.innerText = 'X'
        c = 1
        totalPlays += 1
    } else {
        btn3.innerText = '0'
        c = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn4 = document.getElementById('btn-4')
btn4.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn4.innerText = 'X'
        d = 1
        totalPlays += 1
    } else {
        btn4.innerText = '0'
        d = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn5 = document.getElementById('btn-5')
btn5.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn5.innerText = 'X'
        e = 1
        totalPlays += 1
    } else {
        btn5.innerText = '0'
        e = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn6 = document.getElementById('btn-6')
btn6.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn6.innerText = 'X'
        f = 1
        totalPlays += 1
    } else {
        btn6.innerText = '0'
        f = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn7 = document.getElementById('btn-7')
btn7.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn7.innerText = 'X'
        g = 1
        totalPlays += 1
    } else {
        btn7.innerText = '0'
        g = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn8 = document.getElementById('btn-8')
btn8.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn8.innerText = 'X'
        h = 1
        totalPlays += 1
    } else {
        btn8.innerText = '0'
        h = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})

const btn9 = document.getElementById('btn-9')
btn9.addEventListener('click', () => {
    if (round % 2 == 0) {
        btn9.innerText = 'X'
        i = 1
        totalPlays += 1
    } else {
        btn9.innerText = '0'
        i = 10
        totalPlays += 10
    }
    round += 1
    checkGameEnd()
})