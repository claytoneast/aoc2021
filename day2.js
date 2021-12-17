const fs = require("fs")

const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day2input', { encoding: 'utf8'})
const data = f.trim().split('\n')

console.log(`----- data: ${JSON.stringify(data, null, 4)}`)

function p1(data) {
  let depth = 0
  let pos = 0
  data.forEach(str => {
    const [command, magStr] = str.split(' ')
    const mag = parseInt(magStr)
    if (command === 'up') {
      depth -= mag
    } else if (command === 'down') {
      depth += mag
    } else if (command === 'forward') {
      pos += mag
    }
  })

  console.log(`----- depth: ${JSON.stringify(depth, null, 4)}`)
  console.log(`----- pos: ${JSON.stringify(pos, null, 4)}`)
  console.log(`----- depth * pos: ${JSON.stringify(depth * pos, null, 4)}`)
}

p1(data)


function p2(data) {
  let depth = 0
  let pos = 0
  let aim = 0

  data.forEach(str => {
    const [command, magStr] = str.split(' ')
    const mag = parseInt(magStr)
    if (command === 'up') {
      aim -= mag
    } else if (command === 'down') {
      aim += mag
    } else if (command === 'forward') {
      pos += mag
      depth += (aim * mag)
    }
  })
  console.log(`----- p2 depth: ${JSON.stringify(depth, null, 4)}`)
  console.log(`----- p2 pos: ${JSON.stringify(pos, null, 4)}`)
  console.log(`----- p2 depth * pos: ${JSON.stringify(depth * pos, null, 4)}`)
}

p2(data)
