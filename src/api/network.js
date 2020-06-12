import request from '@/utils/request'
const url = {
  supports: '/network/config/supports'
}
export default url
export function getSupports(parameter) {
  return request({
    url: url.supports,
    method: 'get',
    params: parameter
  })
}
