import { expect } from "chai"

import { trytesToNumber } from "../src/trytes-to-number"
import { numberToTrytes } from "../src/number-to-trytes"

import { generateTrytes, TRYTES_TO_NUMBERS } from "./utils"

describe("trytesToNumber(trytes)", () => {

  it("should convert trytes to a number", () => {
    const trytes = generateTrytes(5)
    const number = trytesToNumber(trytes)

    expect(number).to.be.a("number")
    expect(number).to.equal(trytes.split("").reduce((acc, val, i) => acc + TRYTES_TO_NUMBERS[val] * (27**i), 0))
  })

  it("should be possible to convert number back to trytes", () => {
    const trytes  = generateTrytes(5)
    const number  = trytesToNumber(trytes)
    const trytes2 = numberToTrytes(number)

    expect(trytes2).to.deep.equal(trytes)
  })
})
