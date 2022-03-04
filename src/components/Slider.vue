<script>
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    // carousel settings
    slides: [
      {
        name: "Femi Jamal",
        desc: "Anytime my potential customers dobt the genuinity of my business but really want to need the product, we use TrustPaddi and they are very reliable.",
        img: "testifier1.png",
      },
      {
        name: "Joyous T",
        desc: "We have no regrets! I will refer everyone I know. Without Trustpaddi, we would have gone bankrupt by now.",
        img: "Ellipse.png",
      },
      {
        name: "Steph Crown",
        desc: "Trustpaddi was worth a fortune to my company. I will let my mum know about this, she could really make use of Trustpaddi! Trustpaddi has completely surpassed our expectations.",
        img: "Ellipse1.png",
      },
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="2000">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item bg-white rounded-3xl m-6 p-5 px-8">
        <div class="flex my-5">
          <img :src="'/testimonials/' + slide.img" class="w-10 h-9" alt="" />
          <div class="px-4 pt-1 text-blue font-bold">{{ slide.name }}</div>
        </div>
        <div class="text-sm text-left text-gray">
          {{ slide.desc }}
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__prev,
.carousel__next {
  color: black !important;
}
.carousel__item {
  box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.06);
  /* border-radius: 24px; */
}
</style>
