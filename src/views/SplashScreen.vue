<template>
  <div class="splash-screen" v-if="isVisible">
    <div class="splash-content transform transition duration-500 hover:scale-110">
      <img src="../assets/Brown_Logo.png" alt="Brown Logo">
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'SplashScreen',
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    // Hide the splash screen after 3 seconds
    setTimeout(() => {
      this.isVisible = false;
      this.$router.push({ name: 'HomeView' });
    }, 3000);
  },
};
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.splash-content {
  max-width: 80%; /* Adjust the width of the content */
  max-height: 80%; /* Adjust the height of the content */
  color: #fff;
  text-align: center;
}

@media (max-width: 768px) {
  .splash-content {
    max-width: 90%; /* Adjust for smaller screens */
    max-height: 90%; /* Adjust for smaller screens */
  }
}
</style>
