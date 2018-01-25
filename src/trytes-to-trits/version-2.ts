import { trit } from "../types"

const TRYTES = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const TRYTES_TO_TRITS = [
  [ 0,  0,  0],
  [ 1,  0,  0],
  [-1,  1,  0],
  [ 0,  1,  0],
  [ 1,  1,  0],
  [-1, -1,  1],
  [ 0, -1,  1],
  [ 1, -1,  1],
  [-1,  0,  1],
  [ 0,  0,  1],
  [ 1,  0,  1],
  [-1,  1,  1],
  [ 0,  1,  1],
  [ 1,  1,  1],
  [-1, -1, -1],
  [ 0, -1, -1],
  [ 1, -1, -1],
  [-1,  0, -1],
  [ 0,  0, -1],
  [ 1,  0, -1],
  [-1,  1, -1],
  [ 0,  1, -1],
  [ 1,  1, -1],
  [-1, -1,  0],
  [ 0, -1,  0],
  [ 1, -1,  0],
  [-1,  0,  0]
]

export function trytesToTrits(trytes: string): trit[] {
  var i, j, t

  const size  = trytes.length
  const trits = new Array(size * 3)

  for (i = 0, j = 0; i < size; i += 1, j += 3) {
    t = TRYTES_TO_TRITS[TRYTES.indexOf(trytes[i])]

    trits[j + 0] = t[0]
    trits[j + 1] = t[1]
    trits[j + 2] = t[2]
  }

  return trits
}
