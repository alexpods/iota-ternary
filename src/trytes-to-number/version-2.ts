const TRYTES_TO_NUMBERS = {
  "9": 0,
  "A": 1,
  "B": 2,
  "C": 3,
  "D": 4,
  "E": 5,
  "F": 6,
  "G": 7,
  "H": 8,
  "I": 9,
  "J": 10,
  "K": 11,
  "L": 12,
  "M": 13,
  "N": -13,
  "O": -12,
  "P": -11,
  "Q": -10,
  "R": -9,
  "S": -8,
  "T": -7,
  "U": -6,
  "V": -5,
  "W": -4,
  "X": -3,
  "Y": -2,
  "Z": -1
}


export function trytesToNumber(trytes: string): number {
  var i, result

  result = 0

  for (i = trytes.length - 1; i >= 0; --i) {
    result = result * 27 + TRYTES_TO_NUMBERS[trytes[i]]
  }

  return result
}
