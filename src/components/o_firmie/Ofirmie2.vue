<template>
    <section class="ofirmie2 section">
        <div class="line-1-ofirmie2" v-in-viewport></div>
        <div class="line-2-ofirmie2" v-in-viewport></div>
        <div class="section-content">
            <div class="ofirmie2__image1">
                <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.ofirmie.ofirmie_2.image_1)" alt="Zarząd" />    
            </div>
            <div class="ofirmie2__image2">
                <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + $static.allPages.edges[0].node.ofirmie.ofirmie_2.image_2)" :alt="$static.allPages.edges[0].node.ofirmie.ofirmie_2.title" />        
            </div>
            <Paragraph :text="$static.allPages.edges[0].node.ofirmie.ofirmie_2.text_1" :customClass="'section-content__text'"></Paragraph>
            <TitleHeader :text="$static.allPages.edges[0].node.ofirmie.ofirmie_2.title" :customClass="'section-content__title'"></TitleHeader>
            <Paragraph :text="$static.allPages.edges[0].node.ofirmie.ofirmie_2.text_2" :customClass="'section-content__text'"></Paragraph>
        </div>
        
    </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        ofirmie  {  
        	ofirmie_2 {
            title
            text_1
            text_2
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
    name: "Ofirmie2",
    components: {
        PrimaryButton,
        CategoryHeader,
        TitleHeader,
        Paragraph,
    },
    data() {
        return {
            paragraph1: `<p>Nasze podejście do współpracy polega na zapewnieniu klientom doświadczonego zespołu specjalistów, dysponujących umiejętnościami niezbędnymi do tego, by 
prowadzony przez nas projekt odniósł pewny sukces. </p>
            <p>Oferujemy usługi z zakresu profesjonalnego doradztwa, będąc dla naszych Klientów wsparciem na każdym etapie prac budowlanych.</p>`,
            paragraph2: `<p>W Roycon wierzymy, że aby osiągnąć nasze cele, musimy stale rozwijać umiejętności naszego zespołu, inwestując w jego rozwój osobisty i zawodowy oraz zapewniając 
im możliwie najlepsze warunki pracy. </p>
            <p>Postawiliśmy na sprawdzonych specjalistów, którzy podzielają wizję naszej firmy i są z nami na placu budowy od  wielu lat. </p>`,
            title1: `Budując siłę naszej firmy,	zaczęliśmy od doświadczonego zespołu`
        }
    }
}
</script>

<style lang="scss">
.line-1-ofirmie2 {
  position: absolute;
  width: 2px;
  height: 0;
  top: 70%;
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
  @include mq($max-width: 768px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
.line-1-ofirmie2.in-viewport {
  height: 200px;
}
.line-2-ofirmie2 {
  position: absolute;
  width: 2px;
  height: 0;
  top: 0;
  right: 15%;
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
.line-2-ofirmie2.in-viewport {
  height: 100px;
}






.ofirmie2 {
    .section-content {
        padding: 0 0;
        .title-header {
            padding: 0 15% 0 40%;
        }
        .paragraph {
            padding: 0 30% 0 40%;
        }
    }
    &__image1, &__image2 {
        position: absolute;
        img {
            width: 100%;
        }
    }
    &__image1 {
        left: 0;
        top: 0;
        width: 35%;
        
    }
    &__image2 {
        right: 0;
        bottom: 100px;
        width: 10%;
    }

    @include mq($max-width: 768px) {
        .section-content {
            padding: 0 0;
            .title-header {
                padding: 0 30px 0 30px;
            }
            .paragraph {
                padding: 0 30px 0 30px;
            }
        }
        &__image1 {
            position: relative;
            width: 100%;
        }
        &__image2 {
           display: none;
        }
    }
}

</style>