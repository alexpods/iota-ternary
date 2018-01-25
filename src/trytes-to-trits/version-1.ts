import { trit } from "../types"

const TRYTES_TO_TRITS = {
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

export function trytesToTrits(trytes: string): trit[] {
  var i, j, t

  const size  = trytes.length
  const trits = new Array(size * 3)

  for (i = 0, j = 0; i < size; i += 1, j += 3) {
    t = TRYTES_TO_TRITS[trytes[i]]

    trits[j + 0] = t[0]
    trits[j + 1] = t[1]
    trits[j + 2] = t[2]
  }

  return trits
}
