import { expect } from 'chai'

import { tritsToBytes } from '../src/trits-to-bytes'
import { bytesToTrits } from '../src/bytes-to-trits'

import { BYTES_TO_TRITS } from '../src/constants'
import { generateTrits } from './utils'

describe("tritsToBytes(trits)", () => {

  it("should convert trits to bytes", () => {
    const trits = generateTrits(10)
    const bytes = tritsToBytes(trits)

    expect(bytes).to.be.an.instanceOf(Buffer)
    expect(bytes.byteLength).to.equal(Math.ceil(trits.length / 5))

    for (let i = 0; i < bytes.byteLength; ++i) {
      expect(BYTES_TO_TRITS[bytes.readInt8(i)]).to.deep.equal(trits.slice(i*5, (i+1)*5))
    }
  })

  it("should be possible to convert bytes back to trits", () => {
    const trits  = generateTrits(10)
    const bytes  = tritsToBytes(trits)
    const trits2 = bytesToTrits(bytes)

    expect(trits2).to.deep.equal(trits)
  })
})

