import request from '@/utils/request'
const url = {
  supports: '/network/config/supports',
  config: '/network/config/_query/no-paging'
}
export default url
export function getSupports (parameter) {
  return request({
    url: url.supports,
    method: 'get',
    params: parameter
  })
}
export function getConfig (parameter) {
  return request({
    url: url.config,
    method: 'get',
    params: parameter
  })
}
