<script>
export default {
    name: "Navbar",
    data() {
        return {
            toggleMenu: false,
        };
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        handleResize() {
            if (window.innerWidth >= 768) {
                this.toggleMenu = false;
            }
        },
        handleClose() {
            this.toggleMenu = false;
        },
    },
};
</script>

<template>
    <div>
        <nav class="bg-white shadow-md fixed w-full z-100 font-jost">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center relative md:py-5 lg:px-12 xl:px-20">
                <div class="text-xl font-bold text-black1 md:text-2xl">M<span class="text-primary">Farrel</span></div>

                <button class="md:hidden text-black1" @click="toggleMenu = !toggleMenu">
                    <svg v-if="!toggleMenu" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Menu desktop -->
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="text-black2 font-medium hover:text-primary">Home</a>
                    <a href="#features" class="text-black2 font-medium hover:text-primary">Features</a>
                    <a href="#about" class="text-black2 font-medium hover:text-primary">About</a>
                    <a href="#contact" class="text-black2 font-medium hover:text-primary">Contact</a>
                </div>
            </div>
        </nav>

        <!-- Menu mobile -->
        <transition name="fade">
            <div v-if="toggleMenu" class="fixed top-[58px] left-0 w-full bg-white md:hidden shadow-md z-50">
                <div class="font-jost container mx-auto px-6 py-4 space-y-4">
                    <a @click="toggleMenu = false" href="#" class="block font-medium text-white bg-primary px-3 py-1 rounded-md">Home</a>
                    <a @click="toggleMenu = false" href="#features" class="block font-medium text-black2 px-3 py-1 rounded-md hover:rounded-md hover:bg-primary hover:text-white transition duration-300">Features</a>
                    <a @click="toggleMenu = false" href="#about" class="block font-medium text-black2 px-3 py-1 rounded-md hover:rounded-md hover:bg-primary hover:text-white transition duration-300">About</a>
                    <a @click="toggleMenu = false" href="#contact" class="block font-medium text-black2 px-3 py-1 rounded-md hover:rounded-md hover:bg-primary hover:text-white transition duration-300">Contact</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
