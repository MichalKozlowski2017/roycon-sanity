<template>
  <section class="section kontakt">
    <div class="line-1-kontakt" v-in-viewport></div>
    <CategoryHeader
      :text="$static.allPages.edges[0].node.kontakt.category"
      :customClass="'kontakt__category'"
    ></CategoryHeader>
    <TitleHeader
      :text="$static.allPages.edges[0].node.kontakt.title"
      :customClass="'kontakt__title'"
    ></TitleHeader>
    <div class="kontakt__content">
      <g-image
        v-in-viewport
        class="map map-desktop"
        :src="
          require('!!assets-loader!~/assets/img/' +
            $static.allPages.edges[0].node.kontakt.map_desktop)
        "
      />
      <g-image
        v-in-viewport
        class="map map-mobile"
        :src="
          require('!!assets-loader!~/assets/img/' +
            $static.allPages.edges[0].node.kontakt.map_mobile)
        "
      />
      <div class="kontakt-info">
        <div class="kontakt-info__info" v-in-viewport>
          <h3 v-html="$static.allPages.edges[0].node.kontakt.adres"></h3>
          <p v-html="$static.allPages.edges[0].node.kontakt.legal"></p>
        </div>

        <div class="kontakt-info__persons">
          <div
            v-in-viewport
            class="person"
            v-for="person in $static.allPages.edges[0].node.kontakt.persons"
            :key="person.id"
          >
            <div class="person__category">{{ person.category }}</div>
            <h3 class="person__name">{{ person.name }}</h3>
            <p class="person__desc">
              <a :href="'tel:' + person.phone.replaceAll(' ', '')">{{ person.phone }}</a
              ><br /><a :href="'mailto:' + person.mail">{{ person.mail }}</a>
            </p>
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
        kontakt  {
          category
          title
          adres
          legal
          map_desktop
          map_mobile
          persons {
            category
            name
            phone
            mail
          }
        }
      }
    }
  }
}
</static-query>

<script>
import PrimaryButton from "~/components/PrimaryButton";
import CategoryHeader from "~/components/CategoryHeader";
import TitleHeader from "~/components/TitleHeader";
import Paragraph from "~/components/Paragraph";
export default {
  name: "Kontakt",
  components: {
    PrimaryButton,
    CategoryHeader,
    TitleHeader,
    Paragraph,
  },
};
</script>

<style lang="scss">
.line-1-kontakt {
  position: absolute;
  width: 2px;
  height: 0;
  top: 25%;
  right: 5%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: height 3s;
  -o-transition: height 3s;
  transition: height 3s;
  z-index: 9999;
  @include mq($max-width: 992px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-1-kontakt.in-viewport {
  height: 200px;
}

.map.in-viewport {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.map {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.5s;
  -o-transition-delay: 0.5s;
  transition-delay: 0.5s;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;
}

.kontakt {
  .map-mobile {
    display: none;
  }
  &__category,
  &__title {
    margin-left: 17.5%;
  }
  &__content {
    padding-top: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    img {
      width: auto;
      height: 1000px;
    }

    .kontakt-info {
      padding-top: 50px;
      padding-left: 160px;
      width: 45%;
      &__info.in-viewport {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
      }
      &__info {
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        opacity: 0;
        -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
        transform: translateX(-50px);
        margin-bottom: 130px;
        h3 {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 30px;
        }
        p {
          font-family: "Adobe Caslon Pro", serif;
          font-weight: normal;
          font-size: 16px;
          color: #d9d9d9;
        }
      }
      &__persons {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .person.in-viewport {
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      .person {
        opacity: 0;
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        width: 50%;
        margin-bottom: 130px;
        &__category {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 15px;
          color: $accent-green;
          position: relative;
          margin-bottom: 30px;
          &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 40px;
            height: 2px;
            background-color: $accent-purple;
          }
        }
        &__name {
          font-family: "Adobe Caslon Pro", serif;
          font-weight: bold;
          font-size: 28px;
          color: $accent-purple;
          margin: 0;
        }
        &__desc {
          font-family: "Adobe Caslon Pro", serif;
          font-weight: normal;
          font-size: 19px;
          a {
            color: $text-color;
            text-decoration: none;
          }
        }
      }
    }
  }
  @include mq($max-width: 1650px) {
    &__category,
    &__title {
      margin-left: 17.5%;
    }
    img {
      width: auto;
      height: 800px;
    }
    .kontakt-info {
      padding-left: 120px;
      &__info {
        margin-bottom: 70px;
      }
      .person {
        margin-bottom: 70px;
      }
    }
  }
  @include mq($max-width: 1200px) {
    &__category,
    &__title {
      margin-left: 12.5%;
    }
    img {
      width: auto;
      height: 700px;
    }
    .kontakt-info {
      padding-left: 120px;
      &__info {
        margin-bottom: 50px;
      }
      .person {
        margin-bottom: 50px;
        &__category {
          font-size: 13px;
          margin-bottom: 15px;
        }
        &__name {
          font-size: 22px;
        }
        &__desc {
          font-size: 15px;
        }
      }
    }
  }
  @include mq($max-width: 992px) {
    img {
      width: auto;
      height: 500px;
    }
    &__content {
      padding-top: 30px;
    }
    .kontakt-info {
      padding-left: 50px;
      padding-top: 20px;
      width: 60%;
      &__info {
        margin-bottom: 50px;
      }
      .person {
        margin-bottom: 50px;
        &__category {
          font-size: 13px;
          margin-bottom: 15px;
        }
        &__name {
          font-size: 22px;
        }
        &__desc {
          font-size: 15px;
        }
      }
    }
  }
  @include mq($max-width: 768px) {
    &__category,
    &__title {
      margin-left: 30px;
    }
    &__content {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .map-mobile {
      display: block;
      width: auto;
      height: auto;
    }
    .map-desktop {
      display: none;
    }
    .kontakt-info {
      width: 90%;
      padding-left: 30px;
    }
  }
  @include mq($max-width: 600px) {
  }
}
</style>
