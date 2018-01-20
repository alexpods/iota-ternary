import { expect } from 'chai'

import { trytesToBytes } from '../src/trytes-to-bytes'
import { bytesToTrytes } from '../src/bytes-to-trytes'

import { BYTES_TO_TRITS } from '../src/constants'
import { generateTrytes } from './utils'

describe("trytesToBytes(trytes)", () => {

  it("should convert trytes to bytes", () => {
    const trytes = generateTrytes(10)
    const bytes  = trytesToBytes(trytes)

    expect(bytes).to.be.an.instanceOf(Buffer)
    expect(bytes.byteLength).to.equal(Math.ceil(trytes.length * 3/5))
  })

  it("should be possible to convert bytes back to trytes", () => {
    const trytes  = generateTrytes(10)
    const bytes   = trytesToBytes(trytes)
    const trytes2 = bytesToTrytes(bytes)

    expect(trytes2).to.deep.equal(trytes)
  })
})

