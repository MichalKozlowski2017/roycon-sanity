<template>
  <Layout>
    <Slider></Slider>
    <!-- <Slider2></Slider2> -->
    <Section1></Section1>
    <Realizacje></Realizacje>
    <Partnerzy></Partnerzy>
    <Kontakt></Kontakt>
  </Layout>
</template>

<script>
import Slider from "../components/index/Slider";
import Slider2 from "../components/index/Slider2";
import Section1 from "../components/index/Section1";
import Realizacje from "../components/Realizacje";
import Partnerzy from "../components/Partnerzy";
import Kontakt from "../components/Kontakt";
export default {
  components: {
    Slider,
    Slider2,
    Section1,
    Realizacje,
    Partnerzy,
    Kontakt,
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "Strona główna",
  },
};
</script>

<style lang="scss"></style>
