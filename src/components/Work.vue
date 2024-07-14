<template>
  <div class="skills-container">
      <div class="text-left flex items-center space-x-4">
          <span @click="goBack()" class="h-9 w-9 cursor-pointer">
          <img src="../assets/arrows.png" alt="arrows" class="transform transition duration-500 hover:scale-110">
          </span>
          <h1 class="text-2xl text-white md:text-7xl space-x-5 transform transition duration-500 hover:scale-110">Work Experience</h1>
      </div>
      <div class="skills-grid mt-9 opacity-80">
          <div class="box-content h-72 w-72 p-4 bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg">
              <div class="mb-5">
                  <span class="text-white">
                      <a href="https://www.cyrrup.com/" target="_blank" class="text-red-400 hover:underline cursor-pointer">Cyrrup Solutions(3'Years)</a>
                      <p>Our Diesel Theft Detection Solution (Diesel Eye) works towards minimizing this cost,by detecting fuel theft.Daily reports containing 
                          fuel <u>inlet/outlet and theft</u> information,along with GPS location and Time Stamp are sent across to the vehicle owners via our Android App and Web Dashboard.</p>
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'WorkView',
  methods: {
      goBack(){
          this.$emit('show-section', 'mainIntro');
      }
  }

}
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.icon-wrapper {
  text-align: center;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>