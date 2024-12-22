import map from './map.js'

/**
 * Creates a function that iterates over `pairs` and invokes the corresponding
 * function of the first predicate to return truthy. The predicate-function
 * pairs are invoked with the `this` binding and arguments of the created
 * function.
 *
 * @since 4.0.0
 * @category Util
 * @param {Array} pairs The predicate-function pairs.
 * @returns {Function} Returns the new composite function.
 * @example
 *
 * const func = cond([
 *   [matches({ 'a': 1 }),         () => 'matches A'],
 *   [conforms({ 'b': isNumber }), () => 'matches B'],
 *   [() => true,                  () => 'no match']
 * ])
 *
 * func({ 'a': 1, 'b': 2 })
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 })
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' })
 * // => 'no match'
 */
// 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。
// 参数是一个二维数组, 第一列是一个函数, 第二个也是一个函数,
// 返回一个函数
// 该函数将 第一个第一列调用给定参数返回true的 对应的第二列调用的结果返回
function cond(pairs) {
  const length = pairs == null ? 0 : pairs.length

  pairs = !length ? [] : map(pairs, (pair) => {
    if (typeof pair[1] != 'function') {
      throw new TypeError('Expected a function')
    }
    return [pair[0], pair[1]]
  })

  return (...args) => {
    for (const pair of pairs) {
      if (pair[0].apply(this, args)) {
        return pair[1].apply(this, args)
      }
    }
  }
}

export default cond
