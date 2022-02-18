import Vue from 'vue'

Vue.directive('number', {
  bind (el, binding, vnode, oldVnode) {
    let elem = el

    if (binding.modifiers.find) {
      elem = el.querySelector('input')
    }

    const handler = function () {
      if (elem.value) {
        elem.value = elem.value.replace(/[^0-9]/g, '')
        elem.dispatchEvent(new Event('input'))
      }
    }

    elem.addEventListener('input', handler)
  }
})
