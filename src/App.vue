<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="app">
    <HeaderVue />
    <router-view />
    <Footer/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.app{
  font-family: 'Montserrat';
}
</style>
