export function trytesToNumber(trytes: string): number {
  for (var r = 0, i = trytes.length; i-- > 0;) {
    var v = trytes.charCodeAt(i)

    if (v > 77) {
      r = r*27 + v - 91
    } else if (v > 64) {
      r = r*27 + v - 64
    } else {
      r = r*27
    }

  }

  return r
}
