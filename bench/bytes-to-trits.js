const Benchmark = require("benchmark")

const bytesToTrits1 = require("../dist/bytes-to-trits/version-1").bytesToTrits
const bytesToTrits2 = require("../dist/bytes-to-trits/version-2").bytesToTrits
const bytesToTrits3 = require("../dist/bytes-to-trits/version-3").bytesToTrits

const suite = new Benchmark.Suite()

const BUFFER_SIZE  = 1650
const BUFFER_COUNT = 20

function generateBytes(size) {
  const bytes = Buffer.alloc(size)

  for (let j = 0; j < size; ++j) {
    bytes.writeInt8(-121 + Math.floor(243*Math.random()), j)
  }

  return bytes
}

const buffers = new Array(BUFFER_COUNT)

let i = 0

suite.on("start", () => {
  for (let j = 0; j < BUFFER_COUNT; ++j) {
    buffers[j] = generateBytes(BUFFER_SIZE)
  }

  for (let j = 0; j < 10000; ++j) {
    bytesToTrits1(buffers[j % BUFFER_COUNT])
    bytesToTrits2(buffers[j % BUFFER_COUNT])
    bytesToTrits3(buffers[j % BUFFER_COUNT])
  }
})

suite.on("cycle", () => {
  i = 0
})

suite.add("bytes-to-trits-1", () => {
  const trits = bytesToTrits1(buffers[++i % BUFFER_COUNT])
})

suite.add("bytes-to-trits-2", () => {
  const trits = bytesToTrits2(buffers[++i % BUFFER_COUNT])
})

suite.add("bytes-to-trits-3", () => {
  const trits = bytesToTrits3(buffers[++i % BUFFER_COUNT])
})

suite.on('complete', function () {
  console.log(this[0].toString())
  console.log(this[1].toString())
  console.log(this[2].toString())

  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run();