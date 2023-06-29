<template>
  <Layout>
    <Kontakt></Kontakt>
  </Layout>
</template>

<script>
import Kontakt from "../components/Kontakt";
export default {
  metaInfo: {
    title: "Skontaktuj się z nami - firma budowlana Roycon!",
    titleTemplate: "",
    meta: [
      { name: "author", content: "Jerzy Nowak" },
      {
        name: "description",
        content:
          "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach budowlanych. Roycon - twoje zaufanie, nasze zobowiązanie. Wejdź na stronę!",
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
        content: "https://roycon.pl/kontakt/",
      },
    ],
  },
  components: {
    Kontakt,
  },
};
</script>
