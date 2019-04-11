export
/**
 *
 *
 * @param {*} number
 * @returns
 */
const changeNumber = (number) => {
  let num = parseInt(number)
  if (num == 1) {
    return '是'
  } else if (num == 0) {
    return '否'
  } else {
    alert('错误，换个方法')
  }
}

export /**
 *
 *
 * @param {*} arr
 * @param {*} target
 * @returns
 */
const getArrFromArr = (arr, target) => {
  let tempData = []
  for (let i = 0; i < arr.length; i++) {
    tempData.push(arr[i][target])
  }
  return tempData
}
