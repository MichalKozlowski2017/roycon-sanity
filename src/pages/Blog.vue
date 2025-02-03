<template>
  <Layout>
    <div class="section Blog" id="blog" v-in-viewport>
      <CategoryHeader
        v-in-viewport
        :text="'Artykuły'"
        :customClass="'Blog__category'"
      ></CategoryHeader>
      <div class="blog blog-wrapper">
        <g-link
          :to="item.node.slug.current"
          class="blog__item"
          v-for="item in $page.articles.edges"
          :key="item.id"
        >
          <div class="blog__item--img">
            <g-image
              v-in-viewport
              v-if="firstImage(item.node._rawBlockContent)"
              :src="generateUrl(firstImage(item.node._rawBlockContent).asset._ref)"
            />
          </div>
          <div class="blog__item--info">
            <p class="blog-date">{{ formatDate(item.node._createdAt) }}</p>
            <h4>{{ item.node.title }}</h4>
            <p>{{ item.node.excerpt }}</p>
          </div>
        </g-link>
      </div>
      <Pager
        :info="$page.articles.pageInfo"
        class="pager-container"
        linkClass="pager-container__link"
        nextLabel="Następna"
        prevLabel="Poprzednia"
      />
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int){
  articles: allSanityArticle(perPage: 12, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title,
        excerpt,
        _createdAt,
        slug {
          current
        },
        _rawBlockContent
      }
    }
  }
}
</page-query>

<script>
import CategoryHeader from "~/components/CategoryHeader";
import { urlFor } from "../lib/sanity";
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Blog",
    titleTemplate: "",
    script: [
      {
        innerHTML:
          "gtag('event', 'conversion', {'send_to': 'AW-11238080681/0opNCOaZ-LYYEKmB3u4p'}); ",
      },
    ],
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "blog firmy budowlanej Roycon - sprawdź nasze realizacje, opinie klientów i ciekawostki ze świata budownictwa",
      },
      {
        name: "keywords",
        content:
          "firma budowlana jelenia góra, firma budowlana Wałbrzych, firma budowlana legnica, generalny wykonawca jelenia góra, generalny wykonawca Wałbrzych, generalny wykonawca Legnica, wykonawca izodom 2000, hale stalowe jelenia góra, hale stalowe Wałbrzych, hale stalowe legnica, hale stalowe astron, domy zeroenergetyczne, budynek zeroenergetyczny",
      },
    ],
  },
  components: {
    CategoryHeader,
    Pager,
  },
  methods: {
    firstImage(blockContent) {
      if (Array.isArray(blockContent)) {
        return blockContent.find((block) => block._type === "image");
      }
      return null;
    },
    generateUrl: (url) => {
      return urlFor(url).url();
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("pl-PL", options);
    },
  },
  data() {
    return {
      articles: [],
    };
  },
};
</script>
<style lang="scss">
.line-1-Blog {
  position: absolute;
  width: 0;
  height: 2px;
  top: 90%;
  left: 25%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 1650px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-1-Blog.in-viewport {
  width: 200px;
}
.Blog.in-viewport {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.Blog {
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.5s;
  -o-transition-delay: 0.5s;
  transition-delay: 0.5s;
  opacity: 0;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  &__category.in-viewport {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  &__category {
    margin-left: 170px;
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

    @include mq($max-width: 1350px) {
      margin-left: 100px;
    }
    @include mq($max-width: 1200px) {
      margin-left: 80px;
    }
    @include mq($max-width: 992px) {
      margin-left: 50px;
    }
    @include mq($max-width: 768px) {
      margin-left: 30px;
    }
    @include mq($max-width: 400px) {
    }
  }
}
.blog {
  padding: 100px 170px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: calc(1920px / 3 - 170px);
  grid-gap: 8px;

  @include mq($max-width: 1920px) {
    grid-auto-rows: calc(33.333vw - 170px);
  }

  @include mq($max-width: 1450px) {
    grid-auto-rows: 300px;
  }
  @include mq($max-width: 1350px) {
    padding: 100px 100px 10px;
    grid-auto-rows: calc(33.333vw - 100px);
  }
  @include mq($max-width: 1200px) {
    padding: 40px 80px 10px;
    grid-auto-rows: calc(33.333vw - 80px);
  }
  @include mq($max-width: 992px) {
    padding: 20px 50px 10px;
    grid-auto-rows: calc(33.333vw - 50px);
  }
  @include mq($max-width: 768px) {
    padding: 20px 30px 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: calc(45vw - 30px);
  }
  @include mq($max-width: 400px) {
    padding: 20px 30px 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: calc(60vw - 30px);
  }

  &__item {
    width: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 60%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.6) 24%,
        rgba(0, 212, 255, 0) 100%
      );
      bottom: 0;
      z-index: 1;
    }

    &--info {
      z-index: 2;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;

      h4,
      p {
        position: relative;
        width: 90%;
        margin: 0;
        line-height: 1.4;
      }

      h4 {
        font-size: 18px;
        margin-bottom: 16px;
      }
      p {
        font-size: 15px;
      }
      p.blog-date {
        text-decoration: underline;
        text-decoration-color: $accent-green;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
        margin-bottom: 5px;
      }

      @include mq($max-width: 768px) {
        h4 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }

      @include mq($max-width: 1200px) {
        h4 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }

      @include mq($max-width: 1920px) {
        h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        p {
          font-size: 15px;
        }
      }
    }

    &--img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &:hover {
      .blog__item--img {
        transform: scale(1.1);
      }
    }
  }
}
.pager-container {
  display: inline-block;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  color: black;

  &__link {
    text-align: center;
    padding: 0.6rem 1.2rem;
    color: gray;
    text-decoration: none;
    &.active {
      color: #fff;
      background-color: $accent-purple;
    }
  }
}
</style>
