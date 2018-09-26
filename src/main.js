import Vue from 'vue'
import App from './App'
// 配置axios
import axios from 'axios'
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    console.log(config)
    wx.request({
      url: config.url,
      methods: config.method,
      data: config.params,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
axios.defaults.baseURL = 'https://www.zhengzhicheng.cn/'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
