/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */
// 返回限制在 lower 和 upper 之间的值。

function clamp(number, lower, upper) {
  number = +number
  lower = +lower
  upper = +upper
  // +xx 可以将xx转成数字, 转不了的是NaN, 而NaN != NaN
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  if (number === number) {  // 证明number不是NaN
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
  }
  return number
}

export default clamp
