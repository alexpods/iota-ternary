import { trytesToTrits } from './trytes-to-trits'
import { tritsToBytes } from './trits-to-bytes';

export function trytesToBytes(trytes: string): Buffer {
  return tritsToBytes(trytesToTrits(trytes))
}
