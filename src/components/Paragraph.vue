<template>
    <div v-in-viewport class="paragraph" :class="customClass" v-html="text"></div>
</template>


<script>
export default {
    name: "Paragraph",
    props: {
        text: String,
        customClass: String
    }
}
</script>

<style lang="scss">
.paragraph.in-viewport {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
}
.paragraph {
    -webkit-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    opacity: 0;
    -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
            transform: translateX(-50px);
    font-family: 'Adobe Caslon Pro';
    font-size: 26px;
    margin-bottom: 30px;
}
@include mq($max-width: 1650px) {
    .paragraph {
        font-size: 22px;
        margin-bottom: 30px;
    }
}
@include mq($max-width: 1200px) {
    .paragraph {
        font-size: 18px;
        margin-bottom: 30px;
    }
}
@include mq($max-width: 992px) {
    .paragraph {
        font-size: 14px;
        margin-bottom: 30px;
    }
}

</style>