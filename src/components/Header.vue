<script>
export default {
  data() {
    return {
      nav: true,
    };
  },
  mounted() {
    const width = window.innerWidth;
    if (width <= 600) {
      this.nav = false;
    } else {
      this.nav = true;
    }
  },
};
</script>

<template>
  <div class="mobile justify-between fixed top-0 w-full bg-white z-10">
    <div class="lg:flex p-3 justify-between lg:px-32 px-4">
      <div class="lg:flex justify-between">
        <img class="w-10 h-10" src="../assets/logo.png" alt="" />
        <div
          v-show="nav"
          class="lg:flex w-80 text-sm justify-between lg:ml-10 text-gray"
        >
          <div class="p-3">Home</div>
          <div class="p-3">About</div>
          <div class="p-3">FAQ</div>
          <div class="p-3">Contact Us</div>
        </div>
      </div>
      <div v-show="nav" class="lg:flex justify-between text-sm">
        <div class="p-3 lg:px-6 text-blue">Sign In</div>
        <input
          type="button"
          value="Get Started"
          class="p-2 bg-blue w-40 rounded-3xl text-white"
        />
      </div>
    </div>
    <div class="absolute top-5 right-5 lg:hidden block">
      <button @click="nav = !nav">
        <img src="../assets/icons/bar.png">
      </button>
    </div>
  </div>
</template>

<style>
@media (max-width: 600px) {
  .mobile {
    display: flex;
  }
}
</style>
