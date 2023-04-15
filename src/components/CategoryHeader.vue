<template>
    <div v-in-viewport class="category-header" :class="customClass" v-html="text"></div>
</template>


<script>
export default {
    name: "CategoryHeader",
    props: {
        text: String,
        customClass: String
    }
}
</script>

<style lang="scss">
.category-header.in-viewport {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
}
.category-header {
    -webkit-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    opacity: 0;
    -webkit-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
            transform: translateX(-50px);
    color: $accent-purple;
    font-family: "Brandon Grotesque",Arial,sans-serif;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 30px;
    position: relative;
    text-transform: uppercase;
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 5px;
        width: 60px;
        background-color: $accent-green;
    }
}
@include mq($max-width: 1650px) {
    .category-header {
        font-size: 26px;
        margin-bottom: 30px;
        &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            height: 3px;
            width: 60px;
            background-color: $accent-green;
        }
    }
}
@include mq($max-width: 1200px) {
    .category-header {
        font-size: 20px;
        margin-bottom: 30px;
        &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            height: 3px;
            width: 40px;
            background-color: $accent-green;
        }
    }
}
@include mq($max-width: 992px) {
    .category-header {
        font-size: 14px;
        margin-bottom: 30px;
        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            height: 2px;
            width: 30px;
            background-color: $accent-green;
        }
    }
}
@include mq($max-width: 768px) {
    .category-header {
        font-size: 14px;
        margin-bottom: 30px;
        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            height: 2px;
            width: 30px;
            background-color: $accent-green;
        }
    }
}
</style>