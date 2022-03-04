<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <HeaderVue />
    <router-view />
    <Footer/>
  </div>
</template>

<style>
</style>
