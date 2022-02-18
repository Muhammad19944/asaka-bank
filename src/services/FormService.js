import Vue from 'vue'

export default class FormService {
  constructor (data) {
    this.originalData = data
    this.setData(data)
  }

  setData (data) {
    const copyData = JSON.parse(JSON.stringify(data))
    for (const property in copyData) {
      Vue.set(this, property, copyData[property])
    }

    /**
         * Use for Vue 3:
         * Object.assign(this, JSON.parse(JSON.stringify(data)));
         */
  }

  getData (all = false) {
    const newData = {}

    const data = all ? this : this.originalData
    for (const property in data) {
      newData[property] = this[property]
    }

    return JSON.parse(JSON.stringify(newData))
  }

  reset () {
    const data = this.originalData
    Object.keys(this).forEach((x) => delete this[x])
    this.originalData = data
    this.setData(data)
  }
}
