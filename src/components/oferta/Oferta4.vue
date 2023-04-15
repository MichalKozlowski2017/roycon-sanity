<template>
    <section class="oferta4 section" id="oferta4">
        <div class="line-1-oferta4" v-in-viewport></div>
        <div class="line-2-oferta4" v-in-viewport></div>
        <div class="section-content">
            <div class="section-content__left">
                <div class="section-content-image">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.oferta.oferta_4.image)" :alt="$static.allPages.edges[0].node.oferta.oferta_4.category" />
                </div>  
            </div>
            <div class="section-content__right">
                <CategoryHeader :text="$static.allPages.edges[0].node.oferta.oferta_4.category" :customClass="'section-content__category'"></CategoryHeader>
                <Paragraph :text="$static.allPages.edges[0].node.oferta.oferta_4.text" :customClass="'section-content__text'"></Paragraph>
                <PrimaryButton :text="$static.allPages.edges[0].node.oferta.oferta_4.button.text" :link="$static.allPages.edges[0].node.oferta.oferta_4.button.link" :blank="true"></PrimaryButton>
                <div class="icons-container">
                    <div class="icon-wrapper" v-for="icon in $static.allPages.edges[0].node.oferta.oferta_4.icons" :key="icon.id">
                         <div class="icons-container__icon">
                            <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + icon.image)" :alt="icon.text"/>
                            <p>{{icon.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        oferta  {
        	oferta_4 {
            category
            text
            image,
            button {
                text
                link
            }
            icons {
              id
              image
              text
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
    name: "Oferta4",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    },
    data() {
        return {
            ofertaText1: `<p>Ciepła płyta fundamentowa w technologii I ZODOM 2000 to sprawdzone rozwiązanie na start inwestycji. Pozwala wyeliminować wszelkie wady tradycyjnych rozwiązań, uzyskując parametry cieplne blisko dwukrotnie wyższe od standardowych. </p>`
        }
    }
}
</script>

<style lang="scss">

.line-1-oferta4 {
  position: absolute;
  width: 2px;
  height: 0;
  top: 0;
  right:20%;
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
.line-1-oferta4.in-viewport {
  height: 100px;
}

.line-2-oferta4 {
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 100px;
  left: 8%;
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
.line-2-oferta4.in-viewport {
  width: 100px;
}



.oferta4 {
    margin-top: 100px;
    @include mq($max-width: 768px) {
        margin-top: 420px;
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
            .section-content-image {
                width: 90%;
                padding-left: calc(17.5%);
                img { 
                    width: 100%;
                    height: auto;
                }
            }
            @include mq($max-width: 768px) {
                position: absolute;
                right: 0;
                top: -200px;
            }
        }
        &__right {
            width: 50%;
            padding-top: 10%;
            padding-left: 200px;
            .paragraph {
                max-width: 70%;
                padding-top: 100px;
            }
            @include mq($max-width: 1650px) {
                padding-left: 100px;
                .paragraph {
                    max-width: 80%;
                    padding-top: 60px;
                }
            }
            @include mq($max-width: 1200px) {
                .paragraph {
                    max-width: 80%;
                    padding-top: 20px;
                }
            }
            @include mq($max-width: 992px) {
                padding-left: 100px;
                .paragraph {
                    max-width: 70%;
                    padding-top: 20px;
                    
                }
            }
            @include mq($max-width: 768px) {
                padding-left: 30px;
                width: 90%;
                .paragraph {
                    max-width: 100%;
                    padding-top:0;
                    
                }
            }
        }
    }
    .icons-container {
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        max-width: 700px;
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: flex-start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: 100px;
        .icon-wrapper {
            width: 30%;
        }
        &__icon {
            text-align: center;
            margin-bottom: 50px;
            &:nth-child(1) {
                width: 105px;
            }
            &:nth-child(2) {
                width: 100px;
            }
            &:nth-child(3) {
                width: 143px;
            }
            &:nth-child(4) {
                width: 90px;
            }
            &:nth-child(5) {
                width: 80px;
            }
            
            img {
                height: 50px;
                width: auto;
            }
            p {
                color: $accent-green;
                font-weight: bold;
                font-size: 14px;
            }
            @include mq($max-width: 768px) {
                -webkit-transform: scale(0.8);
                    -ms-transform: scale(0.8);
                        transform: scale(0.8);
            }
        }
        @include mq($max-width: 1200px) {

        }
        @include mq($max-width: 768px) {
            max-width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: start;
                -ms-flex-pack: start;
                    justify-content: flex-start;
            &__icon {
                text-align: center;
                margin-bottom: 30px;

            }
        }
    }
}
  
</style>