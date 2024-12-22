/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0
 *   this.y = 0
 * }
 *
 * function Circle() {
 *   Shape.call(this)
 * }
 *
 * Circle.prototype = create(Shape.prototype, {
 *   'constructor': Circle
 * })
 *
 * const circle = new Circle
 * circle instanceof Circle
 * // => true
 *
 * circle instanceof Shape
 * // => true
 */
// 创建一个继承 prototype 的对象。 如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。
function create(prototype, properties) {
  prototype = prototype === null ? null : Object(prototype)
  // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。 相同属性后边的覆盖前边的


  const result = Object.create(prototype)
  return properties == null ? result : Object.assign(result, properties)
}

export default create
