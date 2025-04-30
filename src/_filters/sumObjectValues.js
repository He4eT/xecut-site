/**
 * Transform {a: 1, b: 2, c: 'skip'} to 3
 *
 * @param {Record<string, unknown>} obj
 * @returns {number}
 */
export const sumObjectValues = (obj) => {
  return Object.values(obj)
    .filter((x) => typeof x === 'number')
    .reduce((sum, x) => sum + x, 0)
}
