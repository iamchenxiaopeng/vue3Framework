import { getCookie } from '@/common/js/mytool'
// 防止缓存(直接import一个对象，会缓存，所以用函数的方式重新取值)
export const setLoginInfo = () => {
  return {
    access: getCookie('access') ? JSON.parse(getCookie('access')) : '',
    name: getCookie('userid'),
    user_id: 998
  }
}
