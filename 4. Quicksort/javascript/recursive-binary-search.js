function binarySearch (arr, item) {
  let mid = Math.floor(arr.length / 2)
  let interimArr = arr
  if (arr[mid] > item) {
    interimArr = arr.slice(0, mid)
    return binarySearch(interimArr, item)
  } else if (arr[mid] < item) {
    interimArr = arr.slice(mid + 1, arr.length)
    return binarySearch(interimArr, item)
  } else if (arr[mid] === item) {
    return mid
  }
  return -1
}

binarySearch([1, 3, 5, 7, 9], 3)
