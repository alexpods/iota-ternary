import { expect } from 'chai'

import { numberToBytes } from '../src/number-to-bytes'
import { bytesToNumber } from '../src/bytes-to-number'

import { TRYTES } from '../src/constants'
import { generateNumber } from './utils'

describe("numberToBytes(bytes)", () => {

  it("should convert number to bytess", () => {
    const number = generateNumber()
    const bytes  = numberToBytes(number)

    expect(bytes).to.be.an.instanceOf(Buffer)
  })

  it("should be possible to convert bytess back to number", () => {
    const number  = generateNumber()
    const bytes   = numberToBytes(number)
    const number2 = bytesToNumber(bytes)

    expect(number2).to.equal(number)
  })
})
