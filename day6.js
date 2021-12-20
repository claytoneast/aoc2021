const fs = require("fs")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day6input', { encoding: 'utf8'})
const data = f.trim().split(',')

function part_one(data) {
  let seedCounters = data.map(x => parseInt(x))
  let arrCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  seedCounters.forEach(counter => arrCounts[counter] += 1)
  console.log(`----- arrCounts: ${JSON.stringify(arrCounts, null, 4)}`)
  let next8Count = seedCounters[0]
  for (let i = 0; i < 2; i++) {
    arrCounts.forEach((count, index) => {
      const fishAge = index
      console.log(`----- fishAge: ${JSON.stringify(fishAge, null, 4)}`)
      if (fishAge === 0) {
        next8Count = count
      }
      console.log(`----- next8Count: ${JSON.stringify(next8Count, null, 4)}`)
      const nextCountForPos = index === 8 ? next8Count : arrCounts[i + 1]
      console.log(`----- nextCountForPos: ${JSON.stringify(nextCountForPos, null, 4)}`)
      if (fishAge === 8) {
        arrCounts[index] = next8Count
      } else {
        arrCounts[index] = nextCountForPos
      }
    })

    console.log(`----- arrCounts: ${JSON.stringify(arrCounts, null, 4)}`)

    // const currLength = fishCounters.length
    // for (let fishIndex = 0; fishIndex < currLength; fishIndex++) {
    //   const age = fishCounters[fishIndex]
    //   if (age === 0) {
    //     fishCounters.push(8)
    //     fishCounters[fishIndex] = 6
    //   } else {
    //     fishCounters[fishIndex] = fishCounters[fishIndex] - 1
    //   }
    // }
    // console.log(`----- i: ${JSON.stringify(i, null, 4)}`)
    // console.log(`----- currLength: ${JSON.stringify(currLength, null, 4)}`)
  }
  // console.log(fishCounters.length)
}

part_one(data)
// answer try 1: 393019
