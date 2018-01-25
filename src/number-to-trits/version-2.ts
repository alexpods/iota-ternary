export function numberToTrits(number: number): number[] {
  if (number < 0) {
    return convertNegativeValue(-number)
  } else {
    return convertPositiveValue(number)
  }
}


function convertNegativeValue(v: number): number[] {
  const trits = []

  while (v) {
    var r = v % 3
    v = Math.floor(v / 3)

    if (r > 1) {
      trits.push(1)
      v++
    } else {
      trits.push(r && -r)
    }

  }

  return trits
}

function convertPositiveValue(v: number): number[] {
  const trits = []

  while (v) {
    var r = v % 3
    v = Math.floor(v / 3)

    if (r > 1) {
      trits.push(-1)
      v++
    } else {
      trits.push(r)
    }

  }

  return trits
}