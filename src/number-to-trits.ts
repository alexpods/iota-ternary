export function numberToTrits(number: number): number[] {
  var i, j, remainder, trits, value

  trits = new Array()
  value = number < 0 ? -number : number

  while (value > 0) {
    remainder = value % 3
    value = Math.floor(value / 3)

    if (remainder === 2) {
      remainder = -1
      value += 1
    }

    trits.push(remainder)
  }

  if (number < 0) {
    for (j = 0; j < trits.length; j++) {
      trits[j] = trits[j] === 0 ? 0 : -trits[j]
    }
  }

  return trits
}
