<template>
  <Layout>
    <Oferta1></Oferta1>
    <Oferta2></Oferta2>
    <Slider></Slider>
    <Oferta3></Oferta3>
    <!-- <Oferta4></Oferta4> -->
    <Oferta5></Oferta5>
    <Kontakt></Kontakt>
  </Layout>
</template>

<script>
import Oferta1 from "../components/oferta/Oferta1";
import Oferta2 from "../components/oferta/Oferta2";
import Slider from "../components/oferta/Slider";
import Oferta3 from "../components/oferta/Oferta3";
import Oferta4 from "../components/oferta/Oferta4";
import Oferta5 from "../components/oferta/Oferta5";
import Kontakt from "../components/Kontakt";
export default {
  metaInfo: {
    title: "Firma budowlana Roycon - oferta dla inwestorów",
    titleTemplate: "",
    name: "description",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Sprawdź szeroką ofertę firmy budowlanej Roycon - od projektowania po realizację. Gwarantujemy jakość i terminowość. Kliknij i dowiedz się więcej!",
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
        content: "https://roycon.pl/oferta/",
      },
    ],
  },
  components: {
    Oferta1,
    Oferta2,
    Slider,
    Oferta3,
    Oferta4,
    Oferta5,
    Kontakt,
  },
};
</script>
