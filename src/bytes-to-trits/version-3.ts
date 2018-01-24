const BYTES_TO_TRITS = new Array(243 * 5)

bytesToTritsLoop: for (let i = 0, trits = [0, 0, 0, 0, 0]; i < 243; ++i) {

  for (let j = 0; j < 5; ++j) {
    BYTES_TO_TRITS[i*5 + j] = trits[j]
  }

  for (let j = 0; j < 5; ++j) {
    if (++trits[j] > 1) {
      trits[j] = -1
    } else {
      continue bytesToTritsLoop
    }
  }
}

export function bytesToTrits(bytes: Buffer): number[] {
  var i, j, v, tryteTrits

  const size  = bytes.byteLength
  const trits = new Array(size * 5)

  for (i = 0; i < size; ++i) {
    var val = bytes.readInt8(i)

    if (val < 0) {
      val += 243
    }

    if (val > 243 || val < 0) {
      throw new Error(`Incorrect byte ${bytes.readInt8(i)}!`)
    }

    trits[i*5 + 0] = BYTES_TO_TRITS[val*5 + 0]
    trits[i*5 + 1] = BYTES_TO_TRITS[val*5 + 1]
    trits[i*5 + 2] = BYTES_TO_TRITS[val*5 + 2]
    trits[i*5 + 3] = BYTES_TO_TRITS[val*5 + 3]
    trits[i*5 + 4] = BYTES_TO_TRITS[val*5 + 4]
  }

  return trits
}
