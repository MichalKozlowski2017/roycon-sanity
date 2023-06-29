<template>
  <Layout>
    <Partnerzy></Partnerzy>
    <Slider></Slider>
  </Layout>
</template>

<script>
import Partnerzy from "../components/Partnerzy";
import Slider from "../components/partnerzy/Slider";
export default {
  metaInfo: {
    title: "Partnerzy firmy budowlanej Roycon - sprawdź!",
    titleTemplate: "",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Poznaj naszych zaufanych partnerów, z którymi współpracuje firma budowlana Roycon. Dołącz do grona naszych zadowolonych klientów. Sprawdź więcej na stronie!",
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
        content: "https://roycon.pl/partnerzy/",
      },
    ],
  },
  components: {
    Partnerzy,
    Slider,
  },
};
</script>
