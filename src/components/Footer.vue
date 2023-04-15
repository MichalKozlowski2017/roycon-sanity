<template>
   <footer>
      <div class="copyright">© 2019 Firma Budowlana ROYCON sp. z o.o.</div>
      <div class="author">
          <p>Projekt graficzny:</p>
          <g-image v-in-viewport src="~/assets/img/ap.png"/>
      </div>
      <Socials />
   </footer>
</template>


<script>
import Socials from "../components/Socials";
export default {
    name: "Footer",
    components: {
        Socials
    }
}
</script>

<style lang="scss">
   footer {
       position: relative;
       padding: 60px 0;
       .copyright {
           font-family: 'Adobe Caslon Pro', serif;
            font-weight: normal;
            font-size: 14px;
       }
       .author {
           display: -webkit-box;
           display: -ms-flexbox;
           display: flex;
           font-size: 14px;
           -webkit-box-align: center;
               -ms-flex-align: center;
                   align-items: center;
           img {
               width: 28px;
               height: 28px;
               margin-left: 10px;
           }
       }
       display: -webkit-box;
       display: -ms-flexbox;
       display: flex;
       -webkit-box-pack: justify;
           -ms-flex-pack: justify;
               justify-content: space-between;
       -webkit-box-align: center;
           -ms-flex-align: center;
               align-items: center;
       width: 80%;
       margin: 200px auto 0 auto;
       .socials {
           left: -50px;
           top: -150px;
       }
       @include mq($max-width: 768px) {
           margin: 20px auto 0 auto;
           -webkit-box-orient: vertical;
           -webkit-box-direction: normal;
               -ms-flex-direction: column;
                   flex-direction: column;
           .socials {
            left: -30px;
            top: -50px;
        }
       }
   }
</style>