<template>
  <div>
      <div class="text-left">
        <div>
          <h1 class="text-4xl text-white md:text-7xl">Hi, I'm Kuladeep</h1>
        </div>
        <div>
          <h3 class="text-lg md:text-2xl mt-4 text-white">Skilled in developing quality products and solving complex problems, thriving on learning 
            new technologies, and staying updated with industry trends. Proficient in the <span class="bg-gray-700 text-white">Vue.js, React.js, UI/UX and 
            Flutter frameworks</span>, excelling at designing user-friendly interfaces and ensuring seamless 
            functionality. Committed to delivering excellence and eager to leverage expertise in 
            creating innovative solutions and driving business success.
          </h3>
        </div>
        <div class="mt-9 flex justify-center md:justify-start">
          <span @click="skillsfunction()" class="icon-wrapper flex flex-col items-center cursor-pointer">
            <img src="../assets/skills.png" alt="skills" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Skills</span>
          </span>
          <span @click="projectsfunction()" class="icon-wrapper flex flex-col items-center cursor-pointer">
            <img src="../assets/project.png" alt="projects" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Projects</span>
          </span>
          <span @click="workfunction()" class="icon-wrapper flex flex-col items-center cursor-pointer">
            <img src="../assets/work.png" alt="work" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Work</span>
          </span>
          <span @click="educationfunction()" class="icon-wrapper flex flex-col items-center cursor-pointer">
            <img src="../assets/graduate.png" alt="graduate" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Study</span>
          </span>
          <span @click="infofunction()" class="icon-wrapper flex flex-col items-center cursor-pointer">
            <img src="../assets/info.png" alt="graduate" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">About</span>
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MainIntroView',

  methods: {
  skillsfunction() {
    this.$emit('show-section', 'skills');
  },
  educationfunction() {
    this.$emit('show-section', 'education');
  },
  projectsfunction() {
    this.$emit('show-section', 'projects');
  },
  workfunction() {
    this.$emit('show-section', 'work');
  },
  infofunction() {
    this.$emit('show-section', 'about');
  }
}
}
</script>

<style>
.icon-wrapper {
  display: inline-block;
  height: 3rem;
  width: 3rem;
  margin-top: 1rem;
  margin-right: 1rem;
  text-align: center;
}

@media (min-width: 768px) {
  .icon-wrapper {
    height: 5rem;
    width: 5rem;
    margin-top: 6rem;
    margin-right: 6rem;
  }
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
</style>