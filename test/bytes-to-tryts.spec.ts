import { expect } from 'chai'

import { bytesToTrytes } from '../src/bytes-to-trytes'
import { trytesToBytes } from '../src/trytes-to-bytes'

import { TRYTES } from '../src/constants'
import { generateBytes } from './utils'

describe("bytesToTryts(bytes)", () => {
  let bytes: Buffer

  beforeEach(() => {
    bytes = generateBytes(10)
  })

  it("should convert bytes to trytes", () => {
    const trytes = bytesToTrytes(bytes)

    expect(trytes).to.be.a("string")
    expect(trytes.length).to.equal(Math.ceil(bytes.length * 5/3))


    for (let i = 0; i < trytes.length; i++) {
      expect(trytes[i]).to.be.oneOf(TRYTES.split(''))
    }
  })

  it("should be possible to convert trytes back to bytes", () => {
    const trytes  = bytesToTrytes(bytes)
    const bytes2 = trytesToBytes(trytes)

    expect(bytes2.slice(0, bytes.length).equals(bytes)).to.be.true
  })
})
