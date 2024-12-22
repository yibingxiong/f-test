/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

// 神奇的函数 compose(f, g, h) --- (...args) => f(g(h(...args)))
// reduce 为数组中的每一个元素依次执行回调函数，
// 不包括数组中被删除或从未被赋值的元素，接受四个参数：
// 初始值（或者上一次回调函数的返回值），
// 当前元素值，当前索引，调用 reduce 的数组。
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
