const fs = require("fs")

const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day1_input', { encoding: 'utf8'})
const d = f.trim().split('\n').map(x => parseInt(x))

let counter1 = 0
let i = 1
for (i; i < d.length; i++) {
  const curr = d[i]
  const prev = d[i - 1]
  if (curr >= prev) {
    counter1++
  } else {
  }
}


console.log(`----- counter1: ${JSON.stringify(counter1, null, 4)}`)




let counter2 = 0
for (let i = 3; i < d.length; i++) {
  // console.log(`----- i: ${JSON.stringify(i, null, 4)}`)
  const currWin = d[i] + d[i-1] + d[i-2]
  const prevWin = d[i-1] + d[i-2] + d[i-3]
  if (currWin > prevWin) { counter2 += 1 }
}
console.log(`----- counter2: ${JSON.stringify(counter2, null, 4)}`)
