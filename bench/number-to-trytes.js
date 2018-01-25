const Benchmark = require("benchmark")

const iotaLibTrits  = require("iota.lib.js/lib/crypto/converter/converter").trits
const iotaLibTrytes = require("iota.lib.js/lib/crypto/converter/converter").trytes

const numberToTrytes1 = require("../dist/number-to-trytes/version-1").numberToTrytes

const suite = new Benchmark.Suite()

const MAX_NUMBER    = Number.MAX_SAFE_INTEGER
const NUMBERS_COUNT = 100

function generateNumber(maxNumber) {
  return (Math.random() < 0.5 ? -1 : +1) * Math.floor(Math.random() * (maxNumber + 1))
}

const numbers = new Array(NUMBERS_COUNT)

let i = 0

suite.on("start", () => {
  for (i = 0; i < NUMBERS_COUNT; ++i) {
    numbers[i] = generateNumber(MAX_NUMBER)
  }

  for (i = 0; i < 10000; ++i) {
    iotaLibTrytes(iotaLibTrits(numbers[i % NUMBERS_COUNT]))
    numberToTrytes1(numbers[i % NUMBERS_COUNT])
  }
})

suite.on("cycle", () => {
  i = 0
})

suite.add("iota.lib.js trytes(trits(number))", () => {
  const trits = iotaLibTrytes(iotaLibTrits(numbers[++i % NUMBERS_COUNT]))
})

suite.add("number-to-trytes-1", () => {
  const trits = numberToTrytes1(numbers[++i % NUMBERS_COUNT])
})

suite.on('complete', function () {
  console.log(this[0].toString())
  console.log(this[1].toString())

  console.log('Fastest is ' + this.filter('fastest').map('name'));
})


suite.on("error", (...args) => {
  console.log(args)
})


suite.run();