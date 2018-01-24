import { TRYTES, TRITS } from '../src/constants'

export const NUMBERS_TO_TRYTES = {
  [0]: "9",
  [1]: "A",
  [2]: "B",
  [3]: "C",
  [4]: "D",
  [5]: "E",
  [6]: "F",
  [7]: "G",
  [8]: "H",
  [9]: "I",
  [10]: "J",
  [11]: "K",
  [12]: "L",
  [13]: "M",
  [-13]: "N",
  [-12]: "O",
  [-11]: "P",
  [-10]: "Q",
  [-9]: "R",
  [-8]: "S",
  [-7]: "T",
  [-6]: "U",
  [-5]: "V",
  [-4]: "W",
  [-3]: "X",
  [-2]: "Y",
  [-1]: "Z",
}

export function generateBytes(count = 55) {
  const bytes = Buffer.alloc(count)

  for (let i = 0; i < count; ++i) {
    bytes.writeInt8(-121 + Math.floor(243*Math.random()), i)
  }

  return bytes
}

export function generateTrytes(count = 81) {
  const trytesArray = new Array(count)

  for (let i = 0; i < count; ++i) {
    trytesArray[i] = TRYTES[Math.floor(Math.random()*27)]
  }

  return trytesArray.join('')
}

export function generateTrits(count = 273) {
  const trits = new Array(count)

  for (let i = 0; i < count; ++i) {
    trits[i] = TRITS[Math.floor(Math.random()*3)]
  }

  return trits
}

export function generateNumber(maxNumber = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (maxNumber + 1))
}
