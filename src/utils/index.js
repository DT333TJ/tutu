
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


/**
 * 获取当前用户的IP
 * @description 会有浏览器的要求
 * @export
 * @param {*} callback
 */
export function _getUserIP(callback) {
  var ip = ''
  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for Firefox and chrome
  var pc = new RTCPeerConnection({ iceServers: [] }), noop = function () { };
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