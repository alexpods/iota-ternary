import { bytesToTrits } from './bytes-to-trits'
import { tritsToNumber } from './trits-to-number'

export function bytesToNumber(bytes: Buffer): number {
  return tritsToNumber(bytesToTrits(bytes))
}
