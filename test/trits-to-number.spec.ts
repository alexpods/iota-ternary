import { expect } from 'chai'
import { tritsToNumber } from '../src/trits-to-number'
import { generateTrits } from './utils'

describe("tritsToNumber(trits)", () => {
  let trits: number[]

  beforeEach(() => {
    trits = generateTrits(10)
  })

  it("should convert trits to a number", () => {
    const number = tritsToNumber(trits)

    expect(number).to.be.a("number")
    expect(number).to.equal(trits.reduce((acc, val, i) => acc + val * (3**i), 0))
  })

  // it("should be possible to convert trits back to trytes", () => {
  //   const trytes = tritsToTrytes(trits)
  //   const trits2 = trytesToTrits(trytes)

  //   expect(trits2).to.deep.equal(trits)
  // })
})
