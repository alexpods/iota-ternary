const TRYTES = "NOPQRSTUVWXYZ9ABCDEFGHIJKLM"

export function trytesToNumber(trytes: string): number {
  var r = 0

  for (var i = trytes.length; i-- > 0;) {
    r = r*27 + TRYTES.indexOf(trytes[i]) - 13
  }

  return r
}
