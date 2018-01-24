const Benchmark = require("benchmark")

const iotaLibTrits = require("iota.lib.js/lib/crypto/converter/converter").trits

const trytesToTrits1 = require("../dist/trytes-to-trits/version-1").trytesToTrits
const trytesToTrits2 = require("../dist/trytes-to-trits/version-2").trytesToTrits
const trytesToTrits3 = require("../dist/trytes-to-trits/version-3").trytesToTrits
const trytesToTrits4 = require("../dist/trytes-to-trits/version-4").trytesToTrits
const trytesToTrits5 = require("../dist/trytes-to-trits/version-5").trytesToTrits

const suite = new Benchmark.Suite()

const TRYTES = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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
    iotaLibTrits(trytes[j % TRYTES_COUNT])
    trytesToTrits1(trytes[j % TRYTES_COUNT])
    trytesToTrits2(trytes[j % TRYTES_COUNT])
    trytesToTrits3(trytes[j % TRYTES_COUNT])
    trytesToTrits4(trytes[j % TRYTES_COUNT])
    trytesToTrits5(trytes[j % TRYTES_COUNT])
  }
})

suite.add("iota.lib.js", () => {
  const trits = iotaLibTrits(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-trits-1", () => {
  const trits = trytesToTrits1(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-trits-2", () => {
  const trits = trytesToTrits2(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-trits-3", () => {
  const trits = trytesToTrits3(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-trits-4", () => {
  const trits = trytesToTrits4(trytes[++i % TRYTES_COUNT])
})

suite.add("trytes-to-trits-5", () => {
  const trits = trytesToTrits5(trytes[++i % TRYTES_COUNT])
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