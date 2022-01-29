const fs = require("fs")
const f = fs.readFileSync('/Users/clayton/programming/aoc2021/day8input', { encoding: 'utf8'})
const data = f.trim().split('\n')

/*
0: acbefg
1: cf
2: acdeg
3: acdfg
4: bcdf
5: abdfg
6: abdefg
7: acf
8: abcdefg
9: abcdfg

1: cf
7: acf
4: bcdf
2: acdeg
3: acdfg
5: abdfg
0: acbefg
6: abdefg
9: abcdfg
8: abcdefg
*/

function part_one(data) {
  let count = 0
  data.forEach(line => {
    const [digitTries, digitDisplays] = line.split('|').map(x => x.trim().split(' '))
    digitDisplays.forEach(digitLetters => {
      if ([2, 3, 4, 7].includes(digitLetters.length)) count += 1
    })
  })
  console.log(`----- count: ${JSON.stringify(count, null, 4)}`)
}

// part_one(data)
// ----- count: 255







/*
fdceba bafdgc abeg afbdgec gbeacd abced bgc fcdge bg bedgc


bg
bgc
abeg
abced
fcdge
bedgc
fdceba
bafdgc
gbeacd
afbdgec
*/
function part_two(data) {
  data.slice(0, 1).forEach(line => {
    const [digitTries, digitDisplays] = line.split('|').map(x => x.trim().split(' '))

    // this sort is for my brain to be able to handle thinking about
    // this when i see the console log
    let nxt = digitTries.map(x => {
      return x.split('').sort().join('')
    }).sort((a, b) => a.length - b.length)
    console.log(`----- nxt: ${JSON.stringify(nxt, null, 4)}`)

    digitTries.forEach(wires => {
      if (wires.length === 2) {
        poss[1].push(...wires)
      } else if (wires.length === 3) {
        poss[7].push(...wires)
      } else if (wires.length === 4) {
        poss[4].push(...wires)
      }
    })
    // console.log(`----- poss: ${JSON.stringify(poss, null, 4)}`)
  })
}

part_two(data)
