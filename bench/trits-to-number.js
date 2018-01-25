const Benchmark = require("benchmark")

const iotaLibValue = require("iota.lib.js/lib/crypto/converter/converter").value

const tritsToNumber1 = require("../dist/trits-to-number/version-1").tritsToNumber

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
    iotaLibValue(trits[j % TIRTS_COUNT])
    tritsToNumber1(trits[j % TIRTS_COUNT])
  }
})

suite.on("cycle", () => {
  i = 0
})

suite.add("iota.lib.js: value()", () => {
  const bytes = iotaLibValue(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-bytes-1", () => {
  const bytes = tritsToNumber1(trits[++i % TIRTS_COUNT])
})

suite.on('complete', function () {
  console.log(this[0].toString())
  console.log(this[1].toString())

  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run();