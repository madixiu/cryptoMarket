
export function twoDigitTruncator(input) {
  input = input*100
  input = Math.trunc(input)
  return input/100
}