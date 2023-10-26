<template>
  <footer>
    <div class="footer-bottom">
      <div class="copyright">© 2019 Firma Budowlana ROYCON sp. z o.o.</div>
      <div class="author">
        <p>Projekt graficzny:</p>
        <g-image v-in-viewport src="~/assets/img/ap.png" />
      </div>
      <Socials />
    </div>

    <div class="links">
      <div class="links__group">
        <h1>Usługi Projektowe</h1>
        <ul>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-legnica/">Legnica</a></li>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-walbrzych/">Wałbrzych</a></li>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-zlotoryja/">Złotoryja</a></li>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-boleslawiec/">Bolesławiec</a></li>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-zgorzelec/">Zgorzelec</a></li>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-wroclaw/">Wrocław</a></li>
          <li><a href="https://www.roycon.pl/uslugi-projektowe-kamienna-gora/">Kamień Góra</a></li>
        </ul>
      </div>
      <div class="links__group">
        <h1>Firma Budowlana</h1>
        <ul>
          <li><a href="https://www.roycon.pl/firma-budowlana-legnica/">Legnica</a></li>
          <li><a href="https://www.roycon.pl/firma-budowlana-walbrzych/">Wałbrzych</a></li>
          <li><a href="https://www.roycon.pl/firma-budowlana-zlotoryja/">Złotoryja</a></li>
          <li><a href="https://www.roycon.pl/firma-budowlana-boleslawiec/">Bolesławiec</a></li>
          <li><a href="https://www.roycon.pl/firma-budowlana-zgorzelec/">Zgorzelec</a></li>
          <li><a href="https://www.roycon.pl/firma-budowlana-wroclaw/">Wrocław</a></li>
          <li><a href="https://www.roycon.pl/firma-budowlana-kamienna-gora/">Kamień Góra</a></li>
        </ul>
      </div>
      <div class="links__group">
        <h1>Hale Przemysłowe</h1>
        <ul>
          <li><a href="https://www.roycon.pl/hale-przemyslowe-legnica/">Legnica</a></li>
          <li><a href="https://www.roycon.pl/hale-przemyslowe-walbrzych/">Wałbrzych</a></li>
          <li><a href="https://www.roycon.pl/hale-przemyslowe-zlotoryja/">Złotoryja</a></li>
          <li><a href="https://www.roycon.pl/hale-przemyslowe-boleslawiec/">Bolesławiec</a></li>
          <li><a href="https://www.roycon.pl/hale-przemyslowe-wroclaw/">Wrocław</a></li>
          <li><a href="https://www.roycon.pl/hale-przemyslowe-kamienna-gora/">Kamień Góra</a></li>
        </ul>
      </div>
      <div class="links__group">
        <h1>Hale Stalowe</h1>
        <ul>
          <li><a href="https://www.roycon.pl/hale-stalowe-legnica/">Legnica</a></li>
          <li><a href="https://www.roycon.pl/hale-stalowe-walbrzych/">Wałbrzych</a></li>
          <li><a href="https://www.roycon.pl/hale-stalowe-zlotoryja/">Złotoryja</a></li>
          <li><a href="https://www.roycon.pl/hale-stalowe-boleslawiec/">Bolesławiec</a></li>
          <li><a href="https://www.roycon.pl/hale-stalowe-wroclaw/">Wrocław</a></li>
          <li><a href="https://www.roycon.pl/hale-stalowe-kamienna-gora/">Kamień Góra</a></li>
        </ul>
      </div>
      <div class="links__group">
        <h1>Hale Systemowe</h1>
        <ul>
          <li><a href="https://www.roycon.pl/hale-systemowe-legnica/">Legnica</a></li>
          <li><a href="https://www.roycon.pl/hale-systemowe-walbrzych/">Wałbrzych</a></li>
          <li><a href="https://www.roycon.pl/hale-systemowe-zlotoryja/">Złotoryja</a></li>
          <li><a href="https://www.roycon.pl/hale-systemowe-boleslawiec/">Bolesławiec</a></li>
          <li><a href="https://www.roycon.pl/hale-systemowe-wroclaw/">Wrocław</a></li>
          <li><a href="https://www.roycon.pl/hale-systemowe-kamienna-gora/">Kamień Góra</a></li>
        </ul>
      </div>
      <div class="links__group">
        <h1>Roboty Ziemne</h1>
        <ul>
          <li><a href="https://www.roycon.pl/roboty-ziemne-legnica/">Legnica</a></li>
          <li><a href="https://www.roycon.pl/roboty-ziemne-walbrzych/">Wałbrzych</a></li>
          <li><a href="https://www.roycon.pl/roboty-ziemne-zlotoryja/">Złotoryja</a></li>
          <li><a href="https://www.roycon.pl/roboty-ziemne-boleslawiec/">Bolesławiec</a></li>
          <li><a href="https://www.roycon.pl/roboty-ziemne-zgorzelec/">Zgorzelec</a></li>
          <li><a href="https://www.roycon.pl/roboty-ziemne-wroclaw/">Wrocław</a></li>
          <li><a href="https://www.roycon.pl/roboty-ziemne-kamienna-gora/">Kamień Góra</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import Socials from "../components/Socials";
export default {
  name: "Footer",
  components: {
    Socials,
  },
};
</script>

<style lang="scss">
footer {
  position: relative;
  padding: 60px 0;
  display: flex;
  flex-direction: column-reverse;

  .copyright {
    font-family: "Adobe Caslon Pro", serif;
    font-weight: normal;
    font-size: 14px;
  }
  .author {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: -20px;
    img {
      width: 28px;
      height: 28px;
      margin-left: 10px;
    }
  }
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 80%;
  margin: 200px auto 0 auto;
  .socials {
    left: -50px;
    top: -150px;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @include mq($max-width: 768px) {
    .footer-bottom {
      margin: 20px auto 0 auto;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .socials {
      left: -30px;
      top: -50px;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    width: 100%;
    margin-bottom: 60px;
    border-top: 1px solid #e8e8e8;
    padding-top: 40px;

    &__group {
      min-width: 150px;
      width: 16.6%;
      text-align: center;
      h1 {
        font-size: 14px;
        color: $accent-purple;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
          font-size: 10px;
          list-style-type: none;
          margin: 0;
          padding: 0;

          a {
            color: #a3a3a3;
            text-decoration: none;
            line-height: 1.2;
          }
        }
      }
    }
  }

  @include mq($max-width: 1130px) {
    .links {
      .links__group {
        min-width: 33%;
        margin-bottom: 40px;
      }
    }
  }

  @include mq($max-width: 460px) {
    .links {
      .links__group {
        min-width: 45%;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
