let u = navigator.userAgent
let ua = navigator.userAgent.toLowerCase()
// 网页被卷去的高度scrollTop
let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
// 网页高
let winHeight = window.innerHeight
// 网页宽
let winWidth = window.innerWidth
// 网页可见区域的宽度(body)
let pageWidth = document.body.clientWidth
// 网页可见区域高
let pageHeight = document.body.clientHeight
// 视口高度
let clientHeight = document.documentElement.clientHeight

const winInfos = {}

// 判断用手机是Android还是ios
if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
  winInfos['shebei'] = 1
} else if (u.indexOf('iPhone') > -1) {
  winInfos['shebei'] = 2
} else if (u.indexOf('Windows Phone') > -1) {
  winInfos['shebei'] = 4
} else {
  winInfos['shebei'] = 5
}

// 判断平台1、微信 2、 qq3、微博4、其他
if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  winInfos['software'] = 1
} else if (ua.match(/QQ/i) == 'qq') {
  winInfos['software'] = 2
} else if (ua.match(/WeiBo/i) == 'weibo') {
  winInfos['software'] = 3
} else {
  winInfos['software'] = 4
}

winInfos['scrollTop'] = scrollTop
winInfos['winHeight'] = winHeight
winInfos['winWidth'] = winWidth
winInfos['clientHeight'] = clientHeight
winInfos['pageWidth'] = pageWidth
winInfos['pageHeight'] = pageHeight

export default winInfos
