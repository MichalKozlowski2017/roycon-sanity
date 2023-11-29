<template>
  <section class="section index-seo-content">
    <div class="accordion">
      <TitleHeaderH1 class="big-heading" :text="'Firma budowlana Jelenia Góra'"></TitleHeaderH1>
      <Paragraph
        :text="
          'Potrzebujesz kompleksowego wsparcia w zakresie usług projektowych? W takim razie Roycon jako firma budowlana w Jeleniej Górze będzie najlepszym możliwym wyborem. Działamy już od wielu lat w branży budowlanej, świadcząc usługi podwykonawstwa i nie tylko. Jesteśmy przedsiębiorstwem, które na pierwszym miejscu stawia klient. Jeśli cenisz sobie kompleksowość usług i pełen profesjonalizm, koniecznie'
        "
      >
      </Paragraph>
      <disclosure-toggler :options="options">
        <h2 class="purple-heading">
          Profesjonalna firma budowlana w Jeleniej Górze - dlaczego Roycon?
        </h2>
      </disclosure-toggler>
      <disclosure-content class="accordion--content">
        <div>
          <Paragraph
            class="accordion--paragraph"
            :text="
              'Jest wiele powodów, dla których warto zdecydować się na współpracę z ekspertami Roycon. Stawiamy na innowacyjne rozwiązania, które przekładają się na estetykę wykonywanych projektów oraz prac budowlanych. Dbamy o to, aby stawiane konstrukcje były energooszczędne, co przekłada się na korzyści ekonomiczne i ekologiczne. Kilka czynników, które determinują opłacalność nawiązania współpracy z naszym przedsiębiorstwem to:'
            "
          ></Paragraph>

          <ul>
            <li>
              ponad 30-letnie doświadczenie w branży budowlanej i w zakresie wznoszenia konstrukcji
              stalowych,
            </li>
            <li>
              wiele pozytywnie zakończonych inwestycji, które wiążą się z pełnym zadowoleniem
              inwestora,
            </li>
            <li>nieposzlakowana opinia na rynku budowlanym,</li>
            <li>
              współpraca z najlepszymi ekspertami w swojej dziedzinie, dzięki czemu zapewniamy
              idealne projekty i finalne efekty dopasowane do potrzeb inwestora,
            </li>
            <li>profesjonalizm i szybkość działania - jako firma</li>
          </ul>
          <Paragraph
            class="accordion--paragraph"
            :text="
              'Nasza firma budowlana w Jeleniej Górze skupia się przede wszystkim na projektowaniu, budowaniu oraz nadzorowaniu prac związanych ze wznoszeniem konstrukcji stalowych i nie tylko. Dbamy zawsze o to, aby zadowolić każdego klienta - głównie przez indywidualne podejście do każdego projektu oraz możliwość wykorzystania nietypowych technologii budowlanych, zależnie od potrzeb.'
            "
          >
          </Paragraph>
        </div>
      </disclosure-content>

      <disclosure-toggler :options="options">
        <h2 class="purple-heading">
          Kompleksowość, profesjonalizm i innowacyjność - firma budowlana w Jeleniej Górze
        </h2>
      </disclosure-toggler>
      <disclosure-content class="accordion--content">
        <div>
          <Paragraph
            class="accordion--paragraph"
            :text="
              'Roycon to strzał w dziesiątkę, jeśli cenisz sobie dostęp do innowacyjnych technologi budowlanych, najlepszych specjalistów w branży oraz indywidualne podejście do każdego projektu. W firmie budowlanej w Jeleniej Górze - Roycon przede wszystkim próbujemy ustalić potrzeby inwestora, a dopiero później proponujemy konkretne rozwiązania.'
            "
          >
          </Paragraph>
          <Paragraph
            class="accordion--paragraph"
            :text="
              'Działamy też jako generalny wykonawca wraz z usługami projektowymi. To oznacza, że firma budowlana w Jeleniej Górze jest zespołem wysoce wykwalifikowanych osób, które wiedzą, jak prowadzić projektu budowlane od początku do końca. Kontaktując się z nami, musisz ustalić z ekspertem swój budżet na realizację inwestycji oraz potrzeby przedsiębiorstwa, dla którego, np. wzniesiemy halę stalową. Zdecyduj się na współpracę z nami, jeśli potrzebujesz maksimum oddania specjalistów i ekspresowej realizacji usług związanych z inwestycją budowlaną.'
            "
          >
          </Paragraph>
        </div>
      </disclosure-content>

      <disclosure-toggler :options="options">
        <h2 class="purple-heading">
          Usługi firmy budowlanej - Jelenia Góra. Wspólnie zrealizujemy najnowocześniejsze projekty!
        </h2>
      </disclosure-toggler>
      <disclosure-content class="accordion--content">
        <div>
          <Paragraph
            class="accordion--paragraph"
            :text="
              'Mamy wysoce doświadczonych i wykwalifikowanych specjalistów, którzy wiedzą, jak zająć się nawet najbardziej skomplikowanymi projektami w zakresie budownictwa. Wiemy, jak projektować i wznosić obiekty budowlane tak, aby były: bezpieczne, przyjazne dla środowiska naturalnego oraz stosunkowo niedrogie w codziennej eksploatacji.'
            "
          >
          </Paragraph>
          <Paragraph
            class="accordion--paragraph"
            :text="
              'Wystarczy, że skontaktujesz się z naszymi ekspertami w firmie budowlanej. Jelenia Góra to tylko jedna z wielu lokalizacji, gdzie działamy jako zespół wyjątkowo uzdolnionych ekspertów z zakresu budownictwa, projektowania i architektury.'
            "
          >
          </Paragraph>
        </div>
      </disclosure-content>
    </div>
  </section>
