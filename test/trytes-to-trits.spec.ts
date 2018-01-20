import { expect } from 'chai'

import { trytesToTrits } from '../src/trytes-to-trits'
import { tritsToTrytes } from '../src/trits-to-trytes';

import { TRITS, NUMBERS_TO_TRYTES } from '../src/constants'
import { generateTrytes } from './utils'

describe("trytesToTrits(trytes)", () => {

  it("should convert trytes to trits", () => {
    const trytes = generateTrytes()
    const trits  = trytesToTrits(trytes)

    expect(trits).to.be.a("array")
    expect(trits.length).to.equal(trytes.length * 3)

    for (let i = 0; i < trits.length; i++) {
      expect(trits[i]).to.be.oneOf(TRITS)

      if (i % 3 === 0) {
        const value = (3**0) * trits[i+0] + (3**1) * trits[i+1] + (3**2) * trits[i+2]
        const tryte = NUMBERS_TO_TRYTES[value]

        expect(tryte).to.equal(trytes[i/3])
      }
    }
  })

  it("should be possible to convert trytes back to trits", () => {
    const trytes  = generateTrytes()
    const trits   = trytesToTrits(trytes)
    const trytes2 = tritsToTrytes(trits)

    expect(trytes2).to.deep.equal(trytes)
  })
})
