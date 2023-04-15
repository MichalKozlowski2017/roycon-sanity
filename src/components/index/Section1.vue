<template>
    <section class="section1 section">
        <div class="line-1-section1" v-in-viewport></div>
        <div class="line-2-section1" v-in-viewport></div>
        <div class="line-3-section1" v-in-viewport></div>
        <div class="section1__images">
            <g-image v-in-viewport
                :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.index.section_1.images.image_1)" />
            <g-image v-in-viewport
                :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.index.section_1.images.image_2)" />
        </div>
        <div class="section-content">
            <CategoryHeader :text="$static.allPages.edges[0].node.index.section_1.category"
                :customClass="'section-content__category'"></CategoryHeader>
            <TitleHeader :text="$static.allPages.edges[0].node.index.section_1.title"
                :customClass="'section-content__title'"></TitleHeader>
            <Paragraph :text="$static.allPages.edges[0].node.index.section_1.text"
                :customClass="'section-content__text'"></Paragraph>
            <PrimaryButton :text="$static.allPages.edges[0].node.index.section_1.button.text"
                :link="$static.allPages.edges[0].node.index.section_1.button.link"></PrimaryButton>
        </div>

    </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        index {
          section_1 {
            category
            text
            title
            images {
              image_1
              image_2
            }
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
    name: "Section1",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    }
}
</script>

<style lang="scss">
.line-1-section1 {
    position: absolute;
    width: 2px;
    height: 0;
    top: -200px;
    left: 5%;
    background-color: $accent-purple;
    -webkit-transition-delay: 3s;
    -o-transition-delay: 3s;
    transition-delay: 3s;
    -webkit-transition: height 3s;
    -o-transition: height 3s;
    transition: height 3s;
    z-index: 9999;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);

    &::before {
        content: '';
        position: absolute;
        top: -200px;
        left: 0;
        width: 2px;
        height: 30%;
        background-color: $accent-purple;
    }

    @include mq($max-width: 768px) {
        display: none;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
}

.line-1-section1.in-viewport {
    height: 500px;
}

.line-2-section1 {
    position: absolute;
    width: 2px;
    height: 0;
    top: -100px;
    right: 5%;
    background-color: $accent-purple;
    -webkit-transition-delay: 3s;
    -o-transition-delay: 3s;
    transition-delay: 3s;
    -webkit-transition: height 3s;
    -o-transition: height 3s;
    transition: height 3s;
    z-index: 9999;

    @include mq($max-width: 768px) {
        display: none;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
}

.line-2-section1.in-viewport {
    height: 200px;
}


.line-3-section1 {
    position: absolute;
    width: 2px;
    height: 0;
    bottom: -300px;
    right: 25%;
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
        top: -500px;
        left: 0;
        width: 2px;
        height: 200%;
        background-color: $accent-purple;
    }

    @include mq($max-width: 1650px) {
        display: none;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }

}

.line-3-section1.in-viewport {
    height: 200px;
}



.section1 {
    position: relative;
    overflow: visible;

    &__images {
        width: 973px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;

        &:before {
            content: '';
            width: 500px;
            height: 500px;
            background-color: #eeeeee;
            position: absolute;
            top: 330px;
            right: 70px;
            display: block;
        }

        img {

            position: absolute;

            &:nth-child(1) {}

            &:nth-child(3) {
                top: 568px;
                right: 0;
            }
        }
    }

    .section-content {

        position: relative;
        left: 17.5%;
        width: 60%;
        height: 100%;
        padding-top: 120px;
        padding-bottom: 120px;

        &__title {
            margin-left: 10%;
        }

        &__text {
            margin-top: 150px;
            margin-bottom: 80px;
            width: 50%;
        }
    }

    @include mq($max-width: 1650px) {
        height: auto;

        &__images {
            height: 100%;
            right: -400px;

            &:before {
                content: '';
                width: 350px;
                height: 350px;
                background-color: #eeeeee;
                position: absolute;
                top: 400px;
                right: 870px;
                display: block;
            }
        }

        .section-content {
            left: 12.5%;
            padding: 50px 0;

            &__text {
                margin-top: 70px;
                margin-bottom: 40px;
                width: 50%;
            }
        }
    }

    @include mq($max-width: 1200px) {
        height: auto;

        &__images {
            height: 70%;
            width: 60%;
            right: 0;

            &:before {
                content: '';
                width: 300px;
                height: 300px;
                background-color: #eeeeee;
                position: absolute;
                top: 260px;
                right: 370px;
                display: block;
            }

            img {
                position: absolute;

                &:nth-child(1) {
                    height: 100%;
                    width: auto;
                    right: 0;
                }

                &:nth-child(3) {
                    top: 568px;
                    right: 0;
                    display: none;
                }
            }
        }

        .section-content {
            left: 12.5%;
            padding: 50px 0;

            &__text {
                margin-top: 70px;
                margin-bottom: 40px;
                width: 50%;
            }
        }
    }

    @include mq($max-width: 992px) {
        height: auto;

        &__images {
            height: 70%;
            width: 60%;
            right: 0;

            &:before {
                content: '';
                width: 300px;
                height: 300px;
                background-color: #eeeeee;
                position: absolute;
                top: 150px;
                right: 170px;
                display: block;
            }

            img {
                position: absolute;

                &:nth-child(1) {
                    height: 100%;
                    width: auto;
                    right: 0;
                }

                &:nth-child(3) {
                    top: 568px;
                    right: 0;
                    display: none;
                }
            }
        }

        .section-content {
            left: 12.5%;
            padding: 50px 0;

            &__text {
                margin-top: 30px;
                margin-bottom: 40px;
                width: 50%;
            }
        }
    }

    @include mq($max-width: 768px) {
        &__images {
            height: 60%;
            width: 40%;
            right: 0;
            top: auto;
            bottom: 0;

            &:before {
                content: '';
                width: 300px;
                height: 300px;
                background-color: #eeeeee;
                position: absolute;
                top: 150px;
                right: 170px;
                display: none;
            }

            img {
                position: absolute;

                &:nth-child(1) {
                    height: 100%;
                    width: auto;
                    right: 0;
                }

                &:nth-child(3) {
                    top: 568px;
                    right: 0;
                    display: none;
                }
            }
        }

        .section-content {
            width: 65%;
            left: 0;
            padding-top: 50px;
            padding-left: 30px;
            padding-bottom: 50px;

            &__text {
                margin-top: 30px;
                margin-bottom: 40px;
                width: 70%;
            }

            &__title {
                margin-left: 0;
            }
        }
    }

    @include mq($max-width: 600px) {
        &__images {
            height: 100%;
            width: 40%;
            right: -100px;

            &:before {
                content: '';
                width: 300px;
                height: 300px;
                background-color: #eeeeee;
                position: absolute;
                top: 150px;
                right: 170px;
                display: none;
            }

            img {
                position: absolute;

                &:nth-child(1) {
                    height: 100%;
                    width: auto;
                    right: 0;
                }

                &:nth-child(3) {
                    top: 568px;
                    right: 0;
                    display: none;
                }
            }
        }

        .section-content {
            width: 65%;
            left: 0;
            padding-top: 50px;
            padding-left: 30px;
            padding-bottom: 50px;

            &__text {
                margin-top: 30px;
                margin-bottom: 4;
                display: none;
            }
        }
    }
}

</style>