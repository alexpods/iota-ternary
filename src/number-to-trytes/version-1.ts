import { numberToTrits } from '../number-to-trits'
import { tritsToTrytes } from '../trits-to-trytes'

export function numberToTrytes(number: number): string {
  return tritsToTrytes(numberToTrits(number))
}

