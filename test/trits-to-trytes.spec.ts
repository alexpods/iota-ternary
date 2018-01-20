import { expect } from 'chai'

import { tritsToTrytes } from '../src/trits-to-trytes'
import { trytesToTrits } from '../src/trytes-to-trits'

import { TRYTES, NUMBERS_TO_TRYTES, TRYTES_TO_NUMBERS } from '../src/constants'
import { generateTrits } from './utils'

describe("tritsToTrytes(trits)", () => {

  it("should convert trytes to trits", () => {
    const trits  = generateTrits()
    const trytes = tritsToTrytes(trits)

    expect(trytes).to.be.a("string")
    expect(trytes.length).to.equal(Math.floor(trits.length / 3))

    for (let i = 0; i < trytes.length; i++) {
      expect(trytes[i]).to.be.oneOf(TRYTES.split(''))

      const value = trits[i*3 + 0] * (3**0) + trits[i*3 + 1] * (3**1) + trits[i*3 + 2] * (3**2);
      const tryte = NUMBERS_TO_TRYTES[value]

      expect(trytes[i]).to.equal(tryte)
    }
  })

  it("should be possible to convert trits back to trytes", () => {
    const trits  = generateTrits()
    const trytes = tritsToTrytes(trits)
    const trits2 = trytesToTrits(trytes)

    expect(trits2).to.deep.equal(trits)
  })

  it("should works correctly if the number of provided trits can't be divided by 3 evenly", () => {
    const trits  = generateTrits(13)
    const trytes = tritsToTrytes(trits)
  })
})
