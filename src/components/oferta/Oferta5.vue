<template>
    <section class="oferta5 section" id="oferta5">
        <div class="line-1-oferta5" v-in-viewport></div>
        <div class="line-2-oferta5" v-in-viewport></div>
        <div class="line-3-oferta5" v-in-viewport></div>
        <div class="section-content oferta5-1">
             <div class="oferta5-1__left">
                <CategoryHeader :text="$static.allPages.edges[0].node.oferta.oferta_5.category" :customClass="'section-content__category'"></CategoryHeader>
                <Paragraph :text="$static.allPages.edges[0].node.oferta.oferta_5.text_1" :customClass="'section-content__text'"></Paragraph>
                
            </div>
            <div class="oferta5-1__right">
                <div class="section-content-image">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.oferta.oferta_5.image_1)" :alt="$static.allPages.edges[0].node.oferta.oferta_5.category" />
                </div>  
            </div>
        </div>
        <div class="section-content oferta5-2">
            <div class="oferta5-2__left">
                <div class="section-content-image">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.oferta.oferta_5.image_2)" :alt="$static.allPages.edges[0].node.oferta.oferta_5.category" />
                </div>
                <Paragraph :text="$static.allPages.edges[0].node.oferta.oferta_5.text_2" :customClass="'section-content__text'"></Paragraph>
                <PrimaryButton :text="$static.allPages.edges[0].node.oferta.oferta_5.button.text" :link="$static.allPages.edges[0].node.oferta.oferta_5.button.link"></PrimaryButton>
            </div>
            <div class="oferta5-2__right">
                  <div class="section-content-image">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.oferta.oferta_5.image_3)" :alt="$static.allPages.edges[0].node.oferta.oferta_5.category" />
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
        	oferta_5 {
            category
            text_1,
            text_2
            image_1
            image_2
            image_3
            button {
                text
                link
            }
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
    name: "Oferta5",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    }
}
</script>

<style lang="scss">
.line-1-oferta5 {
  position: absolute;
  width: 2px;
  height: 0;
  top: 20%;
  left:5%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
       -o-transition-delay: 3s;
          transition-delay: 3s;
  -webkit-transition: height 3s;
  -o-transition: height 3s;
  transition: height 3s;
  z-index: 9999;
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    width: 2px;
    height: 50%;
    background-color: $accent-purple;
  }
  @include mq($max-width: 1300px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
.line-1-oferta5.in-viewport {
  height: 100px;
}

.line-2-oferta5 {
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 40%;
  left: 55%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
       -o-transition-delay: 3s;
          transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 992px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
.line-2-oferta5.in-viewport {
  width: 100px;
}

.line-3-oferta5 {
  position: absolute;
  width: 0;
  height: 2px;
  top: 0;
  right: 10%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
       -o-transition-delay: 3s;
          transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 992px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
.line-3-oferta5.in-viewport {
  width: 100px;
}




.oferta5 {
    margin-top: 100px;
    margin-bottom: 300px;
    @include mq($max-width: 600px) {
        margin-top: 20px;
        margin-bottom: 50px;
    }
}
.oferta5-1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    @include mq($max-width: 768px) {
        display: block;
    }
    
    &__left {
        width: 50%;
        .category-header {
            margin-left: 27.5%;
        }
        .paragraph {
            padding-top: 100px;
            margin-left: 27.5%;
            max-width: 60%;
        }
        @include mq($max-width: 1650px) {
            .category-header {
                margin-left: 27.5%;
            }
            .paragraph {
                padding-top: 50px;
                margin-left: 27.5%;
            }
        }
        @include mq($max-width: 992px) {
            .category-header {
                margin-left: 27.5%;
            }
            .paragraph {
                padding-top: 0px;
                margin-left: 27.5%;
            }
        }
        @include mq($max-width: 768px) {
            width: 100%;
            .category-header {
                margin-left: 30px;
            }
            .paragraph {
                padding-top: 0px;
                margin-left: 30px;
                padding-right: 30px;
                max-width: 100%;
            }
        }
    }
    &__right {
        width: 50%;
        position: relative;
        .section-content-image {
            width: 90%;
            height: 100%;
            position: relative;
            float: right;
            img {
                width: 100%;
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                        transform: translateY(-50%);
            }
            
        }
        @include mq($max-width: 768px) {
            width: 100%;
            .section-content-image {
                width: 100%;
                height: 100%;
                position: relative;
                float: none;

                img {
                    width: 100%;
                    position: relative;
                    top: 0;
                    -webkit-transform: translateY(0);
                        -ms-transform: translateY(0);
                            transform: translateY(0);
                }
                
            }
        }
    }
}
.oferta5-2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 200px;
    @include mq($max-width: 768px) {
        display: block;
        margin-top: 50px;
    }
    &__left {
        width: 60%;
        .section-content-image {
            position: absolute;
            width: 23%;
            img {
                width: 100%;
            }
        }
        .paragraph {
            &:nth-child(2) {
                margin-left: 47%;
                max-width: 45%;
            }
            &:nth-child(3) {
                margin-top: 100px;
                margin-left: 40%;
                max-width: 35%;
            }
        }
        .primary-button {
            margin-left: 47%;
            
        }
        @include mq($max-width: 768px) {
            width: 100%;
            margin-bottom: 30px;

            .section-content-image {
                display: none;
            }
            .paragraph {
                &:nth-child(2) {
                    margin-left: 30px;
                    max-width: 100%;
                }
                &:nth-child(3) {
                    margin-top: 0;
                    margin-left: 30px;
                    max-width: 100%;
                }
            }
            .primary-button {
                margin-left: 30px;


            }
        }
    }
    &__right {
        width: 40%;
        .section-content-image {
            width: 100%;
            height: 100%;
            position: relative;
            float: right;
            img {
                width: 70%;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%,-50%);
                    -ms-transform: translate(-50%,-50%);
                        transform: translate(-50%,-50%);
            }
        }
        @include mq($max-width: 768px) {
            width: 100%;
            .section-content-image {
                width: 100%;
                height: 100%;
                position: relative;
                float: none;
                img {
                    width: 100%;
                    position: relative;
                    top: 0;
                    left: 0;
                    -webkit-transform: translate(0);
                        -ms-transform: translate(0);
                            transform: translate(0);
                }
            }
        }
    }
}

  
</style>