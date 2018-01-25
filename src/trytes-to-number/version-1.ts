import { trytesToTrits } from "../trytes-to-trits"
import { tritsToNumber } from "../trits-to-number"

export function trytesToNumber(trytes: string): number {
  return tritsToNumber(trytesToTrits(trytes))
}
