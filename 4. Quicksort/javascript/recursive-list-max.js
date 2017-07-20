function max (arr) {
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1]
  const interimResult = max(arr.slice(1))
  return arr[0] > interimResult ? arr[0] : interimResult
}

max([1, 3, 2, 7, 9, 5, 11])
