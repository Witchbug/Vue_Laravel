<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import header from './Components/header.vue'


    export default {
        components: {
            'my-header': header
        },

        data() {
            return {

            }

        }
    }

</script>

<style>
    body {
        background-image: url(assets/images/geeks-2894621_1920.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
