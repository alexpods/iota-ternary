import { numberToTrits } from './number-to-trits'
import { tritsToBytes } from './trits-to-bytes'

export function numberToBytes(number: number): Buffer {
  return tritsToBytes(numberToTrits(number))
}

