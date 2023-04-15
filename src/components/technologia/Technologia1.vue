<template>
    <section class="technologia1 section">
        <div class="line-1-technologia1" v-in-viewport></div>
        <div class="line-2-technologia1" v-in-viewport></div>
        <div class="line-3-technologia1" v-in-viewport></div>
        <div class="section-content">
            <div class="section-content__left">
                <div class="section-content-image">
                    <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.technologia.technologia_1.image)" :alt="$static.allPages.edges[0].node.technologia.technologia_1.category" />
                </div>  
            </div>
            <div class="section-content__right">
                <TitleHeader :text="$static.allPages.edges[0].node.technologia.technologia_1.title" :customClass="'slide-content__title'"></TitleHeader>
                <CategoryHeader :text="$static.allPages.edges[0].node.technologia.technologia_1.category" :customClass="'section-content__category'"></CategoryHeader>
                <Paragraph :text="$static.allPages.edges[0].node.technologia.technologia_1.text" :customClass="'section-content__text'"></Paragraph>
                <div class="icons-container">
                    <div class="icon-wrapper" 
                    :class="{ 'on': icon.id === 1 }" 
                    :id="'icon-' + icon.id"  
                    v-for="icon in $static.allPages.edges[0].node.technologia.technologia_1.icons" :key="icon.id" 
                    @click="clickIcon(icon.id)">
                         <div class="icons-container__icon">
                            <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + icon.image)" :alt="icon.text"/>
                            <p v-html="icon.text"></p>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
         <div class="icons-content">
                    <div class="icons-content__title">
                        Co wpływa na idealny klimat Twojego budynku?
                    </div>
                    <div class="contents-wrapper">
                         <div class="icons-content__wrapper"
                        :class="{ 'on': content.id === 1 }" 
                        :id="'content-' + content.id"
                        v-for="content in $static.allPages.edges[0].node.technologia.technologia_1.icons" :key="content.id" 
                        v-html="content.content"
                    >
                    
                        
                    </div>
                    </div>
                   
                </div>
    </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node {
        technologia {
          technologia_1 {
            title
            category
            text
            image
            icons {
              id
              image
              text
              content
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
    name: "Technologia1",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    },
    data() {
        return {
            currentIcon: 1
        }
    },
    methods: {
        clickIcon: function(id){
            this.currentIcon = id;
            let icons = document.querySelectorAll('.technologia1 .icon-wrapper');
            let contents = document.querySelectorAll('.technologia1 .icons-content__wrapper');
            for(let i = 0; i < icons.length; i++) {
                if(icons[i].classList.contains('on')) {
                    icons[i].classList.remove('on')
                }
                if(contents[i].classList.contains('on')) {
                    contents[i].classList.remove('on')
                }
            }
            document.getElementById('icon-' + id).classList.add('on');
            document.getElementById('content-' + id).classList.add('on');
            document.querySelector('.icons-content').style.height = document.getElementById('content-' + id).offsetHeight+ 50 + 'px';
        }
        
    },
    mounted() {
         document.querySelector('.icons-content').style.height = document.getElementById('content-1').offsetHeight + 'px';
    }
}
</script>

<style lang="scss">





.line-1-technologia1 {
    position: absolute;
    width: 2px;
    height: 0;
    top: 40%;
    right: 5%;
    background-color: $accent-purple;
    transition-delay: 3s;
    transition: height 3s;
    z-index: 9999;
    transform: rotate(180deg);

    @include mq($max-width: 768px) {
        display: none;
        left: 50%;
        transform: translateX(-50%);
    }
}

.line-1-technologia1.in-viewport {
    height: 200px;
    @include mq($max-width: 992px) {
        display: none;
        left: 50%;
        transform: translateX(-50%);
        display: none;
    }
}


.line-2-technologia1 {
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    right: 64%;
    background-color: $accent-purple;
    transition-delay: 3s;
    transition: width 3s;
    z-index: 9999;

    @include mq($max-width: 992px) {
        display: none;
        left: 50%;
        transform: translateX(-50%);
    }
}

.line-2-technologia1.in-viewport {
    width: 100px;
}



.line-3-technologia1 {
    position: absolute;
    width: 2px;
    height: 0;
    top: 60%;
    left: 17.5%;
    background-color: $accent-purple;
    transition-delay: 3s;
    transition: height 3s;
    z-index: 9999;
    transform: rotate(180deg);

    @include mq($max-width: 1400px) {
        top: 73%;
    }
}

.line-3-technologia1.in-viewport {
    height: 200px;
    @include mq($max-width: 992px) {
        display: none;
        left: 50%;
        transform: translateX(-50%);
        display: none;
    }
}




.technologia1 {
    
    margin-top: 100px;

    @include mq($max-width: 768px) {
        margin-top: 50px;
    }

    .section-content {
        display: flex;

        @include mq($max-width: 768px) {
            display: block;
        }

        &__left {
            width: 50%;

            .section-content-image {
                width: 60%;
                padding-left: 35%;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            @include mq($max-width: 768px) {
                position: absolute;
                right: 0;
                top: -200px;
                display: none;
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

            .title-header {
                margin-top: -230px;
                margin-left: -200px;
                margin-bottom: 200px;
                max-width: 90%;
            }

            @include mq($max-width: 1650px) {
                padding-left: 100px;

                .title-header {
                    margin-top: -200px;
                    margin-left: -120px;
                    margin-bottom: 100px;
                    max-width: 90%;
                }

                .paragraph {
                    max-width: 80%;
                    padding-top: 60px;
                }
            }

            @include mq($max-width: 1200px) {
                .title-header {
                    margin-top: -100px;
                    margin-left: -80px;
                    margin-bottom: 50px;
                    max-width: 90%;
                }

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
                width: 100%;

                .title-header {
                    margin-top: 0;
                    margin-left: 0;
                    margin-bottom: 50px;
                    max-width: 80%;
                }

                .paragraph {
                    max-width: 90%;
                    padding-top: 0;

                }
            }
        }
    }

    .icons-content {
        height: 420px;
        transition: height 0.5s;
        width: 100%;
        position: relative;

        &__title {
            background-color: #eeeeee;
            position: absolute;
            font-size: 22px;
            width: 247px;
            height: 167px;
            padding: 67px 100px 0px 30px;
            right: 48%;
            top: -15%;
            font-family: 'Adobe Caslon Pro';
            font-weight: bold;
            @include mq($max-width: 768px) {
                display: none;
            }
        }
        &__wrapper {
            position: absolute;
            box-sizing: border-box;
            color: #fff;
            padding: 50px 70px;
            opacity: 0;
            z-index: -1;
            // transition: opacity 0.6s;
            width: 51%;
            right: 0;
            background-color: $accent-green;
            @include mq($max-width: 768px) {
                width: 100%;
            }

            font-family: 'Adobe Caslon Pro';

            h3 {
                font-weight: bold;
                font-size: 25px;
            }
            p {
                font-size: 22px;
            }
            @include mq($max-width: 1200px) {
                 h3 {
                    font-weight: bold;
                    font-size: 22px;
                }
                p {
                    font-size: 20px;
                }
            }
             @include mq($max-width: 992px) {
                 h3 {
                    font-weight: bold;
                    font-size: 20px;
                }
                p {
                    font-size: 18px;
                }
            }
             @include mq($max-width: 768px) {
                 h3 {
                    font-weight: bold;
                    font-size: 18px;
                }
                p {
                    font-size: 18px;
                }
            }
            
        }
        &__wrapper.on {
            opacity: 1;
            z-index: 1;
        }
         
    }

    .icons-container {
        flex-wrap: wrap;
        max-width: 85%;
        justify-content: flex-start;
        display: flex;
        align-items: top;

        .icon-wrapper {
            width: 30%;
            opacity: 0.5;
            transition: opacity 0.5s;
            cursor: pointer;
            @include mq($max-width: 992px) {
                width: 33%;
            }
        }
        .icon-wrapper.on {
            opacity: 1 !important;
        }

        &__icon {
            text-align: center;
            margin-bottom: 50px;

            &:nth-child(1) {
                width: auto;

            }

            img {
                height: 50px;
                width: auto;
            }

            p {
                color: $accent-green;
                font-weight: bold;
                font-size: 14px;
                @include mq($max-width: 992px) {
                    font-size: 11px;
                }
            }

        }

        @include mq($max-width: 1200px) {}

        @include mq($max-width: 768px) {
            max-width: auto;
            display: flex;
            justify-content: flex-start;

            &__icon {
                text-align: center;
                margin-bottom: 30px;

            }
        }
    }
}
</style>