<template>
    <div class="skills-container">
        <div class="text-left flex items-center space-x-4">
            <span @click="goBack()" class="h-9 w-9 cursor-pointer">
            <img src="../assets/arrows.png" alt="arrows" class="transform transition duration-500 hover:scale-110">
            </span>
            <h1 class="text-2xl text-white md:text-7xl transform transition duration-500 hover:scale-110">Study</h1>
        </div>
        <div class="skills-grid mt-9 opacity-80">
            <div class="box-content h-72 w-72 p-4 bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg">
                <div class="mb-5">
                    <span class="text-white">
                        <a href="https://www.kietgroup.com/" target="_blank" class="text-red-400 hover:underline cursor-pointer">Bachelor's Degree(4'Years)</a>
                        <p>I pursued my studies in <u>Computer Science Engineering (CSE)</u> at KIET College, under JNTU Kakinada, from 2015 to 2019. During my time there,
                            I gained extensive knowledge in coding and received a certificate in a coding competition. My final year project focused on security management.</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EducationView',
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
</style>