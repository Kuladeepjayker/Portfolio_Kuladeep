<template>
  <div class="skills-container">
      <div class="text-left flex items-center space-x-4">
          <span @click="goBack()" class="h-9 w-9 cursor-pointer">
          <img src="../assets/arrows.png" alt="arrows" class="transform transition duration-500 hover:scale-110">
          </span>
          <h1 class="text-2xl text-white md:text-7xl space-x-5 transform transition duration-500 hover:scale-110">Work Experience</h1>
      </div>
      <div class="skills-grid mt-9 opacity-80">
          <div
            v-for="experience in experiences"
            :key="experience.company"
            class="work-card bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg"
          >
              <div class="text-white">
                  <div class="card-header">
                    <a
                      v-if="experience.link"
                      :href="experience.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="company-name text-red-400 hover:underline cursor-pointer"
                    >
                      {{ experience.company }}
                    </a>
                    <span v-else class="company-name text-red-400">{{ experience.company }}</span>
                    <span class="duration">{{ experience.duration }}</span>
                  </div>
                  <p class="location">{{ experience.location }}</p>
                  <p class="role">{{ experience.role }}</p>
                  <p class="description">{{ experience.description }}</p>
                  <ul v-if="experience.points.length" class="points">
                    <li v-for="point in experience.points" :key="point">{{ point }}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'WorkView',
  data() {
    return {
      experiences: [
        {
          company: 'Cyrrup Solutions Pvt Ltd',
          location: 'Hyderabad, India',
          duration: 'Feb 2021 - Feb 2024',
          role: 'Front-End Engineer',
          link: 'https://www.cyrrup.com/',
          description: 'Spearheaded deployment of cutting-edge fleet management and diesel eye solutions, using Vue.js and JavaScript for performant, seamless user experiences.',
          points: [
            'Delivered frontend interfaces for diesel theft detection, fleet tracking, and reporting workflows.',
            'Integrated cloud deployment workflows and supported Google Cloud Platform based solutions.',
            'Focused on scalable UI performance, clean functionality, and reliable product delivery.'
          ]
        },
        {
          company: 'TCCentral INC',
          location: 'Los Altos, CA',
          duration: 'Sep 2024 - Feb 2025',
          role: 'Data Annotator & UI/UX Developer',
          link: '',
          description: 'Led projects bridging UI/UX development and data-driven decision-making, creating intuitive interfaces while supporting ML model strategy.',
          points: [
            'Annotated baseball and football player cards and slabs using Roboflow.',
            'Performed object detection labeling, bounding box creation, and classification tasks.',
            'Collaborated with ML teams to refine annotation guidelines and improve dataset consistency.',
            'Organized and preprocessed datasets for efficient model training workflows.'
          ]
        },
        {
          company: 'HTC Global Services',
          location: 'India',
          duration: 'Mar 2025 - Present',
          role: 'Frontend Engineer',
          link: 'https://www.htcinc.com/',
          description: 'Current frontend engineering role focused on building responsive, user-facing interfaces and maintaining clean product experiences.',
          points: []
        }
      ]
    }
  },
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
  width: min(100%, 68rem);
  padding: 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 4vw, 2rem);
  width: 100%;
}

.work-card {
  width: 100%;
  min-height: 100%;
  padding: clamp(1rem, 4vw, 1.5rem);
  text-align: left;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.company-name {
  font-weight: 700;
  line-height: 1.3;
}

.duration,
.location {
  color: #d1d5db;
  font-size: 0.85rem;
}

.role {
  margin-top: 0.75rem;
  font-weight: 700;
}

.description {
  margin-top: 0.75rem;
  line-height: 1.5;
}

.points {
  margin-top: 0.75rem;
  padding-left: 1.2rem;
  list-style: disc;
  line-height: 1.45;
}

.points li + li {
  margin-top: 0.4rem;
}

.icon-wrapper {
  text-align: center;
}

@media (min-width: 768px) {
  .card-header {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .duration {
    flex: 0 0 auto;
    text-align: right;
  }
}
</style>
