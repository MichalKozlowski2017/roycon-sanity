// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('intersection-observer')
import '~/assets/fonts.css'
import '~/assets/style.scss'
import DefaultLayout from '~/layouts/Default.vue'
import inViewportDirective from 'vue-in-viewport-directive'
import BlockContent from 'sanity-blocks-vue-component'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.directive('in-viewport', inViewportDirective)
  Vue.component('block-content', BlockContent);

  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js',
    body: true
  })

  head.script.push({
    src: 'https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.forEach%2CNodeList.prototype.forEach',
    body: true
  })

  head.meta.push({
    name: 'keywords',
    content: 'firma budowlana jelenia góra, firma budowlana Wałbrzych, firma budowlana legnica, generalny wykonawca jelenia góra, generalny wykonawca Wałbrzych, generalny wykonawca Legnica, wykonawca izodom 2000, hale stalowe jelenia góra, hale stalowe Wałbrzych, hale stalowe legnica, hale stalowe astron, domy zeroenergetyczne, budynek zeroenergetyczny'
  })

  head.meta.push({
    name: 'description',
    content: 'Jesteśmy przedsiębiorstwem budowlanym oferującym budowę obiektów deweloperskich i przemysłowych. Stosujemy rozwiązania energooszczędne sprawiając, że Państwa budynek ogranicza zużycie energii na ogrzewanie o blisko 80%. Działamy na terenie Jelenia Góra oraz Dolny Śląsk.'
  })


  

}
