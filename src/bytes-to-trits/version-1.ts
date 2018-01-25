import { trit } from "../types"

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

export function bytesToTrits(bytes: Buffer): trit[] {
  var i, j, v, t

  const size  = bytes.byteLength
  const trits = new Array(size * 5)

  for (i = 0; i < size; ++i) {
    v = bytes.readInt8(i)
    t = BYTES_TO_TRITS[v]

    if (!t) {
      throw new Error(`Incorrect byte ${bytes.readInt8(i)}!`)
    }

    trits[i*5 + 0] = t[0]
    trits[i*5 + 1] = t[1]
    trits[i*5 + 2] = t[2]
    trits[i*5 + 3] = t[3]
    trits[i*5 + 4] = t[4]
  }

  return trits
}