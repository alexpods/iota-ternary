import { TRYTES, TRITS } from '../src/constants'

export function generateBytes(count = 55) {
  const bytes = Buffer.alloc(count)

  for (let i = 0; i < count; ++i) {
    bytes.writeInt8(-121 + Math.floor(243*Math.random()), i)
  }

  return bytes
}

export function generateTrytes(count = 81) {
  const trytesArray = new Array(count)

  for (let i = 0; i < count; ++i) {
    trytesArray[i] = TRYTES[Math.floor(Math.random()*27)]
  }

  return trytesArray.join('')
}

export function generateTrits(count = 273) {
  const trits = new Array(count)

  for (let i = 0; i < count; ++i) {
    trits[i] = TRITS[Math.floor(Math.random()*3)]
  }

  return trits
}

export function generateNumber(maxNumber = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (maxNumber + 1))
}
