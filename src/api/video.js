import {request} from '@/utils'

/* 添加想法 */
export const data = idea_text =>{
  request.post('/video/upload',data)
}