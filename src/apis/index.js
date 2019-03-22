import axios from '@/axios/axios.request.js'

export const getCityList = (params) => {
  return axios.request({
    url: 'api/dict/city',
    params: params,
    method: 'get'
  })
}
