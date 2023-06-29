<template>
  <Layout>
    <Realizacje2></Realizacje2>
  </Layout>
</template>

<script>
import Realizacje2 from "../components/Realizacje2";
export default {
  metaInfo: {
    title: "Nasze realizacje - dotychczasowe działania Roycon",
    titleTemplate: "",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Sprawdź nasze najnowsze realizacje budowlane. Roycon gwarantuje solidność wykonania i zadowolenie klienta. Zajrzyj na naszą stronę, aby zobaczyć więcej!",
      },
      {
        name: "keywords",
        content:
          "firma budowlana jelenia góra, firma budowlana Wałbrzych, firma budowlana legnica, generalny wykonawca jelenia góra, generalny wykonawca Wałbrzych, generalny wykonawca Legnica, wykonawca izodom 2000, hale stalowe jelenia góra, hale stalowe Wałbrzych, hale stalowe legnica, hale stalowe astron, domy zeroenergetyczne, budynek zeroenergetyczny",
      },
    ],
    link: [
      {
        rel: "canonical",
        content: "https://roycon.pl/realizacje/",
      },
    ],
  },
  components: {
    Realizacje2,
  },
};
</script>

<style lang="scss">
.Realizacje .category-header {
  margin-left: 170px;
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
}
</style>
