<template>
  <Layout>
    <h1>BLOG - TEST</h1>
    <div v-for="item in $static.articles.edges" :key="item.id">
      <h3>{{ item.node.title }}</h3>
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
        }
      }
    }
  }
}
</static-query>

<script>
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
  data() {
    return {
      articles: [],
    };
  },
};
</script>
