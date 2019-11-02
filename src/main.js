import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import Axios from 'axios'


// 配置公共URF
Axios.defaults.baseURL = 'http://127.0.0.1:5000'

// 配置axios
Vue.prototype.$axios = Axios


Vue.use(ElementUI);

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");