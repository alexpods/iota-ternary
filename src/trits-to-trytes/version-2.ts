import { trit } from "../types"

const NUMBERS_TO_TRYTES = {
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


export function tritsToTrytes(trits: trit[]): string {
  const size = Math.ceil(trits.length / 3)
  const trytes = new Array(size)

  for (var i = 0; i < size; i += 1) {
    trytes[i] = NUMBERS_TO_TRYTES[
      (trits[i*3 + 0] || 0)
      +
      (trits[i*3 + 1] || 0)*3
      +
      (trits[i*3 + 2] || 0)*9
    ]
  }

  return trytes.join('')
}
