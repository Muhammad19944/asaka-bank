export function setVH () {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', setVH)

export function debounceEvent (callback, time = 250, interval) {
  return (...args) => {
    clearTimeout(interval)
    interval = setTimeout(() => callback(...args), time)
  }
}

export function appTab (tabHeaderItems, tabContentItems) {
  tabHeaderItems.forEach((item, index, array) => {
    item.addEventListener('click', function (e) {
      array.forEach((item) => item.classList.remove('active'))
      tabContentItems.forEach((item) => item.classList.remove('active'))

      this.classList.add('active')
      tabContentItems[index].classList.add('active')
    })
  })
}

export function addClass (items) {
  items.forEach((item) => {
    item.addEventListener('click', function () {
      items.forEach((item) => item.classList.remove('active'))
      this.classList.add('active')
    })
  })
}

export function bolish (number) {
  return Math.floor(number / 100)
}
export function kopaytirish (number) {
  return Math.floor(number * 100)
}
