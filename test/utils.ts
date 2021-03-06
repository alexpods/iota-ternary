import { TRYTES, TRITS } from '../src/constants'

export const TRYTES_TO_TRITS = {
  "9": [ 0,  0,  0],
  "A": [ 1,  0,  0],
  "B": [-1,  1,  0],
  "C": [ 0,  1,  0],
  "D": [ 1,  1,  0],
  "E": [-1, -1,  1],
  "F": [ 0, -1,  1],
  "G": [ 1, -1,  1],
  "H": [-1,  0,  1],
  "I": [ 0,  0,  1],
  "J": [ 1,  0,  1],
  "K": [-1,  1,  1],
  "L": [ 0,  1,  1],
  "M": [ 1,  1,  1],
  "N": [-1, -1, -1],
  "O": [ 0, -1, -1],
  "P": [ 1, -1, -1],
  "Q": [-1,  0, -1],
  "R": [ 0,  0, -1],
  "S": [ 1,  0, -1],
  "T": [-1,  1, -1],
  "U": [ 0,  1, -1],
  "V": [ 1,  1, -1],
  "W": [-1, -1,  0],
  "X": [ 0, -1,  0],
  "Y": [ 1, -1,  0],
  "Z": [-1,  0,  0]
}

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

export const TRYTES_TO_NUMBERS = {
  "9": 0,
  "A": 1,
  "B": 2,
  "C": 3,
  "D": 4,
  "E": 5,
  "F": 6,
  "G": 7,
  "H": 8,
  "I": 9,
  "J": 10,
  "K": 11,
  "L": 12,
  "M": 13,
  "N": -13,
  "O": -12,
  "P": -11,
  "Q": -10,
  "R": -9,
  "S": -8,
  "T": -7,
  "U": -6,
  "V": -5,
  "W": -4,
  "X": -3,
  "Y": -2,
  "Z": -1
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
  return (Math.random() < 0.5 ? -1 : +1) * Math.floor(Math.random() * (maxNumber + 1))
}
