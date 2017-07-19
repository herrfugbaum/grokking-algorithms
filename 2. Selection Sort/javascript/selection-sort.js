function findSmallest (arr) {
  let smallest = arr[0]
  let smallestIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

function selectionSort (arr) {
  let newArr = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr)
    newArr.push(arr.splice(smallest, 1)[0])
  }
  return newArr
}

selectionSort([5, 3, 6, 2, 10])
