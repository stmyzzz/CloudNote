import moment from 'moment'
/* 截取年月日 */
export const date = date =>{
  return  date.substring(0,10)
}

/* 时间差 */
export const datelater = date =>{
  let t11 = moment(date).utcOffset(16).format("YYYY-MM-DD HH:mm:ss");
  console.log('t11',t11);
  let t1 = moment(t11)
  let t2 = moment(moment().format("YYYY-MM-DD HH:mm:ss"))
  console.log('now',t2);
  let dura = t2.format('x') - t1.format('x')
  console.log('dura',dura);
  let tempTime = moment.duration(dura)
  console.log('tempTime',tempTime);
  if(tempTime.days() >=1){
    return tempTime.days() +'天'
  }else if(tempTime.hours() <=24 && tempTime.hours() >0){
    return tempTime.hours() +'时'
  }else if(tempTime.minutes() <=60 && tempTime.minutes()>=0){
    return tempTime.minutes() +'分'
  }else if(tempTime.minutes() == 0)
  return '刚刚'


}

