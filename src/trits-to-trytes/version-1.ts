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
  var i, j, m, v

  const trytesSize = Math.ceil(trits.length / 3)
  const tritsSize  = trytesSize * 3
  const trytesArray = new Array(trytesSize)

  for (i = 0, j = 0, v = 0; i < tritsSize; ++i) {
    m = i % 3

    v += (trits[i] || 0)*(3**m)

    if (m === 2) {
      trytesArray[j++] = NUMBERS_TO_TRYTES[v]
      v = 0
    }
  }

  return trytesArray.join('')
}
