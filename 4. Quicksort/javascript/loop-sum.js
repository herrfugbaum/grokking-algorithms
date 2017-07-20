function sum (arr) {
  let total = 0
  for (let i = 0; i <= arr.length; i++) {
    total += i
  }
  return total
}

sum([1, 2, 3, 4])
