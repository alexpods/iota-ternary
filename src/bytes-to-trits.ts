import { BYTES_TO_TRITS } from './constants'

export function bytesToTrits(bytes: Buffer): number[] {
  var i, j, v, tryteTrits

  const size  = bytes.byteLength
  const trits = new Array(size * 5)

  for (i = 0; i < size; ++i) {
    var val = bytes.readInt8(i)

    tryteTrits = BYTES_TO_TRITS[val]

    if (!tryteTrits) {
      throw new Error(`Incorrect byte ${val}!`)
    }

    trits[i*5 + 0] = tryteTrits[0]
    trits[i*5 + 1] = tryteTrits[1]
    trits[i*5 + 2] = tryteTrits[2]
    trits[i*5 + 3] = tryteTrits[3]
    trits[i*5 + 4] = tryteTrits[4]
  }

  return trits
}