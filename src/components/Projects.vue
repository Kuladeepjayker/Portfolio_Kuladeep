<template>
    <div class="skills-container">
        <div class="text-left flex items-center space-x-4">
            <span @click="goBack()" class="h-9 w-9 cursor-pointer">
            <img src="../assets/arrows.png" alt="arrows" class="transform transition duration-500 hover:scale-110">
            </span>
            <h1 class="text-2xl text-white md:text-7xl transform transition duration-500 hover:scale-110">Projects</h1>
        </div>
        <div class="skills-grid mt-9 opacity-80">
            <div class="box-content h-55 w-55 p-4 bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg">
                <div class="mb-5">
                    <span class="text-white">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7178698350643335169/" target="_blank" class="text-red-400 hover:underline cursor-pointer">Vue App</a>
                        <p>It's a Railway web app. <u>Moving train parts detection system</u>. Run's on ML models, it shows broken parts on dashboard.</p>
                    </span>
                </div>
            </div>
            <div class="box-content h-55 w-55 p-4 bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg">
                <div class="mb-5">
                    <span class="text-white">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7191691445529899008/" target="_blank" class="text-red-400 hover:underline cursor-pointer">Flutter App</a>
                        <p><u>Diesel theft detection system</u> based on IOT tech. And, location tracking. Basically it's a fleet management system.</p>
                    </span>
                </div>
            </div>
            <div class="box-content h-55 w-55 p-4 bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg">
                <div class="mb-5">
                    <span class="text-white">
                        <a href="" target="_blank" class="text-red-400 hover:underline cursor-pointer">Python AnyWhere</a>
                        <p>Invitation Card Management system. Based on the data it gives <u>unique QR-code's</u> when someone scan it gives a form fill-up page and saves data in SQLite3.</p>
                    </span>
                </div>
            </div>
            <div class="box-content h-55 w-55 p-4 bg-gray-700 shadow-lg shadow-blue-500/50 rounded-lg">
                <div class="mb-5">
                    <span class="text-white">
                        <a href="" target="_blank" class="text-red-400 hover:underline cursor-pointer">UI/UX</a>
                        <p>Designed UI/UX designes for <u>3 start-up companies</u> for mobile application development.</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',
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

@media (min-width: 430px) {
    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>