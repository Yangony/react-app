function htmlFontSize() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var width = w > 720 ? 720 : w
  var fz = ~~(width * 100000 / 36) / 10000
  var html = document.getElementsByTagName('html')[0]
  html.style.cssText = 'font-size: ' + fz + 'px'
  var realfz = ~~(+window.getComputedStyle(html).fontSize.replace('px', '') * 10000) / 10000
  if (fz !== realfz) {
    html.style.cssText = 'font-size: ' + fz * (fz / realfz) + 'px'
  }
}
htmlFontSize()
window.onresize = function () { htmlFontSize() }

window.onload=function () {
  document.addEventListener('touchstart',function (event) {
    if(event.touches.length > 1){
        event.preventDefault();
    }
  })
  var lastTouchEnd=0;
  document.addEventListener('touchend',function (event) {
    var now=(new Date()).getTime();
    if(now - lastTouchEnd <= 300){
        event.preventDefault();
    }
    lastTouchEnd=now;
  },false)
}
