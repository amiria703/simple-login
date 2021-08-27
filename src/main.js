import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueMq, {
    breakpoints: {
        sm: 426,
        md: 769,
        lg: Infinity,
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')
