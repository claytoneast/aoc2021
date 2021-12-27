const fs = require("fs")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day6input', { encoding: 'utf8'})
const data = f.trim().split(',')

function part_one(data) {
  let seedCounters = data.map(x => parseInt(x))
  let arrCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  seedCounters.forEach(counter => arrCounts[counter] += 1)
  let next8Count = seedCounters[0]
  for (let i = 0; i < 256; i++) {
    arrCounts.forEach((count, index) => {
      if (index === 0) {
        next8Count = count
      }
      const nextCountForPos = index === 8 ? next8Count : arrCounts[index + 1]
      if (index === 8) {
        arrCounts[index] = next8Count
        arrCounts[6] += next8Count
      } else {
        arrCounts[index] = nextCountForPos
      }
    })
  }
  const finalCount = arrCounts.reduce((prev, curr) => prev + curr)
  console.log(`----- finalCount: ${JSON.stringify(finalCount, null, 4)}`)
}

part_one(data)
// answer try 1: 393019
