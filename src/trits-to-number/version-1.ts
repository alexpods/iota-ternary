export function tritsToNumber(trits: number[]): number {
  var val = 0

  for (var i = trits.length; i-- > 0;) {
    val = val * 3 + trits[i]
  }

  return val
}
