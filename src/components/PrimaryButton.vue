<template>

<g-link v-in-viewport :to="link" class="primary-button" :target="blank ? '_blank' : ''">
    <button>{{text}}</button>
</g-link>
  
</template>


<script>
export default {
  name: "PrimaryButton",
  props: {
      text: String,
      link: String,
      blank: Boolean
  }
}
</script>

<style lang="scss">

.primary-button.in-viewport {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
}
.primary-button {
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  opacity: 0;
  -webkit-transform: translateX(-50px);
      -ms-transform: translateX(-50px);
          transform: translateX(-50px);
  button {
    cursor: pointer;
    padding: 15px 30px;
    background-color: transparent;
    border: 3px solid #000;
    font-family: "Brandon Grotesque",Arial,sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    color: #000;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    &:hover {
      background-color: #000;
      color: #fff;
    }
    &:focus {
      outline: none;
      -webkit-box-shadow: none;
              box-shadow: none;
    }
  }
}
@include mq($max-width: 1200px) {
.primary-button {
  button {
    padding: 8px 20px;
    font-size: 16px;
    border: 0.2vw solid #000;
    }
  }
}

</style>