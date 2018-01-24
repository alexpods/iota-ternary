import { expect } from 'chai'

import { tritsToBytes } from '../src/trits-to-bytes'
import { bytesToTrits } from '../src/bytes-to-trits'

import { generateTrits } from './utils'

describe("tritsToBytes(trits)", () => {

  it("should convert trits to bytes", () => {
    const trits = generateTrits(10)
    const bytes = tritsToBytes(trits)

    expect(bytes).to.be.an.instanceOf(Buffer)
    expect(bytes.byteLength).to.equal(Math.ceil(trits.length / 5))
  })

  it("should be possible to convert bytes back to trits", () => {
    const trits  = generateTrits(10)
    const bytes  = tritsToBytes(trits)
    const trits2 = bytesToTrits(bytes)

    expect(trits2).to.deep.equal(trits)
  })
})

