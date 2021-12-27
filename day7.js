const fs = require("fs")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day7input', { encoding: 'utf8'})
const data = f.trim().split(',').map(x => parseInt(x))

function part_one(data) {
  let min = 0
  let max = 0
  data.forEach(val => {
    if (val < min) min = val
    if (val > max) max = val
  })

  let totalFuel = {}
  for (let i = min; i <= max; i++) {
    totalFuel[i] = 0
    data.forEach(val => {
      const fuelUsed = Math.abs(i - val)
      totalFuel[i] += fuelUsed
    })
  }

  let lowestVal = [0, totalFuel[0]]
  Object.entries(totalFuel).forEach(([key, value]) => {
    if (value < lowestVal[1]) {
      lowestVal[0] = key
      lowestVal[1] = value
    }
  })
}

// part_one(data)

function part_two(data) {
  let min = 0
  let max = 0
  data.forEach(val => {
    if (val < min) min = val
    if (val > max) max = val
  })

  let totalFuel = {}
  for (let i = min; i <= max; i++) {
    totalFuel[i] = 0
    data.forEach(val => {
      const distanceTraveled = Math.abs(i - val)
      let fuelBurned = 0
      for (let j = 1; j <= distanceTraveled; j++) {
        fuelBurned += j
      }
      totalFuel[i] += fuelBurned
    })
  }

  let lowestVal = [0, totalFuel[0]]
  Object.entries(totalFuel).forEach(([key, value]) => {
    if (value < lowestVal[1]) {
      lowestVal[0] = key
      lowestVal[1] = value
    }
  })
  console.log(`----- lowestVal: ${JSON.stringify(lowestVal, null, 4)}`)
}

part_two(data)
