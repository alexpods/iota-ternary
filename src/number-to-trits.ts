export function numberToTrits(number: number): number[] {
  var i, j, r, n, v

  const trits = new Array()

  n = number < 0
  v = n ? -number : number

  while (v > 0) {
    r = v % 3
    v = Math.floor(v / 3)

    if (r === 2) {
      r = -1
      v += 1
    }

    trits.push(n ? r && -r : r)
  }

  return trits
}
