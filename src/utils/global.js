import {
  Button,
  Input,
  Col,
  Row,
  Message,
  Radio,
  Dialog,
  Popover,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 
'element-ui'

export default {
  install(Vue){
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Col)
    Vue.use(Row)
    Vue.use(Radio)
    Vue.use(Dialog)
    Vue.use(Popover).use(Dropdown).use(DropdownItem).use(DropdownMenu)
    Vue.prototype.$message = Message;
  }
}