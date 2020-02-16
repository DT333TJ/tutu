
/**
 * @name 防抖
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} isImmediate
 * @returns
 */
export function _debounce(func, wait, isImmediate) {
  var timeout
  return function () {
    var _this = this,
        _arguments = arguments
    // 触发就清除定时器
    clearTimeout(timeout)
    // 立即执行
    if (isImmediate) {
      var isTrigger = !timeout
      isTrigger && func.apply(_this, _arguments) // timeout为null（即没有被执行过，或被重置）
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
    } else {
      timeout = setTimeout(function () {
        func.apply(_this, _arguments);
      }, wait)
    }
  }
}