import {request} from '@/utils'

/* 热门经典 */
export const hotcity = () =>{
  request.axios.get('/api/hotcity')
}