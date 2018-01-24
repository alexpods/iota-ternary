export function tritsToBytes(trits: number[]): Buffer {
  const size = Math.ceil(trits.length / 5)
  const bytes: Buffer = Buffer.alloc(size)

  for (var i = 0; i < size; ++i) {
    bytes.writeInt8((
      (trits[i*5 + 0] || 0)
      +
      (trits[i*5 + 1] || 0)*3
      +
      (trits[i*5 + 2] || 0)*9
      +
      (trits[i*5 + 3] || 0)*27
      +
      (trits[i*5 + 4] || 0)*81
    ), i)
  }

  return bytes
}
