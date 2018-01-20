export function tritsToNumber(trits: number[]): number {
  var i, result

  result = 0

  for (i = trits.length -1; i >= 0; --i) {
    result = result * 3 + trits[i]
  }

  return result
}
