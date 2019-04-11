const globals = {}

/**
 *处理权限action的
 *
 * @param {*} id
 * @returns boolean
 */
const dealPermission = (id) => {
  if (sessionStorage.getItem('permission')) {
    return JSON.parse(sessionStorage.getItem('permission')).includes(parseInt(id))
  } else {
    return false
  }
}
// console
const myconsole = (arrMSG) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...arrMSG)
  }
}
/**
 * 深拷贝
 *
 * @param {*} data
 * @returns
 */
const deepClone = (data) => {
  let newObj = JSON.parse(JSON.stringify(data))
  return newObj
}

let judgeType = (obj) => {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}
/**
 *
 * 特殊需要的深拷贝
 * @param {*} data
 * @returns
 */
const deepClone2 = (data) => {
  const type = judgeType(data)
  let obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    // 不再具有下一层次
    return data
  }
  if (type === 'array') {
    // eslint-disable-next-line
    for (let i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone2(data[i]))
    }
  } else if (type === 'object') {
    // 对原型上的方法也拷贝了....
    // eslint-disable-next-line
    for (const key in data) {
      obj[key] = deepClone2(data[key])
    }
  }
  return obj
}

/**
 *提交表单的时候防止误点，短时间内多次提交
 *
 * @returns true: 允许提交；false不允许提交
 */
const checkSubmit = () => {
  let interval = 1000 // 单位毫秒
  let thisTime = new Date().getTime()
  let lastTime = sessionStorage.getItem('lastTime')
  if (!lastTime) {
    sessionStorage.setItem('lastTime', new Date().getTime())
    return true
  } else {
    if (thisTime - parseInt(lastTime) <= interval) {
      sessionStorage.setItem('lastTime', new Date().getTime())
      alert('请不要重复提交！')
      return false
    }
    sessionStorage.setItem('lastTime', new Date().getTime())
    return true
  }
}

/**
 *
 * 该函数的给localstorage加了过期时间，优点是存储什么格式，取出来就是什么格式。
 * @param {*} key
 * @param {*} value
 * @param {*} time: 过期时间，以小时为单位
 */
const setLocal = (key, value, time) => {
  if (!time) {
    typeof value === 'string'
      ? localStorage.setItem(key, JSON.stringify({
        isString: true,
        value: value
      }))
      : localStorage.setItem(key, JSON.stringify({
        isString: false,
        value: JSON.stringify(value)
      }))
  } else {
    typeof value === 'string'
      ? localStorage.setItem(key, JSON.stringify({
        time: new Date().getTime() + time * 1000 * 60 * 60,
        isString: true,
        value: value
      }))
      : localStorage.setItem(key, JSON.stringify({
        time: new Date().getTime() + time * 1000 * 60 * 60,
        isString: false,
        value: JSON.stringify(value)
      }))
  }
}
const getLocal = (key) => {
  if (!localStorage.getItem(key)) {
    return null
  }
  let data = JSON.parse(localStorage.getItem(key))
  data.value = data.isString ? data.value : JSON.parse(data.value)
  if (data.time) {
    // 判断是否过期
    if (Number(data.time) < new Date().getTime()) {
      localStorage.removeItem(key)
      return null
    }
    return data.value

  }
}
// 测试上面两个函数
// setLocal('b', 3, 2000 / 1000 / 60 / 60)
// console.log(getLocal('b'))
// setTimeout(() => {
//   console.log(getLocal('b'))
// }, 1000);
// setTimeout(() => {
//   console.log(getLocal('b'))
// }, 5000);

globals.dealPermission = dealPermission
globals.c = myconsole
globals.deepClone = deepClone
globals.deepClone2 = deepClone2
globals.checkSubmit = checkSubmit
globals.setLocal = setLocal
globals.getLocal = getLocal
export default globals
