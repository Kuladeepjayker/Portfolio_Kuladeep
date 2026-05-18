<template>
    <div class="home-shell">
        <!-- Left Box -->
        <div class="hero-pane">
            <img src="../assets/B&W.png" alt="Image-developer" class="imageDiv transform transition-transform duration-500 ease-in-out hover:scale-105">
        </div>

        <!-- Right Box -->
        <div class="content-pane">

            <div class="resume-link">
                <div class="border-2 border-red-400 px-3 py-1 rounded-lg inline-block">
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
.home-shell {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    background: #000;
}

.hero-pane,
.content-pane {
    width: 100%;
    background: #000;
}

.hero-pane {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 1rem 1.5rem;
}

.content-pane {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 5rem 1.25rem 2rem;
}

.resume-link {
    position: absolute;
    top: 1rem;
    right: clamp(1rem, 4vw, 2.5rem);
    z-index: 10;
}

.resume-link a {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inboxIcon {
    width: clamp(2rem, 7vw, 3rem);
    height: clamp(2rem, 7vw, 3rem);
}

.imageDiv {
    width: min(72vw, 20rem);
    max-height: 42vh;
    object-fit: contain;
}

.textSize {
    font-size: clamp(0.65rem, 2vw, 0.85rem);
}

@media (min-width: 768px) {
    .home-shell {
        flex-direction: row;
    }

    .hero-pane,
    .content-pane {
        width: 50%;
        min-height: 100vh;
    }

    .hero-pane {
        padding: 2rem;
    }

    .content-pane {
        padding: 5rem 2rem 3rem;
    }

    .imageDiv{
        width: min(42vw, 30rem);
        max-height: min(86vh, 55rem);
    }
}
</style>
