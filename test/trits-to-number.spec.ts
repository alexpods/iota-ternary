import { expect } from 'chai'

import { tritsToNumber } from '../src/trits-to-number'
import { numberToTrits } from '../src/number-to-trits'

import { generateTrits } from './utils'

describe("tritsToNumber(trits)", () => {

  it("should convert trits to a number", () => {
    const trits  = generateTrits(10)
    const number = tritsToNumber(trits)

    expect(number).to.be.a("number")
    expect(number).to.equal(trits.reduce((acc, val, i) => acc + val * (3**i), 0))
  })

  it("should be possible to convert number back to trits", () => {
    const trits  = generateTrits(10)
    const number = tritsToNumber(trits)
    const trits2 = numberToTrits(number)

    const size = Math.min(trits.length, trits2.length)

    expect(trits2.slice(0, size)).to.deep.equal(trits.slice(0, size))
  })
})
