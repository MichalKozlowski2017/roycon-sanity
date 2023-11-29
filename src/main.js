// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('intersection-observer')
import '~/assets/fonts.css'
import '~/assets/style.scss'
import DefaultLayout from '~/layouts/Default.vue'
import inViewportDirective from 'vue-in-viewport-directive'
import BlockContent from 'sanity-blocks-vue-component'
import VueCarousel from 'vue-carousel/src/index';
import VueDisclosure from 'vue-disclosure'




export default function (Vue, { router, head, isClient, page }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.directive('in-viewport', inViewportDirective)
  Vue.component('block-content', BlockContent);
  Vue.use(VueDisclosure)

  if(isClient) {
    Vue.use(VueCarousel);

  }



  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js',
    body: true
  })

  head.script.push({
    src: 'https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.forEach%2CNodeList.prototype.forEach',
    body: true
  })

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=G-WGVB8CPG39',
    async: true
  });
  head.script.push({
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WGVB8CPG39');
      gtag('config', 'AW-11238080681');
    `
  });


  

}
