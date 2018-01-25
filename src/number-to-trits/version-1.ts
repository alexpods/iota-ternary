export function numberToTrits(number: number): number[] {
  var i, r, n, v

  const trits = new Array()

  v = Math.abs(number)

  while (v > 0) {
    r = v % 3
    v = Math.floor(v / 3)

    if (r === 2) {
      r = -1
      v += 1
    }

    trits.push(r)
  }


  if (number < 0) {
    for (i = 0; i < trits.length; ++i) {
      trits[i] = trits[i] && -trits[i]
    }
  }


  return trits
}
