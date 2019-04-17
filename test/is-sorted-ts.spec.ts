import isSorted from '../is-sorted-ts'

describe('is-sorted-ts', () => {

  test(`return true for []`, () => {
    expect(isSorted([])).toBe(true)
  })

  test(`return true for [1]`, () => {
    expect(isSorted([1])).toBe(true)
  })

  test(`return true for [1, 5]`, () => {
    expect(isSorted([1, 5])).toBe(true)
  })

  test(`return true for [1, 2, 3, 4, 5]`, () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true)
  })

  test(`return true for [1, 1, 3, 4, 5]`, () => {
    expect(isSorted([1, 1, 3, 4, 5])).toBe(true)
  })

  test(`return true for [1, 1.5, 3, 4, 5]`, () => {
    expect(isSorted([1, 1.5, 3, 4, 5])).toBe(true)
  })

  test(`return true for [1, 2, 3, 4, 6]`, () => {
    expect(isSorted([1, 2, 3, 4, 6])).toBe(true)
  })

  test(`return true for [5, 4, 3, 1, 1] with comparator`, () => {
    expect(isSorted([5, 4, 3, 1, 1], (a, b) => b - a)).toBe(true)
  })

  test(`return true for [5, 4, 3, 2, 1] with comparator`, () => {
    expect(isSorted([5, 4, 3, 2, 1], (a, b) => b - a)).toBe(true)
  })

  test(`return false for [1, 5, 2, 3, 4]`, () => {
    expect(isSorted([1, 5, 2, 3, 4], (a, b) => b - a)).toBe(false)
  })

  test(`return false for [5, 4, 3, 1, 2] with comparator`, () => {
    expect(isSorted([5, 4, 3, 1, 2], (a, b) => b - a)).toBe(false)
  })

})
