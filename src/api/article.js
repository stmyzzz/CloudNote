import {request} from '../utils'
export const article = () =>request.get('/api/article/articleList')