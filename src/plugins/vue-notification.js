import Vue from 'vue'
import Notifications from 'vue-notification'

Vue.use(Notifications)

const notification = {
  error (text, title = 'Ошибка') {
    Vue.notify({
      group: 'simple',
      type: 'error',
      title: title,
      text: text
      // duration: -1,
    })
  },
  warn (text, title = 'Предупреждение') {
    Vue.notify({
      group: 'simple',
      type: 'warn',
      title: title,
      text: text
      // duration: -1,
    })
  },
  success (text, title = 'Успешно') {
    Vue.notify({
      group: 'simple',
      type: 'success',
      title: title,
      text: text
      // duration: -1,
    })
  }
}

Vue.prototype.$notification = notification

export default notification
