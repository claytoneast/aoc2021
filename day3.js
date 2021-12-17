const fs = require("fs")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day3input', { encoding: 'utf8'})
const data = f.trim().split('\n')

function p1(data) {
  const testEl = data[0]
  const counter = []
  for (let i = 0; i < testEl.length; i++) {
    counter.push([0, 0])
  }

  data.forEach(binStr => {
    for (let i = 0; i < binStr.length; i ++){
      const curr = binStr[i]
      const counterEl = counter[i]
      counterEl[parseInt(curr)] += 1
    }
  })
  console.log(`----- counter: ${JSON.stringify(counter, null, 4)}`)

  let mostCommon = ""
  let leastCommon = ""
  counter.forEach(([zeroCount, oneCount]) => {
    if (zeroCount > oneCount) {
      mostCommon += "0"
      leastCommon += "1"
    } else if (oneCount > zeroCount) {
      mostCommon += "1"
      leastCommon += "0"
    } else {
      throw new Error('they are the same, how')
    }
    // mostCommon += (Math.max(zeroCount, oneCount)).toString(10)
    // leastCommon += (Math.min(zeroCount, oneCount)).toString(10)
  })

  console.log(`----- mostCommon: ${JSON.stringify(mostCommon, null, 4)}`)
  console.log(`----- leastCommon: ${JSON.stringify(leastCommon, null, 4)}`)

  const gammaNum = parseInt(mostCommon, 2)
  const epsilonNum = parseInt(leastCommon, 2)
  const answer = gammaNum * epsilonNum
  console.log(`----- answer: ${JSON.stringify(answer, null, 4)}`)
}

// p1(data)

function part2(data) {
  const testEl = data[0]
  let higherRemaining = [...data]
  let lowerRemaining = [...data]

  for (let i = 0; i < testEl.length; i++){
    let higherOnesCount = 0
    let lowerOnesCount = 0

    higherRemaining.forEach(binStr => { if (binStr[i] === '1') higherOnesCount++ })
    lowerRemaining.forEach(binStr => { if (binStr[i] === '1') lowerOnesCount++ })

    const higherMostCommon = higherOnesCount >= (higherRemaining.length / 2) ? '1' : '0'
    const lowerLeastCommon = lowerOnesCount >= (lowerRemaining.length / 2) ? '0' : '1'

    if (higherRemaining.length > 1) {
      higherRemaining = higherRemaining.filter(binStr => binStr[i] === higherMostCommon)
    }
    if (lowerRemaining.length > 1) {
      lowerRemaining = lowerRemaining.filter(binStr => binStr[i] === lowerLeastCommon)
    }

    console.log(`----- higherRemaining: ${JSON.stringify(higherRemaining, null, 4)}`)
    console.log(`----- lowerRemaining: ${JSON.stringify(lowerRemaining, null, 4)}`)
  }

  const result = parseInt(higherRemaining[0], 2) * parseInt(lowerRemaining[0], 2)
  console.log(`----- result : ${JSON.stringify(result, null, 4)}`)
}

part2(data)
// 817684
// Reflections:
// Didn't read the problem carefully enough, didn't realize it was only
// comparing numbers that remained.
// Easier to express it as a count of Ones, compare it to half the length to
// see if its greater or not, instead of comparing the two numbers together.
//
