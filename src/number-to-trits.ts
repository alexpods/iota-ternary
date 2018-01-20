export function numberToTrits(number: number): number[] {
  var i, j, remainder, negative, trits, value

  trits    = new Array()
  negative = number < 0
  value    = negative ? -number : number

  while (value > 0) {
    remainder = value % 3
    value = Math.floor(value / 3)

    if (remainder === 2) {
      remainder = -1
      value += 1
    }

    trits.push(negative ? -remainder : remainder)
  }

  return trits
}
