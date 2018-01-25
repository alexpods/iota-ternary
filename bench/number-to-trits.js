const Benchmark = require("benchmark")

const iotaLibTrits = require("iota.lib.js/lib/crypto/converter/converter").trits

const numberToTrits1 = require("../dist/number-to-trits/version-1").numberToTrits
const numberToTrits2 = require("../dist/number-to-trits/version-2").numberToTrits

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
    iotaLibTrits(numbers[i % NUMBERS_COUNT])
    numberToTrits1(numbers[i % NUMBERS_COUNT])
    numberToTrits2(numbers[i % NUMBERS_COUNT])
  }
})

suite.on("cycle", () => {
  i = 0
})


suite.add("iota.lib.js: trits()", () => {
  const trits = iotaLibTrits(numbers[++i % NUMBERS_COUNT])
})

suite.add("number-to-trits-1", () => {
  const trits = numberToTrits1(numbers[++i % NUMBERS_COUNT])
})

suite.add("number-to-trits-2", () => {
  const trits = numberToTrits2(numbers[++i % NUMBERS_COUNT])
})


suite.on('complete', function () {
  console.log(this[0].toString())
  console.log(this[1].toString())
  console.log(this[2].toString())

  console.log('Fastest is ' + this.filter('fastest').map('name'));
})


suite.on("error", (...args) => {
  console.log(args)
})


suite.run();