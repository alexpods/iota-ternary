import { TRYTES_TO_NUMBERS } from './constants'

export function trytesToNumber(trytes: string): number {
  var i, result

  result = 0

  for (i = trytes.length - 1; i >= 0; --i) {
    result = result * 27 + TRYTES_TO_NUMBERS[trytes[i]]
  }

  return result
}
