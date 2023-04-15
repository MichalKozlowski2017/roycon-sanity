<template>
  <div class="socials">
      <g-link class="nav__link" to="https://www.facebook.com/ROYCONspzoo/" target="_blank"><g-image v-in-viewport src="~/assets/img/icon_fb.png"/></g-link>
      <!-- <g-link class="nav__link" to="/oferta/"><g-image v-in-viewport src="~/assets/img/icon_insta.png"/></g-link> -->
      <g-link class="nav__link" to="https://www.linkedin.com/company/roycon-buduj-energooszcz%C4%99dnie" target="_blank"><g-image v-in-viewport src="~/assets/img/icon_linkedin.png"/></g-link>
  </div>
</template>


<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss">
    .socials {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        width: 33px;
        img {
            width: 33px;
            height: 33px;
        }
        a {
            width: 33px;
            height: 33px;
            margin: 10px;
        }
        @include mq($max-width: 768px) {
           -webkit-box-orient: horizontal;
           -webkit-box-direction: normal;
               -ms-flex-direction: row;
                   flex-direction: row;
           -webkit-transform: scale(0.7);
               -ms-transform: scale(0.7);
                   transform: scale(0.7);
       }
    }
</style>