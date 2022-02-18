import Vue from 'vue'
import Moment from 'moment'
import i18n from "./i18n";
import 'moment/locale/ru';
import 'moment/locale/uz-latn';

Vue.filter('filterOnlyDate', (val) => {
  return Moment(val).isValid() ? Moment(val).format('D') : ''
})

Vue.filter('filterOnlyMonth', (val) => {
  return Moment(val).isValid() ? Moment(val).locale(i18n.locale).format('MMMM') : ''
})

Vue.filter('filterDate', (val) => {
  return Moment(val).isValid() ? Moment(val).format('DD.MM.YYYY') : ''
})

Vue.filter('filterDateParse', (val) => {
  return Moment(val).isValid() ? Moment(val).format('YYYY,MM,DD') : ''
})

Vue.filter('filterMonthDate', (val) => {
  return Moment(val).isValid() ? Moment(val).format('MM.D.YYYY') : ''
})

Vue.filter('filterDateAndTime', (val) => {
  return Moment(val).isValid() ? Moment(val).format('D.MM.YYYY HH:mm') : ''
})

Vue.filter('filterDateAndTimeHour', (val) => {
  return Moment(val).isValid() ? Moment(val).format('D.MM.YYYY HH:mm') : ''
})

Vue.filter('filterTimeAndDate', (val) => {
  return Moment(val).isValid() ? Moment(val).format('HH:mm, D.MM.YYYY') : ''
})

Vue.filter('filterDateFMonth', (val) => {
  return Moment(val).isValid() ? Moment(val).format('D MMMM, YYYY') : ''
})

Vue.filter('filterTimeAndDateHMonth', (val) => {
  return Moment(val).isValid() ? Moment(val).format('D MMM YYYY, HH:mm') : ''
})

Vue.filter('filterTime', (val) => {
  return Moment(val).isValid() ? Moment(val).format('HH:mm') : ''
})

Vue.filter('filterNumberFormatThousands', (val) => {
  return String(val)
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})

Vue.filter('toFixedFormatThousands', (val) => {
  return Number(String(val).replace(/ /g, '')).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})

Vue.filter('filterMoneyGB', (val) => {
  return Number(val) ? (Number(val) / 100).toLocaleString('en-GB', { minimumFractionDigits: 2 }) : 0
})

Vue.filter('filterMoneyUS', (val) => {
  return Number(val) ? (Number(val) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 }) : 0
})

Vue.filter('filterMoneyRU', (val) => {
  return Number(val) ? (Number(val) / 100).toLocaleString('ru-RU', { minimumFractionDigits: 2 }) : 0
})
