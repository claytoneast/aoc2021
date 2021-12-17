const fs = require("fs")
const { exit } = require("process")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day5input', { encoding: 'utf8'})
const data = f.trim().split('\n')

// input:
// 31,985 -> 988,28
// returns to
// [
//   [
//       31,
//       985
//   ],
//   [
//       988,
//       28
//   ]
// ]

function part1(data) {
  const pointsSeen = {}
  data.forEach(pointPair => {
    const [
      _,
      x1,
      y1,
      x2,
      y2,
    ] = pointPair.match(/(\d{1,3}),(\d{1,3}) \-\> (\d{1,3}),(\d{1,3})/).map(x => parseInt(x))

    // only keep the points if they match x1 = x2 or y1 = y2
    // so we only have horizontal or vertical lines
    if (x1 !== x2 && y1 !== y2) return

    if (x1 === x2) {
      const startY = Math.min(y1, y2)
      const diff = y1 - y2
      for (let i = 0; i <= Math.abs(diff); i++) {
        let pointY = startY + i
        let coords = `${x1},${pointY}`
        if (pointsSeen[coords]) {
          pointsSeen[coords] += 1
        } else {
          pointsSeen[coords] = 1
        }
      }
    } else if (y1 === y2) {
      const startX = Math.min(x1, x2)
      const diff = x1 - x2
      for (let i = 0; i <= Math.abs(diff); i++) {
        let pointX = startX + i
        let coords = `${pointX},${y1}`
        if (pointsSeen[coords]) {
          pointsSeen[coords] += 1
        } else {
          pointsSeen[coords] = 1
        }
      }
    } else { // diagonal line

    }
  })

  let count = 0
  Object.values(pointsSeen).forEach(pointCoint => {
    if (pointCoint > 1) count ++
  })
  console.log(`----- count: ${JSON.stringify(count, null, 4)}`)
  // map all points in a line into a hash where the key is the x,y pair
  // and the value is a count of the times that point has been seen.
}

// part1(data)

function generateRange(pt1, pt2) {
  let arr = []
  for (let i = 0; i <= Math.abs(pt1 - pt2); i++) {
    const sign = pt1 < pt2 ? 1 : -1
    const currNum = pt1 + (sign * i)
    arr.push(currNum)
    // console.log(`----- currNum: ${JSON.stringify(currNum, null, 4)}`)
  }
  return arr
}

function part2(data) {
  const pointsSeen = {}
  data.forEach(pointPair => {
    const [
      _,
      x1,
      y1,
      x2,
      y2,
    ] = pointPair.match(/(\d{1,3}),(\d{1,3}) \-\> (\d{1,3}),(\d{1,3})/).map(x => parseInt(x))

    if (x1 === x2) {
      generateRange(y1, y2).forEach(yVal => {
        const pointStr = `${x1},${yVal}`
        pointsSeen[pointStr] ? pointsSeen[pointStr] +=1 : pointsSeen[pointStr] = 1
      })
    } else if (y1 === y2) {
      generateRange(x1, x2).forEach(xVal => {
        const pointStr = `${xVal},${y1}`
        pointsSeen[pointStr] ? pointsSeen[pointStr] +=1 : pointsSeen[pointStr] = 1
      })
    } else { // diagonal
      const xRange = generateRange(x1, x2)
      const yRange = generateRange(y1, y2)
      xRange.forEach((xVal, i) => {
        const pointStr = `${xVal},${yRange[i]}`
        pointsSeen[pointStr] ? pointsSeen[pointStr] +=1 : pointsSeen[pointStr] = 1
      })
    }

  })

  let count = 0
  Object.values(pointsSeen).forEach(pointCoint => {
    if (pointCoint > 1) count ++
  })
  console.log(`----- count: ${JSON.stringify(count, null, 4)}`)
}

part2(data)
