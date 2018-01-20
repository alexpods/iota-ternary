import { TRYTES_TO_TRITS } from './constants'

export function trytesToTrits(trytes: string): number[] {
  var i, tryteTrits

  const size  = trytes.length
  const trits = new Array(size * 3)

  for (i = 0; i < size; ++i) {
    tryteTrits = TRYTES_TO_TRITS[trytes[i]]

    trits[i*3 + 0] = tryteTrits[0]
    trits[i*3 + 1] = tryteTrits[1]
    trits[i*3 + 2] = tryteTrits[2]
  }

  return trits
}
