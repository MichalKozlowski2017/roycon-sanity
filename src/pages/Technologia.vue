<template>
  <Layout>
    <Technologia1></Technologia1>
    <Technologia2></Technologia2>
    <Oferta4></Oferta4>
    <Kontakt></Kontakt>
  </Layout>
</template>

<script>
import Technologia1 from "../components/technologia/Technologia1";
import Technologia2 from "../components/technologia/Technologia2";
import Oferta4 from "../components/oferta/Oferta4";
import Kontakt from "../components/Kontakt";
export default {
  metaInfo: {
    title: "Technologie budowlane Roycon - dowiedz się więcej!",
    titleTemplate: "",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Poznaj najnowocześniejsze technologie budowlane stosowane przez Roycon. Inwestujemy w innowacje, aby sprostać wymaganiom klientów. Dowiedz się więcej!",
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
        content: "https://roycon.pl/technologia/",
      },
    ],
  },
  components: {
    Technologia1,
    Technologia2,
    Oferta4,
    Kontakt,
  },
};
</script>
