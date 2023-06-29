<template>
  <Layout>
    <Ofirmie1></Ofirmie1>
    <Ofirmie2></Ofirmie2>
    <div class="ofirmie2__image3">
      <g-image v-in-viewport src="~/assets/img/ofirmie_3.jpg" />
    </div>
  </Layout>
</template>

<script>
import Ofirmie1 from "../components/o_firmie/Ofirmie1";
import Ofirmie2 from "../components/o_firmie/Ofirmie2";
export default {
  metaInfo: {
    title: "O Więcej informacji o nas - poznaj firmę Roycon!",
    titleTemplate: "",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Poznaj naszą firmę - Roycon to doświadczenie, profesjonalizm i najwyższe standardy w branży budowlanej. Wejdź na stronę i dowiedz się więcej o nas!",
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
        content: "https://roycon.pl/o-firmie/",
      },
    ],
  },
  components: {
    Ofirmie1,
    Ofirmie2,
  },
};
</script>

<style lang="scss">
.ofirmie2__image3 {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
