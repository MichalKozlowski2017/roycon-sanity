<template>
  <Layout>
    <Technologia1></Technologia1>
    <Technologia2></Technologia2>
    <Oferta4></Oferta4>
    <Kontakt></Kontakt>
  </Layout>
</template>

<script>
import Technologia1 from "../components/technologia/Technologia1"
import Technologia2 from "../components/technologia/Technologia2"
import Oferta4 from "../components/oferta/Oferta4"
import Kontakt from "../components/Kontakt"
export default {
  metaInfo: {
    title: 'Technologia'
  },
  components: {
    Technologia1,
    Technologia2,
    Oferta4,
    Kontakt
  }
}
</script>
