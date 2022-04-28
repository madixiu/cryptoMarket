
export function twoDigitTruncator(input) {
  input = input*100
  input = Math.trunc(input)
  return input/100
}

export function priceOptimizer(input) {
  let number
  if (input > 1000 )
   number = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  else number = input
  return "$"+ number
}