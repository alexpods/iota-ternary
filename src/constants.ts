export const NUMBER_OF_TRITS_IN_A_BYTE = 5

export const TRYTES = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const TRITS  = [-1, 0, 1]

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

export const BYTES_TO_TRITS = {}


bytesToTritsLoop: for (let i = 0, trits = [0, 0, 0, 0, 0]; i < 243; ++i) {
  let index = i <= 121 ? i : i - 243

  BYTES_TO_TRITS[index] = trits.slice()

  for (let j = 0; j < 5; ++j) {
    if (++trits[j] > 1) {
      trits[j] = -1
    } else {
      continue bytesToTritsLoop
    }
  }
}
