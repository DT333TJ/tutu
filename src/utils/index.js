
/**
 * @name 防抖
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} isImmediate
 * @description 当调用动作过n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间
 * @returns
 */
export function _debounce(func, wait, isImmediate) {
  var timeout
  return function () {
    var _this = this, _arguments = arguments
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


/**
 * @name 节流
 * @description 函数节流就是预定一个函数只有在大于等于执行周期时才执行，周期内调用不执行
 * @export
 * @param {*} func
 * @param {*} wait
 * @returns
 */
export function _throttle(func, wait) {
  var last = 0
  return function () {
    var now = +new Date()
    if (now - last > wait) {
      func.apply(this, arguments)
      last = now
    }
  }
}


/**
 * 获取当前用户的IP
 * @description 会有浏览器的要求,callback的使用，谷歌浏览器需开启设置
 * @export
 * @param {*} callback
 */
export function _getUserIP(callback) {
  var ip = ''
  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for Firefox and chrome
  var pc = new RTCPeerConnection({ iceServers: [] }), noop = function(){ };
  pc.createDataChannel('') //create a bogus data channel
  pc.createOffer(pc.setLocalDescription.bind(pc), noop) // create offer and set local description
  pc.onicecandidate = function (ice) {
    if (ice && ice.candidate && ice.candidate.candidate) {
      ip = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g.exec(ice.candidate.candidate)[1]
      pc.onicecandidate = noop
      callback(ip)
    }
  }
}