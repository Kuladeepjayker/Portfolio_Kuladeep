<template>
    <div class="flex flex-col md:flex-row h-screen">
        <!-- Left Box -->
        <div class="bg-black flex items-center justify-center md:w-1/2 w-full">
            <img src="../assets/Untitled.png" alt="Image-developer" class="imageDiv transform transition-transform duration-500 ease-in-out scale-75 hover:scale-100">
        </div>

        <!-- Right Box -->
        <div class="bg-black flex items-center justify-center md:w-1/2 w-full p-8">

            <div class="icon-wrapper absolute top-4">
                <div class="mt-9 border-2 border-red-400 px-3 py-1 rounded-lg inline-block">
                    <a :href="pdfUrl" download="KuladeepResume.pdf">
                        <img src="../assets/inbox.png" alt="Resume" class="inboxIcon transform transition duration-500 hover:scale-110">
                        <span class="textSize text-white">Resume</span>
                    </a>
                </div>
            </div>

            <MainIntro v-if="currentSection === 'mainIntro'" @show-section="showSection"/>
            <EducationView v-if="currentSection === 'education'" @show-section="showSection"/>
            <ProjectsView v-if="currentSection === 'projects'" @show-section="showSection"/>
            <WorkView v-if="currentSection === 'work'" @show-section="showSection"/>
            <SkillsView v-if="currentSection === 'skills'" @show-section="showSection"/>
            <AboutView v-if="currentSection === 'about'" @show-section="showSection"/>
        </div>
    </div>
</template>

<script>
import MainIntro from '@/components/MainIntro.vue'
import EducationView from '@/components/Education.vue'
import ProjectsView from '@/components/Projects.vue'
import WorkView from '@/components/Work.vue'
import SkillsView from '@/components/SkillsView.vue'
import AboutView from '@/components/About.vue'

export default {
    name: 'HomeView',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            currentSection: 'mainIntro',
            pdfUrl: `${process.env.BASE_URL}assets/KuladeepResume.pdf`,
            pdfFileName: 'KuladeepResume.pdf'
        }
    },
    components: {
        MainIntro,
        EducationView,
        ProjectsView,
        WorkView,
        SkillsView,
        AboutView
    },
    methods: {
        showSection(section) {
            this.currentSection = section;
        },
    }
}
</script>

<style scoped>

  
  @media (min-width: 768px) {
    .icon-wrapper {
      height: 1rem;
      width: 1rem;
      margin-top: 1rem;
      margin-left: 45rem;
    }
    .inboxIcon{
        height: 3rem;
        width: 3rem;
    }
    .imageDiv{
        width: 30rem;
        height: 55rem;
    }
}
@media (max-width: 520px){
    .icon-wrapper {
      height: 1rem;
      width: 1rem;
      margin-top: 1rem;
      margin-left: 15rem;
    }
    .inboxIcon{
        height: 2rem;
        width: 2rem;
    }
}

@media (max-width: 520px){
    .imageDiv{
        width: 15rem;
        height: 30rem;
    }
}

@media (max-width: 768px) {
  .textSize {
    font-size: smaller
  }
}
@media (max-width: 768px) {
    .textSize {
        font-size:x-small;
    }
}
</style>