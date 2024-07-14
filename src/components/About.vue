<template>
    <div class="skills-container">
        <div class="text-left flex items-center space-x-4">
            <span @click="goBack()" class="h-9 w-9 cursor-pointer">
                <img src="../assets/arrows.png" alt="arrows" class="transform transition duration-500 hover:scale-110">
            </span>
            <h1 class="text-2xl md:text-7xl text-white transform transition duration-500 hover:scale-110">Information</h1>
        </div>
        <div class="text-white mt-9 opacity-80">
            <div>
                <h1 class="text-5xl font-bold text-green-300">Get In Touch</h1>
                <p class="text-2xl mt-9 text-gray-300">I'm actively connecting with peers who are into My Skill Set, Front-end Development, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <div class="mt-9 border-2 border-green-500 p-2 rounded-lg inline-block">
                <a href="mailto:kuldeep.marrapu@gmail.com" class="block text-white hover:bg-green-800 font-bold py-4 px-6 rounded text-2xl text-center">
                    Say Hello!
                </a>
            </div>
            <div class="mt-9 flex flex-wrap justify-center space-x-6">
                <span class="icon-wrapper">
                    <a href="https://www.linkedin.com/in/kuladeep-marrapu-311294134/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center cursor-pointer">
                        <img src="../assets/linkedin.png" alt="LinkedIn" class="transform transition duration-500 hover:scale-110">
                        <span class="text-white">LinkedIn</span>
                    </a>
                </span>
                <span class="icon-wrapper">
                    <a href="https://www.reddit.com/user/Jayker_Woo/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center cursor-pointer">
                        <img src="../assets/reddit.png" alt="Reddit" class="transform transition duration-500 hover:scale-110">
                        <span class="text-white">Reddit</span>
                    </a>
                </span>
                <span class="icon-wrapper">
                    <a href="https://github.com/Kuladeepjayker" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center cursor-pointer">
                        <img src="../assets/github.png" alt="Github" class="transform transition duration-500 hover:scale-110">
                        <span class="text-white">Github</span>
                    </a>
                </span>
                <span class="icon-wrapper">
                    <a href="https://x.com/KuldeepMarrapu" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center cursor-pointer">
                        <img src="../assets/twitter.png" alt="Twitter" class="transform transition duration-500 hover:scale-110">
                        <span class="text-white">Twitter</span>
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    methods: {
        goBack() {
            this.$emit('show-section', 'mainIntro');
        }
    }
}
</script>

<style scoped>
.skills-container {
    padding: 20px;
}

.text-left {
    display: flex;
    align-items: center;
}

.icon-wrapper {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    margin-top: 1rem;
    margin-right: 1rem;
    text-align: center;
}

@media (min-width: 768px) {
    .text-left {
        margin-bottom: 2rem; /* Example margin for larger screens */
    }

    .icon-wrapper {
        height: 5rem;
        width: 5rem;
        margin-top: 1rem; /* Adjust as needed */
        margin-right: 1rem; /* Adjust as needed */
    }
    
}
</style>
