import { expect } from 'chai'

import { numberToTrits } from '../src/number-to-trits'
import { tritsToNumber } from '../src/trits-to-number'

import { TRITS } from '../src/constants'
import { generateNumber } from './utils'

describe("numberToTrits(number)", () => {

  it("should convert number to trits", () => {
    const number = 3776240617938684 // generateNumber()

    const trits = numberToTrits(number)

    expect(trits).to.be.a("array")

    const size = trits.length

    expect(3**(size - 2)).to.be.lte(number)
    expect(3**(size - 1)).to.be.gte(number)

    for (let i = 0; i < trits.length; i++) {
      expect(trits[i]).to.be.oneOf(TRITS)
    }
  })

  it("should be possible to convert trits back to number", () => {
    const number  = generateNumber()
    const trits   = numberToTrits(number)
    const number2 = tritsToNumber(trits)

    expect(number2).to.equal(number)
  })

  it("should convert negative values", () => {
    const number  = Math.abs(generateNumber())
    const trits   = numberToTrits(-number)
    const number2 = tritsToNumber(trits)

    expect(number2).to.be.a('number')
    expect(number2).to.be.lte(0)
    expect(number2).to.equal(-number)
  })
})
