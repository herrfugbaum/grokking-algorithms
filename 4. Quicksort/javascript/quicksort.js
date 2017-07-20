function quicksort (arr) {
  if (arr.length < 2) return arr
  let pivot = arr[0]
  let less = arr.slice(1).filter(x => x <= pivot)
  let greater = arr.slice(1).filter(x => x > pivot)
  return quicksort(less).concat(pivot, quicksort(greater))
}

quicksort([10, 5, 2, 3])
