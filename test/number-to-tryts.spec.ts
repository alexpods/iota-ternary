import { expect } from 'chai'

import { numberToTrytes } from '../src/number-to-trytes'
import { trytesToNumber } from '../src/trytes-to-number'

import { TRYTES } from '../src/constants'
import { generateNumber } from './utils'

describe("numberToTryts(bytes)", () => {

  it("should convert number to trytes", () => {
    const number = generateNumber()
    const trytes = numberToTrytes(number)

    expect(trytes).to.be.a("string")

    for (let i = 0; i < trytes.length; i++) {
      expect(trytes[i]).to.be.oneOf(TRYTES.split(''))
    }
  })

  it("should be possible to convert trytes back to number", () => {
    const number  = generateNumber()
    const trytes  = numberToTrytes(number)
    const number2 = trytesToNumber(trytes)

    expect(number2).to.equal(number)
  })
})
