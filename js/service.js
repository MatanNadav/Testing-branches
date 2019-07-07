'use strict'
let gNextNum


function createBoard() {
    gNextNum = 1
    const nums = getNums()
    const board = []
    for(let i = 0; i< 4; i++) {
        board[i] = []
        for(let j = 0; j < 4; j++) {
            board[i][j] = nums.splice(getRandomInt(0,nums.length),1)
        }
    }
    return board
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function getNums() {
    const nums = []
    for(let i = 0; i < 4 * 4; i++) {
        nums.push(i+1)
    }
    return nums
}

function checkNumClick(num) {
    if(num === gNextNum) {
        gNextNum++
        return true
    } else return false
}

function checkWin() {
    console.log('checking win')
}


















































// function checkNumClick(num) {
    // if(num !== nextNum) return false
    // gNextNum++
    // checkWin()
    // return true
// }