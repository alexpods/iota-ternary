import { trit } from "../types"

const TRYTES = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const TRYTES_TO_TRITS = [
  0,  0,  0,
  1,  0,  0,
 -1,  1,  0,
  0,  1,  0,
  1,  1,  0,
 -1, -1,  1,
  0, -1,  1,
  1, -1,  1,
 -1,  0,  1,
  0,  0,  1,
  1,  0,  1,
 -1,  1,  1,
  0,  1,  1,
  1,  1,  1,
 -1, -1, -1,
  0, -1, -1,
  1, -1, -1,
 -1,  0, -1,
  0,  0, -1,
  1,  0, -1,
 -1,  1, -1,
  0,  1, -1,
  1,  1, -1,
 -1, -1,  0,
  0, -1,  0,
  1, -1,  0,
 -1,  0,  0
]

export function trytesToTrits(trytes: string): trit[] {
  var i, j, k

  const size  = trytes.length
  const trits = new Array(size * 3)

  for (i = 0, j = 0; i < size; i += 1, j += 3) {
    k = TRYTES.indexOf(trytes[i]) * 3

    trits[j + 0] = TRYTES_TO_TRITS[k + 0]
    trits[j + 1] = TRYTES_TO_TRITS[k + 1]
    trits[j + 2] = TRYTES_TO_TRITS[k + 2]
  }

  return trits
}
