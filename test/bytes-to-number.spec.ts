import { expect } from 'chai'

import { bytesToNumber } from '../src/bytes-to-number'
import { numberToBytes } from '../src/number-to-bytes'

import { generateBytes } from './utils'

describe("bytesToNumber(bytes)", () => {

  it("should convert trytes to a number", () => {
    const bytes  = generateBytes(5)
    const number = bytesToNumber(bytes)

    expect(number).to.be.a("number")
  })

  it("should be possible to convert number back to bytes", () => {
    const bytes  = generateBytes(5)
    const number = bytesToNumber(bytes)
    const bytes2 = numberToBytes(number)

    expect(bytes2.slice(0, bytes.length).equals(bytes)).to.be.true
  })
})
