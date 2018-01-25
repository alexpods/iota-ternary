export function trytesToNumber(trytes: string): number {
  for (var r = 0, i = trytes.length; i-- > 0;) {
    var v = trytes.charCodeAt(i)

    if (v > 77) {
      v = v - 91
    } else if (v > 64) {
      v = v - 64
    } else {
      v = 0
    }

    r = r*27 + v
  }

  return r
}
