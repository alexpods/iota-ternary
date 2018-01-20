import { expect } from 'chai'
import { bytesToNumber } from '../src/bytes-to-number'
import { generateBytes } from './utils'

describe("bytesToNumber(bytes)", () => {
  let bytes: Buffer

  beforeEach(() => {
    bytes = generateBytes(5)
  })

  it("should convert trytes to a number", () => {
    const number = bytesToNumber(bytes)

    expect(number).to.be.a("number")
  })

  // it("should be possible to convert trits back to trytes", () => {
  //   const trytes = tritsToTrytes(trits)
  //   const trits2 = trytesToTrits(trytes)

  //   expect(trits2).to.deep.equal(trits)
  // })
})
