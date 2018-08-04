import qs from 'qs'
import request from '@/utils/request'

export function contractGet(type, id) {
  const query = {}
  query.type = type
  query.id = id
  return request({
    method: 'get',
    url: '/contracts',
    params: query
  })
}

export function contractAdd(contract) {
  const data = contract
  return request({
    method: 'post',
    url: '/contracts',
    data: qs.stringify(data)
  })
}

export function contractFinish() {

}

export function contractDetail() {

}

export function contractStatu() {

}
