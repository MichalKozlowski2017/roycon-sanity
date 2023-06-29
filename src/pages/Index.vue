<template>
  <Layout>
    <Slider></Slider>
    <!-- <Slider2></Slider2> -->
    <Section1></Section1>
    <RealizacjeHome></RealizacjeHome>
    <Partnerzy></Partnerzy>
    <Kontakt></Kontakt>
  </Layout>
</template>

<script>
import Slider from "../components/index/Slider";
import Slider2 from "../components/index/Slider2";
import Section1 from "../components/index/Section1";
import RealizacjeHome from "../components/RealizacjeHome";
import Partnerzy from "../components/Partnerzy";
import Kontakt from "../components/Kontakt";

export default {
  components: {
    Slider,
    Slider2,
    Section1,
    RealizacjeHome,
    Partnerzy,
    Kontakt,
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "Generalny wykonawca Roycon - strona główna",
    titleTemplate: "",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Zapraszamy na stronę główną Roycon - Twojego zaufanego partnera w budowie. Zobacz naszą ofertę i realizacje. Kliknij i dowiedz się więcej!",
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
        content: "https://roycon.pl/",
      },
    ],
  },
};
</script>

<style lang="scss"></style>
