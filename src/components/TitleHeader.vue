<template>
    <h2 v-in-viewport class="title-header" :class="customClass" v-html="text"></h2>
</template>


<script>
export default {
    name: "TitleHeader",
    props: {
        text: String,
        customClass: String
    }
}
</script>

<style lang="scss">
.title-header.in-viewport {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
}
.title-header {
    -webkit-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    opacity: 0;
    -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
            transform: translateX(-50px);
    font-family: 'Adobe Caslon Pro';
    font-weight: bold;
    font-size: 80px;
    margin-bottom: 20px;
    line-height: 90px;
}
@include mq($max-width: 1650px) {
    .title-header {
        font-size: 60px;
        line-height: 70px;
        margin-bottom: 10px;
    }
}
@include mq($max-width: 1200px) {
    .title-header {
        font-size: 42px;
        line-height: 52px;
        margin-bottom: 10px;
    }
}
@include mq($max-width: 992px) {
    .title-header {
        font-size: 28px;
        line-height: 35px;
        margin-bottom: 10px;
    }
}
@include mq($max-width: 768px) {
    .title-header {
        font-size: 36px;
        line-height: 45px;
        margin-bottom: 10px;
    }
}
@include mq($max-width: 510px) {
    .title-header {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 10px;
    }
}
</style>