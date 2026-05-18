<template>
  <div class="intro-container">
      <div class="text-left">
        <div>
          <h1 class="intro-title text-white">Hi, I'm Kuladeep</h1>
        </div>
        <div>
          <h3 class="intro-copy mt-4 text-white">Skilled in developing quality products and solving complex problems, thriving on learning 
            new technologies, and staying updated with industry trends. Proficient in the <span class="bg-gray-700 text-white">Vue.js, React.js, UI/UX and 
            Flutter frameworks</span>, excelling at designing user-friendly interfaces and ensuring seamless 
            functionality. Committed to delivering excellence and eager to leverage expertise in 
            creating innovative solutions and driving business success.
          </h3>
        </div>
        <div class="intro-actions">
          <span @click="skillsfunction()" class="nav-icon flex flex-col items-center cursor-pointer">
            <img src="../assets/skills.png" alt="skills" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Skills</span>
          </span>
          <span @click="projectsfunction()" class="nav-icon flex flex-col items-center cursor-pointer">
            <img src="../assets/project.png" alt="projects" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Projects</span>
          </span>
          <span @click="workfunction()" class="nav-icon flex flex-col items-center cursor-pointer">
            <img src="../assets/work.png" alt="work" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Work</span>
          </span>
          <span @click="educationfunction()" class="nav-icon flex flex-col items-center cursor-pointer">
            <img src="../assets/graduate.png" alt="graduate" class=" transform transition duration-500 hover:scale-110">
            <span class="textSize text-white">Study</span>
          </span>
          <span @click="infofunction()" class="nav-icon flex flex-col items-center cursor-pointer">
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

<style scoped>
.intro-container {
  width: min(100%, 48rem);
}

.intro-title {
  font-size: clamp(2.25rem, 8vw, 4.5rem);
  line-height: 1.05;
}

.intro-copy {
  font-size: clamp(1rem, 2.4vw, 1.5rem);
  line-height: 1.5;
}

.intro-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4.25rem, 1fr));
  gap: clamp(1rem, 4vw, 2.5rem);
  margin-top: clamp(2rem, 8vh, 5rem);
}

.nav-icon {
  min-height: 4.75rem;
  text-align: center;
}

.nav-icon img {
  width: clamp(3rem, 8vw, 5rem);
  height: clamp(3rem, 8vw, 5rem);
  object-fit: contain;
}

.textSize {
  font-size: clamp(0.75rem, 2vw, 0.95rem);
}

@media (min-width: 768px) {
  .intro-actions {
    grid-template-columns: repeat(5, max-content);
    justify-content: start;
  }
}
</style>
