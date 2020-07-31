import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import MainNavigationBar from './components/MainNavigationBar.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component("main-navigation-bar", MainNavigationBar);

const router = new VueRouter({
    routes,
    mode: 'history',
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
