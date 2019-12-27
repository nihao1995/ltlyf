import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

function addF (type = "ddddd") {
  let a = ["1", "2", "3", "4"];
  window.console.log(...a);
  window.console.log(type);
}
function dc(){
  return ["1", "3", "ww", "4", "5"];
}
addF();
window.console.log(...dc());

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
