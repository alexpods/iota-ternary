import { expect } from 'chai'
import { trytesToNumber } from '../src/trytes-to-number'
import { TRYTES_TO_NUMBERS } from '../src/constants'
import { generateTrytes } from './utils'

describe("trytesToNumber(trytes)", () => {
  let trytes: string

  beforeEach(() => {
    trytes = generateTrytes(4)
  })

  it("should convert trytes to a number", () => {
    const number = trytesToNumber(trytes)

    expect(number).to.be.a("number")
    expect(number).to.equal(trytes.split('').reduce((acc, val, i) => acc + TRYTES_TO_NUMBERS[val] * (27**i), 0))
  })

  // it("should be possible to convert trits back to trytes", () => {
  //   const trytes = tritsToTrytes(trits)
  //   const trits2 = trytesToTrits(trytes)

  //   expect(trits2).to.deep.equal(trits)
  // })
})