</template>

<script>
import CategoryHeader from "~/components/CategoryHeader";
import TitleHeaderH1 from "~/components/TitleHeaderH1";
import Paragraph from "~/components/Paragraph";

export default {
  name: "Index Seo Content",
  components: {
    CategoryHeader,
    TitleHeaderH1,
    Paragraph,
  },
  data() {
    return {
      options: {
        active: true, // default true
        ease: "ease",
        duration: 600,
      },
    };
  },
};
</script>

<style lang="scss">
.index-seo-content {
  position: relative;
  width: 100%;
  max-width: 1270px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 100px;

  &__title {
    margin-left: 10%;
  }
  &__text {
    margin-top: 150px;
    margin-bottom: 80px;
    width: 40%;
  }

  ul,
  ol {
    font-family: "Adobe Caslon Pro";
  }

  .accordion {
    z-index: 1;
    position: relative;
    overflow: visible;
    margin: 0 auto;

    padding-left: 20px;
    padding-right: 20px;

    @include mq($min-width: 768px) {
      padding-left: 60px;
      padding-right: 60px;
      width: calc(100% - 160px);
    }

    @include mq($min-width: 1024px) {
      padding-left: 60px;
      padding-right: 60px;
      width: calc(100% - 240px);
    }

    &--paragraph {
      /* font-size: 0.8em; */
    }
  }

  p {
    padding-bottom: 20px;
    padding-top: 20px;
  }

  .vue-disclosure-toggler {
    cursor: pointer;
  }

  li {
    margin-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

    @include mq($min-width: 1024px) {
      font-size: 20px;
    }
    @include mq($min-width: 1600px) {
      font-size: 26px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }

  .purple-heading {
    color: #732d67;
    font-family: "Brandon Grotesque", Arial, sans-serif;
    font-weight: 700;
    font-size: 17px;
    position: relative;
    text-transform: uppercase;
    padding-top: 40px;
    margin-bottom: 30px;
    display: block;
    overflow: visible;
    line-height: 1.5;

    @include mq($min-width: 1200px) {
      font-size: 19px;
    }

    @include mq($min-width: 1600px) {
      font-size: 28px;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: #4aa37b;
      display: block;
      width: 61px;
      height: 5px;
      bottom: -9px;
      left: 0;
      z-index: 10;
      transition: width 0.5s;
    }

    &:hover {
      &:after {
        width: 100px;
      }
    }
  }
}
</style>
