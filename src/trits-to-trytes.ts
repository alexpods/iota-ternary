import { NUMBERS_TO_TRYTES } from './constants'

export function tritsToTrytes(trits: number[]): string {
  var i, j, m, value

  const trytesSize = Math.ceil(trits.length / 3)
  const tritsSize  = trytesSize * 3
  const trytesArray = new Array(trytesSize)

  value = 0

  for (i = 0, j = 0; i < tritsSize; ++i) {
    m = i % 3

    value += (trits[i] || 0)*(3**m)

    if (m === 2) {
      trytesArray[j++] = NUMBERS_TO_TRYTES[value]
      value = 0
    }
  }

  return trytesArray.join('')
}
