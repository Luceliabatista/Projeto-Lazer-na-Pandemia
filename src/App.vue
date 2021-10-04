<template>
  <v-app>
    <AppBar />

    <v-main>
      <transition name="slide" type="animation" appear>
        <router-view/>
      </transition>  
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/shared/AppBar.vue';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    AppBar
  },
};
</script>

<style scoped>
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }

  @keyframes slide-in {
      from {
          transform: translateY(20px);
      }
      to {
          transform: translateY(0);
      }
  }
</style>
