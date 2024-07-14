<template>
  <div class="skills-container">
    <div class="text-left flex items-center space-x-4">
      <span @click="goBack" class="h-9 w-9 cursor-pointer">
        <img src="../assets/arrows.png" alt="arrows" class="transform transition duration-500 hover:scale-110">
      </span>
      <h1 class="text-2xl text-white md:text-7xl transform transition duration-500 hover:scale-110">Skills</h1>
    </div>
    <div class="skills-grid mt-9">
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/python.png" alt="Python" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">Python</span>
      </div>
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/document.png" alt="document" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">Vue.js</span>
      </div>
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/structure.png" alt="react" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">React.js</span>
      </div>
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/flutter.png" alt="flutter" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">Flutter</span>
      </div>
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/java-script.png" alt="javascript" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">JavaScript</span>
      </div>
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/html-5.png" alt="html" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">HTML</span>
      </div>
      <div class="icon-wrapper flex flex-col items-center cursor-pointer">
        <img src="../assets/css-3.png" alt="css" class="transform transition duration-500 hover:scale-110">
        <span class="textSize text-white">CSS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsView',
  methods: {
    goBack() {
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
@media (max-width: 450px){
  .textSize {
    font-size:small;
  }
}

@media (max-width: 768px) {
  .textSize {
    font-size: smaller
  }
}

@media (min-width: 450px) {
  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>