import Vue from 'vue'
import App from './App.vue'
import router from './router'

// -------------------------------------------------------------------fontawesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(fas, far, fab);

// Vue.component('v-fa', FontAwesomeIcon);
// ---------------------------------------------------------------------------

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
