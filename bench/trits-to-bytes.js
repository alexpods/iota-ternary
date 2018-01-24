const Benchmark = require("benchmark")

const tritsToBytes1 = require("../dist/trits-to-bytes/version-1").tritsToBytes
const tritsToBytes2 = require("../dist/trits-to-bytes/version-2").tritsToBytes

const suite = new Benchmark.Suite()

const TRITS = [-1, 0, 1]
const TRITS_SIZE  = 8250
const TIRTS_COUNT = 20

function generateTrits(count = 273) {
  const trits = new Array(count)

  for (let i = 0; i < count; ++i) {
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
    tritsToBytes1(trits[j % TIRTS_COUNT])
    tritsToBytes2(trits[j % TIRTS_COUNT])
  }
})

suite.add("trits-to-bytes-1", () => {
  const bytes = tritsToBytes1(trits[++i % TIRTS_COUNT])
})

suite.add("trits-to-bytes-2", () => {
  const bytes = tritsToBytes2(trits[++i % TIRTS_COUNT])
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