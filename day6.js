const fs = require("fs")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day6input', { encoding: 'utf8'})
const data = f.trim().split(',')

function part_one(data) {
  let fishCounters = data.map(x => parseInt(x))
  for (let i = 0; i < 80; i++) {
    const currLength = fishCounters.length
    for (let fishIndex = 0; fishIndex < currLength; fishIndex++) {
      const age = fishCounters[fishIndex]
      if (age === 0) {
        fishCounters.push(8)
        fishCounters[fishIndex] = 6
      } else {
        fishCounters[fishIndex] = fishCounters[fishIndex] - 1
      }
    }
  }
  console.log(fishCounters.length)
}

part_one(data)
// answer try 1: 393019
