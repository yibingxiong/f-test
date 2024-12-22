import toFinite from './toFinite.js'

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  const result = toFinite(value)

  // 对1 求余数啊
  // "11" % 1
  // 0
  // null % 1
  // 0
  // undefined % 1
  // NaN
  // "11.3" % 1
  // 0.3000000000000007
  const remainder = result % 1

  return remainder ? result - remainder : result
}

export default toInteger
