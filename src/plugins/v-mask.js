import Vue from 'vue'
import VueMask, { VueMaskFilter } from 'v-mask'

Vue.use(VueMask)
Vue.filter('VMask', VueMaskFilter)
