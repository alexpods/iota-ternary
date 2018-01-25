const Benchmark = require("benchmark")

const iotaLibTrits = require("iota.lib.js/lib/crypto/converter/converter").trits
const iotaLibValue = require("iota.lib.js/lib/crypto/converter/converter").value

const trytesToNumber1 = require("../dist/trytes-to-number/version-1").trytesToNumber
const trytesToNumber2 = require("../dist/trytes-to-number/version-2").trytesToNumber
const trytesToNumber3 = require("../dist/trytes-to-number/version-3").trytesToNumber
const trytesToNumber4 = require("../dist/trytes-to-number/version-4").trytesToNumber
const trytesToNumber5 = require("../dist/trytes-to-number/version-5").trytesToNumber

const suite = new Benchmark.Suite()

const TRYTES = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const TRYTES_SIZE  = 2750
const TRYTES_COUNT = 20

function generateTrytes(size) {
  const trytes = new Array(size)

  for (let i = 0; i < size; ++i) {
    trytes[i] = TRYTES[Math.floor(Math.random()*27)]
  }

  return trytes.join('')
}

const trytes = new Array(TRYTES_COUNT)

let i = 0

suite.on("start", () => {
  for (let j = 0; j < TRYTES_COUNT; ++j) {
    trytes[j] = generateTrytes(TRYTES_SIZE)
  }

  for (let j = 0; j < 10000; ++j) {
    iotaLibValue(iotaLibTrits(trytes[j % TRYTES_COUNT]))
    trytesToNumber1(trytes[j % TRYTES_COUNT])
    trytesToNumber2(trytes[j % TRYTES_COUNT])
    trytesToNumber3(trytes[j % TRYTES_COUNT])
    trytesToNumber4(trytes[j % TRYTES_COUNT])
    trytesToNumber5(trytes[j % TRYTES_COUNT])
  }
})

suite.on("cycle", () => {
  i = 0
})

suite.add("iota.lib.js: value(trits( val ))", () => {
  const trits = trytesToNumber1(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-number-1", () => {
  const trits = trytesToNumber1(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-number-2", () => {
  const trits = trytesToNumber2(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-number-3", () => {
  const trits = trytesToNumber3(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-number-4", () => {
  const trits = trytesToNumber4(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-number-5", () => {
  const trits = trytesToNumber5(trytes[++i % TRYTES_COUNT])
})

suite.on('complete', function () {
  console.log(this[0].toString())
  console.log(this[1].toString())
  console.log(this[2].toString())
  console.log(this[3].toString())
  console.log(this[4].toString())
  console.log(this[5].toString())

  console.log('Fastest is ' + this.filter('fastest').map('name'));
})


suite.on("error", (...args) => {
  console.log(args)
})


suite.run();