const BYTES_TO_TRITS = new Array(243)

bytesToTritsLoop: for (let i = 0, trits = [0, 0, 0, 0, 0]; i < 243; ++i) {
  BYTES_TO_TRITS[i] = trits.slice()

  for (let j = 0; j < 5; ++j) {
    if (++trits[j] > 1) {
      trits[j] = -1
    } else {
      continue bytesToTritsLoop
    }
  }
}

export function bytesToTrits(bytes: Buffer): number[] {
  var i, j, v, byteTreits

  const size  = bytes.byteLength
  const trits = new Array(size * 5)

  for (i = 0; i < size; ++i) {
    var val = bytes.readInt8(i)

    if (val < 0) {
      val += 243
    }

    byteTreits = BYTES_TO_TRITS[val]

    if (!byteTreits) {
      throw new Error(`Incorrect byte ${bytes.readInt8(i)}!`)
    }

    trits[i*5 + 0] = byteTreits[0]
    trits[i*5 + 1] = byteTreits[1]
    trits[i*5 + 2] = byteTreits[2]
    trits[i*5 + 3] = byteTreits[3]
    trits[i*5 + 4] = byteTreits[4]
  }

  return trits
}