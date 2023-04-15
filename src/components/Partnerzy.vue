<template>
  <section class="section partnerzy">
    <div class="line-1-section1" v-in-viewport></div>
    <div class="line-2-section1" v-in-viewport></div>
    <CategoryHeader
      v-in-viewport
      :text="$static.allPages.edges[0].node.partnerzy.title"
      :customClass="'partnerzy__category'"
    ></CategoryHeader>
    <div class="partnerzy__content">
      <div
        class="partner"
        v-in-viewport
        v-for="partner in $static.allPages.edges[0].node.partnerzy.images"
        :key="partner.id"
      >
        <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + partner.image)" />
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        partnerzy  {
          title
          images {
            id
            image
            alt
          }
        }
      }
    }
  }
}
</static-query>

<script>
import CategoryHeader from "~/components/CategoryHeader";
export default {
  name: "Partnerzy",
  components: {
    CategoryHeader,
  },
};
</script>

<style lang="scss">
.partnerzy {
  &__category.in-viewport {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  &__category {
    margin-left: 37.5%;
    -webkit-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
    opacity: 0;
    -webkit-transform: translateX(-50px);
    -ms-transform: translateX(-50px);
    transform: translateX(-50px);
  }
  &__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 60px 0;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    .partner.in-viewport {
      opacity: 0.3;
      &:nth-child(1) {
        -webkit-transition-delay: 0.2s;
        -o-transition-delay: 0.2s;
        transition-delay: 0.2s;
      }
      &:nth-child(2) {
        -webkit-transition-delay: 0.4s;
        -o-transition-delay: 0.4s;
        transition-delay: 0.4s;
      }
      &:nth-child(3) {
        -webkit-transition-delay: 0.6s;
        -o-transition-delay: 0.6s;
        transition-delay: 0.6s;
      }
      &:nth-child(4) {
        -webkit-transition-delay: 0.8s;
        -o-transition-delay: 0.8s;
        transition-delay: 0.8s;
      }
    }
    .partner {
      &:nth-child(1) {
        img {
          max-width: 140px;
        }
      }
      opacity: 0;
      -webkit-transition: opacity 0.3s;
      -o-transition: opacity 0.3s;
      transition: opacity 0.3s;
      &:hover {
        opacity: 1;
      }
    }
  }
  @include mq($max-width: 1650px) {
    &__category {
      margin-left: 31.5%;
    }
  }
  @include mq($max-width: 992px) {
    &__content {
      padding: 0;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      .partner {
        width: 50%;
        text-align: center;
      }
    }
  }
  @include mq($max-width: 768px) {
    &__category {
      margin-left: 30px;
    }
    &__content {
      .partner {
        -webkit-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
      }
    }
  }
}
</style>
