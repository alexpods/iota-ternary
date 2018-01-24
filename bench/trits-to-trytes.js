const Benchmark = require("benchmark")

const iotaLibTrytes = require("iota.lib.js/lib/crypto/converter/converter").trytes

const tritsToTrytes1 = require("../dist/trits-to-trytes/version-1").tritsToTrytes
const tritsToTrytes2 = require("../dist/trits-to-trytes/version-2").tritsToTrytes
const tritsToTrytes3 = require("../dist/trits-to-trytes/version-3").tritsToTrytes
const tritsToTrytes4 = require("../dist/trits-to-trytes/version-4").tritsToTrytes
const tritsToTrytes5 = require("../dist/trits-to-trytes/version-5").tritsToTrytes
const tritsToTrytes6 = require("../dist/trits-to-trytes/version-6").tritsToTrytes

const suite = new Benchmark.Suite()

const TRITS = [-1, 0, 1]
const TRITS_SIZE  = 8250
const TIRTS_COUNT = 20

function generateTrits(size) {
  const trits = new Array(size)

  for (let i = 0; i < size; ++i) {
    trits[i] = TRITS[Math.floor(Math.random()*3)]
  }

  return trits
}

const trits = new Array(TIRTS_COUNT)

let i = 0

suite.on("start", () => {
  for (let j = 0; j < TIRTS_COUNT; ++j) {
    trits[j] = generateTrits(TRITS_SIZE)
  }

  for (let j = 0; j < 10000; ++j) {
    iotaLibTrytes(trits[j % TIRTS_COUNT])
    tritsToTrytes1(trits[j % TIRTS_COUNT])
    tritsToTrytes2(trits[j % TIRTS_COUNT])
    tritsToTrytes3(trits[j % TIRTS_COUNT])
    tritsToTrytes4(trits[j % TIRTS_COUNT])
    tritsToTrytes5(trits[j % TIRTS_COUNT])
    tritsToTrytes6(trits[j % TIRTS_COUNT])
  }
})

suite.add("iota.lib.js: trytes()", () => {
  const trytes = iotaLibTrytes(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-trytes-1", () => {
  const trytes = tritsToTrytes1(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-trytes-2", () => {
  const trytes = tritsToTrytes2(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-trytes-3", () => {
  const trytes = tritsToTrytes3(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-trytes-4", () => {
  const trytes = tritsToTrytes4(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-trytes-5", () => {
  const trytes = tritsToTrytes5(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-trytes-6", () => {
  const trytes = tritsToTrytes6(trits[++i % TIRTS_COUNT])
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