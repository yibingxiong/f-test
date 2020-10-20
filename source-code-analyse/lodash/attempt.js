import isError from './isError.js'

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * const elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */

 // 尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func。

function attempt(func, ...args) {
  try {
    return func(...args)
  } catch (e) {
    return isError(e) ? e : new Error(e)
  }
}

export default attempt
