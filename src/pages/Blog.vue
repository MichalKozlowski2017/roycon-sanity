<template>
  <Layout>
    <h1>BLOG - TEST</h1>
    <div v-for="item in $static.articles.edges" :key="item.id" class="blog_item">
      <h3>Obrazek ponizej</h3>
      <div class="blog_item--img">
        <g-image
          v-in-viewport
          v-if="firstImage(item.node._rawBlockContent)"
          :src="generateUrl(firstImage(item.node._rawBlockContent).asset._ref)"
        />
      </div>

      <g-link :to="item.node.slug.current">Read more</g-link>
    </div>
  </Layout>
</template>

<static-query>
query {
  articles: allSanityArticle {
    edges {
      node {
        title,
        excerpt,
        slug {
          current
        },
        _rawBlockContent
      }
    }
  }
}
</static-query>

<script>
import { urlFor } from "../lib/sanity";
import { h } from "vue";
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
  components: {},
  methods: {
    firstImage(blockContent) {
      if (Array.isArray(blockContent)) {
        return blockContent.find((block) => block._type === "image");
      }
      return null;
    },
    generateUrl: (url) => {
      console.log(urlFor(url).url());
      return urlFor(url).url();
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
.blog_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  &--img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
