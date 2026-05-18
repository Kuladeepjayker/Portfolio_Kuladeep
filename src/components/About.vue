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
                <h1 class="contact-title font-bold text-green-300">Get In Touch</h1>
                <p class="contact-copy mt-9 text-gray-300">I'm actively connecting with peers who are into My Skill Set, Front-end Development, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <div class="mt-9 border-2 border-green-500 p-2 rounded-lg inline-block">
                <a href="mailto:kuldeep.marrapu@gmail.com" class="hello-button block text-white hover:bg-green-800 font-bold py-4 px-6 rounded text-center">
                    Say Hello!
                </a>
            </div>
            <div class="social-grid mt-9">
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
    width: min(100%, 52rem);
    padding: 20px;
}

.text-left {
    display: flex;
    align-items: center;
}

.icon-wrapper {
    display: inline-block;
    width: clamp(4rem, 12vw, 5rem);
    text-align: center;
}

.icon-wrapper img {
    width: clamp(3rem, 9vw, 5rem);
    height: clamp(3rem, 9vw, 5rem);
    object-fit: contain;
}

.contact-title {
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: 1.1;
}

.contact-copy,
.hello-button {
    font-size: clamp(1rem, 3vw, 1.5rem);
    line-height: 1.45;
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4.5rem, 1fr));
    gap: clamp(1rem, 4vw, 1.5rem);
    justify-items: center;
    width: 100%;
}

@media (min-width: 768px) {
    .text-left {
        margin-bottom: 2rem;
    }
}
</style>
