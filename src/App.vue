<template>
  <!-- <nav>
    <SplashScreen v-if="!isSplashVisible"/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="flex flex-col min-h-screen font-mono bg-black">
    <SplashScreen v-if="!isSplashVisible"/>
    <router-view/>
  </div>

</template>
<script>
import SplashScreen from './views/SplashScreen.vue';
export default{
  components: {
    SplashScreen,
  },
  data() {
    return {
      isSplashVisible: true,
    };
  },
  watch: {
    '$route'() {
      this.checkSplashVisibility();
    },
  },
  mounted() {
    this.checkSplashVisibility();
  },
  methods: {
    checkSplashVisibility() {
      setTimeout(() => {
        this.isSplashVisible = false;
      }, 3000);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
