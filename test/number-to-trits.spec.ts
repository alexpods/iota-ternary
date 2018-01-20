import { expect } from 'chai'

import { numberToTrits } from '../src/number-to-trits'
import { tritsToNumber } from '../src/trits-to-number'

import { TRITS } from '../src/constants'
import { generateNumber } from './utils'

describe("numberToTrits(number)", () => {
  let number: number

  beforeEach(() => {
    number = generateNumber()
  })

  it("should convert number to trits", () => {
    const trits = numberToTrits(number)

    expect(trits).to.be.a("array")

    const size = trits.length

    expect(3**(size - 1)).to.be.lte(number)
    expect(3**(size)).to.be.gte(number)

    for (let i = 0; i < trits.length; i++) {
      expect(trits[i]).to.be.oneOf(TRITS)
    }
  })

  it("should be possible to convert trits back to number", () => {
    const trits = numberToTrits(number)
    const number2 = tritsToNumber(trits)

    expect(number2).to.equal(number)
  })
})
