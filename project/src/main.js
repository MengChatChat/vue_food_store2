//入口文件
import Vue from 'vue'
import App from './App'
import Axios from 'axios'//请求数据类似ajax
import router from './router'//引入路由
import reset from './style/reset.less'//引入重置样式，js不区分文件格式，打包再分类

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.$axios=Axios;//将axios挂载到Vue的原型链，组件也可以继承,$axios
//Axios请求拦截器
Axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  components: { App },
  template: '<App/>'
})
