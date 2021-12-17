const fs = require("fs")
const { exit } = require("process")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day4input', { encoding: 'utf8'})
const data = f.trim().split('\n')


const numsCalled = data[0].split(',').map(x => parseInt(x))
const boards = []

// i=1 : advance one line to get away from the bingo nums
for (let i = 1; i < data.length; i++) {
  let line = data[i]

  if (line === "") {
    boards.push([])
    continue
  }

  let currBoard = boards[boards.length - 1]
  const boardLine = [
    [parseInt(line.slice(0, 2)), false],
    [parseInt(line.slice(3, 5)), false],
    [parseInt(line.slice(6, 8)), false],
    [parseInt(line.slice(9, 11)), false],
    [parseInt(line.slice(12, 14)), false],
  ]
  currBoard.push(boardLine)
}

console.log(`----- numsCalled: ${JSON.stringify(numsCalled, null, 4)}`)

let loopCounter = 0
let boardsWonIndexes = new Set

numsCalled.forEach(numCalled => {
  boards.forEach((board, boardIndex) => {
    if (boardsWonIndexes.has(boardIndex)) {
      return
    }

    board.forEach((line, lineIndex) => {
      line.forEach((numInfo, numIndex) => {
        loopCounter++
        if (numInfo[0] === numCalled) {
          numInfo[1] = true

          let rowGood = true
          line.forEach(([num, marked]) => {
            if (!marked) {
              rowGood = false
              return
            }
          })

          if (rowGood) {
            winCondition(board, numCalled, boardIndex)
          }

          let colGood = true
          for (let i = 0; i < 5; i++) {
            const vertNumToCheck = board[i][numIndex]
            if (!vertNumToCheck[1]) {
              colGood = false
            }
          }

          if (colGood) {
            winCondition(board, numCalled, boardIndex)
          }
        }
      })
      return
    })
    return
  })
  return
})

function winCondition(board, numCalled, boardIndex) {
  boardsWonIndexes.add(boardIndex)


  let score = 0
  let scr = ""
  board.forEach(line => {
    line.forEach(([number, marked]) => {
      const toPush = marked ? "[x]" : "[ ]"
      scr += toPush
      if (!marked) {
        score += number
      }
    })
    scr+= '\n'
  })

  score *= numCalled

  // last board to win
  if (boardsWonIndexes.size === 100) {
    console.log('----- last board!')
    console.log(`----- boardsWonIndexes.size: ${JSON.stringify(boardsWonIndexes.size, null, 4)}`)
    console.log(`----- score at Victory: ${JSON.stringify(score, null, 4)}`)
    console.log(scr)
    exit(1)
  } else {
    console.log('----- not last board')
  }
}
