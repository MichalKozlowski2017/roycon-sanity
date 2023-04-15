<template>
    <section class="oferta2 section" id="oferta2">
        <div class="line-1-oferta2" v-in-viewport></div>
        <div class="line-2-oferta2" v-in-viewport></div>
        <div class="section-content">
             <div class="section-content__left">
                <g-image v-in-viewport src="~/assets/img/oferta_3.png"/>
            </div>
            <div class="section-content__right">
                <CategoryHeader :text="$static.allPages.edges[0].node.oferta.oferta_2.category" :customClass="'section-content__category'"></CategoryHeader>
                <Paragraph :text="ofertaText1" :customClass="'section-content__text'"></Paragraph>
                <PrimaryButton :text="$static.allPages.edges[0].node.oferta.oferta_2.button.text" :link="$static.allPages.edges[0].node.oferta.oferta_2.button.link" :blank="true"></PrimaryButton>
            </div>
        </div>
       <!-- <Paragraph :text="ofertaText2" :customClass="'oferta2__lastparagraph'"></Paragraph> -->
        
  
        <!-- <PrimaryButton :text="'Dowiedz się więcej'" :link="'/technologia/'"></PrimaryButton> -->
    </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        oferta  {
        	oferta_2 {
            text
            category
            image
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
    name: "Oferta2",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    },
    data() {
        return {
            ofertaText1: `<p>Wykonujemy stalowe hale w Systemie Astron, które są projektowane z myślą o biznesie klienta. Każda branża charakteryzuje się innymi wymaganiami, dlatego potrzebuje indywidualnych rozwiązań. Proaktywnie zaprojektowanie, przyjazne dla ludzi i natury budynki, zapewniają pozytywne środowisko pracy oraz wydajną produkcję.</p>
            <p>Aby uzyskać wyjątkową wydajność energetyczną, inżynierowie ROYCON stworzyli narzędzia, które obiektywnie pokazują właścicielowi w jaki sposób zaoszczędzić energię i zminimalizować wydatki. </p>`,
            ofertaText2: `<p>Aby uzyskać wyjątkową wydajność energetyczną, inżynierowie ROYCON stworzyli narzędzia, które obiektywnie pokazują właścicielowi w jaki sposób zaoszczędzić energię i zminimalizować wydatki. </p>`
        }
    }
}
</script>

<style lang="scss">

.line-1-oferta2 {
  position: absolute;
  width: 2px;
  height: 0;
  top: 50%;
  right:10%;
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
    height: 30%;
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
.line-1-oferta2.in-viewport {
  height: 100px;
}
.line-2-oferta2 {
  position: absolute;
  width: 0;
  height: 2px;
  top: 0;
  left: 50%;
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
.line-2-oferta2.in-viewport {
  width: 100px;
}

.oferta2 {
    margin-top: 100px;
    @include mq($max-width: 600px) {
        margin-top: 20px;
    }
    &__lastparagraph {
        margin-left: 170px;
        width: 50%;
        @include mq($max-width: 1650px) {
            margin-left: 10%;
        }
        @include mq($max-width: 992px) {
            margin-left: 7%;
        }
        @include mq($max-width: 768px) {
            margin-left: 30px;
        }
        @include mq($max-width: 600px) {
            width: 80%;
            margin-top: -50px;
        }
    }
    .section-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        @include mq($max-width: 768px) {
            display: block;
        }
        
        &__left {
            width: 50%;
            img {
                margin-left: calc(17.5% * 2);
            }
            @include mq($max-width: 1650px) {
                img {
                    margin-left: calc(10% * 2);
                    width: 450px;
                }
            }
            @include mq($max-width: 1200px) {
                img {
                    margin-left: calc(10% * 2);
                    width: 360px;
                }
            }
            @include mq($max-width: 992px) {
                img {
                    margin-left: calc(7% * 2);
                    width: 300px;
                }
            }
            @include mq($max-width: 768px) {
               width: auto;
               position: absolute;
               right: 0;
               img {
                    margin-left:0;
                    width: 250px;
                }
            }
            @include mq($max-width: 600px) {
               display: none;
               img {
                    margin-left:0;
                    width: 200px;
                }
            }
        }
        &__right {
            padding-top: 200px;
            width: 50%;

            .paragraph {
                padding-top: 100px;
                max-width: 600px;
            }
            @include mq($max-width: 1650px) {
                padding-top: 150px;
                .paragraph {
                    padding-top: 80px;
                    max-width: 500px;
                }
            }
            @include mq($max-width: 1200px) {
                padding-top: 100px;
                .paragraph {
                    padding-top: 20px;
                    max-width: 400px;
                }
            }
            @include mq($max-width: 992px) {
                padding-top: 100px;
                .paragraph {
                    padding-top: 20px;
                    max-width: 300px;
                }
            }
            @include mq($max-width: 768px) {
               width: 50%;
               padding-top: 30px;
               padding-left: 30px;
                .paragraph {
                    padding-top: 20px;
                    max-width: auto;
                }
            }
            @include mq($max-width: 600px) {
               width: 100%;
               padding: 30px;
                .paragraph {
                    padding-top: 0;
                    max-width: 80%;
                }
            }
        }
    }
}
  
</style>