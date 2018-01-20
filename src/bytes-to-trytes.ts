import { bytesToTrits } from './bytes-to-trits'
import { tritsToTrytes } from './trits-to-trytes'

export function bytesToTrytes(bytes: Buffer): string {
  return tritsToTrytes(bytesToTrits(bytes))
}
