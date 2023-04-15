<template>
    <div class="section partnerzy-slider" id="realizacje">
        <ClientOnly>
            <carousel id="partnerzySlider" :perPage="1" class="slider-partnerzy" :navigationEnabled="true" :paginationEnabled="false" :perPageCustom="[[768, 1], [1024, 1]]">
                <slide>
                    <div class="slider-partnerzy__content" >
                        <div class="slider-partnerzy-image">
                            <g-image v-in-viewport src="~/assets/img/partnerzy_1.jpg" />
                        </div>
                        <div class="slider-partnerzy-content">
                            <h2>
                                “...Praktyka dnia codziennego dowodzi,
							że nowy model działalności organizacyjnej
spełnia istotną rolę w kształtowaniu dalszych kierunków rozwoju...”
                            </h2>
                        </div>
                    </div>
                    <div class="slider-partnerzy-content-author">
                        <div class="title">PREZES ZARZĄDU MAF ENERGY INTEGRATED</div>
                        <div class="name">Henryk Sienkiewicz</div>
                    </div>
                </slide>
                <slide>
                    <div class="slider-partnerzy__content" >
                        <div class="slider-partnerzy-image">
                            <g-image v-in-viewport src="~/assets/img/partnerzy_1.jpg" />
                        </div>
                        <div class="slider-partnerzy-content">
                            <h2>
                                “...Praktyka dnia codziennego dowodzi,
							że nowy model działalności organizacyjnej
spełnia istotną rolę w kształtowaniu dalszych kierunków rozwoju...”
                            </h2>
                        </div>
                    </div>
                    <div class="slider-partnerzy-content-author">
                        <div class="title">PREZES ZARZĄDU MAF ENERGY INTEGRATED</div>
                        <div class="name">Henryk Sienkiewicz</div>
                    </div>
                </slide>
            </carousel>
        </ClientOnly>

    </div>
</template>


<script>
import CategoryHeader from "~/components/CategoryHeader"
import Paragraph from "~/components/Paragraph"
export default {
    name: "Slider",
    components: {
        CategoryHeader,
        Paragraph,
        Carousel: () =>
            import ('vue-carousel')
            .then(m => m.Carousel)
            .catch(),
        Slide: () =>
            import ('vue-carousel')
            .then(m => m.Slide)
            .catch()
    },
    data: function () {
      return {
        
      }
    }

}
</script>

<style lang="scss">


.VueCarousel-navigation {
    position: absolute;
    top: auto;
    bottom: 0;
    height: 100px;
    left: 60px;
}
@include mq($max-width: 1920px) {
.VueCarousel-navigation {
    position: absolute;
    top: auto;
    bottom: 0;
    height: 100px;
    left: 100px;
}
}
@include mq($max-width: 992px) {
    .VueCarousel-navigation {
        -webkit-transform: scale(0.8);
            -ms-transform: scale(0.8);
                transform: scale(0.8);
        left: 70px;
    }
}

@include mq($max-width: 768px) {

  .VueCarousel-navigation {
    position: absolute;
    top: auto;
    height: 0;
    left: auto;
    right: 10%;
    bottom: 30%;
    -webkit-transform: scale(0.7);
            -ms-transform: scale(0.7);
        transform: scale(0.7);
  }
}
    .VueCarousel-navigation-button {
        position: absolute;
        top: 0 !important;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        color: #000;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        outline: none;

        &:focus {
            outline: none !important;
            -webkit-box-shadow: none !important;
                    box-shadow: none !important;
        }
    }

    .VueCarousel-navigation-prev {
        background-image: url('../../assets/img/arrow.png');
        margin: 0 !important;
        padding: 0 !important;
        width: 20px;
        height: 20px;
        font-size: 0;
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px !important;
        left: -50px !important;
        top: 0 !important;
        position: absolute !important;
        -webkit-transform: translate(-5px, 0) !important;
        -ms-transform: translate(-5px, 0) !important;
            transform: translate(-5px, 0) !important;

        &:focus {
            outline: none !important;
            -webkit-box-shadow: none !important;
                    box-shadow: none !important;
        }
    }

    .VueCarousel-navigation-next {
        -webkit-transform: rotate(-180deg) !important;
        -ms-transform: rotate(-180deg) !important;
            transform: rotate(-180deg) !important;
        background-image: url('../../assets/img/arrow.png');
        margin: 0 !important;
        padding: 0 !important;
        width: 20px;
        height: 20px;
        font-size: 0;
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px !important;
        right: -30px !important;
        position: absolute !important;

        &:focus {
            outline: none;
            -webkit-box-shadow: none;
                    box-shadow: none;
        }
    }
    .slider-partnerzy {
        &__content {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: end;
                -ms-flex-align: end;
                    align-items: flex-end;
            
            .slider-partnerzy-image {
                position: relative; 
                width: 20%;
                img {
                    height: auto;
                    width: 100%;
                }
            }
            .slider-partnerzy-content {
                position: relative;
                width: 80%;
                display: table;
                height: 100%;
                h2 {
                    display: table-cell;
                    vertical-align: middle;
                    font-family: 'Adobe Caslon Pro', serif;
                    font-weight: bold;
                    font-size: 40px;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    padding-left: 10%;
                    padding-right: 10%;
                    @include mq($max-width: 1650px) {
                        font-size: 33px;
                    }
                    @include mq($max-width: 1200px) {
                        font-size: 26px;
                    }
                    @include mq($max-width: 992px) {
                        font-size: 21px;
                    }
                }
            }
            @include mq($max-width: 768px) {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                        flex-direction: column;
                -webkit-box-align: center;
                    -ms-flex-align: center;
                        align-items: center;
                .slider-partnerzy-image {
                    width: 30%;
                }
                .slider-partnerzy-content {
                    width: 90%;
                    margin-top: 30px;
                }
            }
        }
        .slider-partnerzy-content-author {
            margin-top: 80px;
            margin-left: 20%;
            @include mq($max-width: 768px) {
                margin-left: 30px;
                max-width: 50%;
            }

            .title {
                font-weight: bold;
                color: $accent-green;
                position: relative;
                margin-bottom: 35px;
                font-size: 16px;
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 45px;
                    height: 4px;
                    background-color: $accent-purple;
                    display: block;
                }
            }
            .name {
                font-family: 'Adobe Caslon Pro', serif;
                font-weight: bold;
                font-size: 26px;
            }
        }
    }

    
</style>