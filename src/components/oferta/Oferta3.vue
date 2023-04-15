<template>
    <section class="oferta3 section" id="oferta3">
        <div class="line-1-oferta3" v-in-viewport></div>
        <div class="section-content">
             <div class="section-content__left">
                <CategoryHeader :text="$static.allPages.edges[0].node.oferta.oferta_3.category" :customClass="'section-content__category'"></CategoryHeader>
                <Paragraph :text="$static.allPages.edges[0].node.oferta.oferta_3.text" :customClass="'section-content__text'"></Paragraph>
            </div>
            <div class="section-content__right">
                <div class="section-content-image">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.oferta.oferta_3.image_1)" :alt="$static.allPages.edges[0].node.oferta.oferta_3.category" />
                </div>  
                <div class="section-content-image-2">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.oferta.oferta_3.image_2)" :alt="$static.allPages.edges[0].node.oferta.oferta_3.category" />
                </div>  
                
                
            </div>
        </div>
        
  
        <!-- <PrimaryButton :text="'Dowiedz się więcej'" :link="'/technologia/'"></PrimaryButton> -->
    </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        oferta  {
        	oferta_3 {
            text
            category
            image_1
            image_2
          }
        }
      }
    }
  }
}
</static-query>

<script>
import PrimaryButton from "~/components/PrimaryButton"
import CategoryHeader from "~/components/CategoryHeader"
import TitleHeader from "~/components/TitleHeader"
import Paragraph from "~/components/Paragraph"
export default {
    name: "Oferta3",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    }
}
</script>

<style lang="scss">
.line-1-oferta3 {
  position: absolute;
  width: 0;
  height: 2px;
  top: 0;
  left: 10%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
       -o-transition-delay: 3s;
          transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 1400px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
.line-1-oferta3.in-viewport {
  width: 100px;
}
.oferta3 {
    margin-top: 100px;
    @include mq($max-width: 600px) {
        margin-top: 20px;
    }
    .section-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        @include mq($max-width: 768px) {
            display: block;
        }
        
        &__left {
            width: 40%;
            padding-top: 100px;
            margin-left: calc(17.5% / 2);
            .category-header {
                margin-bottom: 100px;
            }
            @include mq($max-width: 992px) {
                padding-top: 40px;
            }
            @include mq($max-width: 768px) {
                width: 90%;
                margin-left: 30px;
                .category-header {
                    margin-bottom: 30px;
                }
            }
        }
        &__right {
            width: 60%;
            position: relative;
            .section-content-image {
                width: 90%;
                float: right;
                z-index: 1;
                position: relative;
                img {
                    width: 100%;
                }
                &::before {
                    content: '';
                    position: absolute;
                    width: 60%;
                    height: 50%;
                    background-color: #eee;
                    bottom: -50px;
                    left: -50px;
                    z-index: -1;
                }
            }
            .section-content-image-2 {
                position: absolute;
                bottom: -200px;
                right: 0;
                img {
                    width: 200px;
                }
                @include mq($max-width: 992px) {
                    display: none;
                }
            }
        }
    }
}
  
</style>