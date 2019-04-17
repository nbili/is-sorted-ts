function defaultComparator(a: number, b: number): number {
  return a - b
}

function checksort(array: number[], comparator?: (a: number, b: number) => number): boolean {
  if (!Array.isArray(array)) throw new TypeError('Expected Array, got ' + (typeof array))
  comparator = comparator || defaultComparator

  for (var i = 1, length = array.length; i < length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}

export default checksort
