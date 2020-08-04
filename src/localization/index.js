/* eslint-disable camelcase */
import en_us from './en'
import fa_ir from './fa'

const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
export { lang }
const direction = {
  en_us: 'ltr',
  fa: 'rtl'
}
function getDirection() {
  return direction[lang]
}
export { getDirection }
const fonts = {
  fa: 'IRANSans',
  en: 'Muli'
}
function getFont() {
  return fonts[lang]
}
export { getFont }
const translate = {
  en: en_us,
  fa: fa_ir
}
function getTranslate() {
  return translate[lang]
}
export { getTranslate }

function changeLanguage(newLang) {
  if (newLang === lang) {
    return
  }
  localStorage.setItem('lang', newLang)
  window.location.reload()
}
export { changeLanguage }
