import { expect } from 'chai'

import { bytesToTrits } from "../src/bytes-to-trits"
import { tritsToBytes } from '../src/trits-to-bytes'

import { TRITS } from '../src/constants'
import { generateBytes } from './utils'

describe("bytesToTrits(bytes)", () => {

  it("should convert bytes to trits", () => {
    const bytes = generateBytes()
    const trits = bytesToTrits(bytes)

    expect(trits).to.be.a("array")
    expect(trits.length).to.equal(bytes.length * 5)


    for (let i = 0; i < trits.length; i++) {
      expect(trits[i]).to.be.oneOf(TRITS)

      if (i % 5 === 0) {
        const value = (
          (3**0) * trits[i+0]
          +
          (3**1) * trits[i+1]
          +
          (3**2) * trits[i+2]
          +
          (3**3) * trits[i+3]
          +
          (3**4) * trits[i+4]
        )

        expect(bytes.readInt8(i / 5)).to.equal(value)
      }
    }
  })

  it("should be possible to convert trits back to bytes", () => {
    const bytes  = generateBytes()
    const trits  = bytesToTrits(bytes)
    const bytes2 = tritsToBytes(trits)

    expect(bytes2.equals(bytes)).to.be.true
  })
})
