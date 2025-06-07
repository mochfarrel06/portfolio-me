<script>
export default {
    name: "Dashboard",
    data() {
        return {
            toggleMenu: false,
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            if (window.innerWidth >= 768) {
                this.toggleMenu = false;
            }
        },
        handleClose() {
            this.toggleMenu = false;
        }
  }
};
</script>

<template>
    <div>
        <!-- Navbar -->
        <div>
            <nav class="bg-white shadow-md fixed w-full z-100 font-jost">
                <div class="container mx-auto px-6 py-4 flex justify-between items-center relative">
                    <div class="text-xl font-bold text-black1">M<span class="text-primary">Farrel</span></div>

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

            <transition name="fade">
                <div v-if="toggleMenu" class="absolute top-[58px] left-0 w-full bg-white md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-jost">
                    <a @click="toggleMenu = false" href="#" class="block font-medium text-black2 hover:text-primary">Home</a>
                    <a @click="toggleMenu = false" href="#features" class="block font-medium text-black2 hover:text-primary">Features</a>
                    <a @click="toggleMenu = false" href="#about" class="block font-medium text-black2 hover:text-primary">About</a>
                    <a @click="toggleMenu = false" href="#contact" class="block font-medium text-black2 hover:text-primary">Contact</a>
                </div>
            </transition>
        </div>

        <!-- Hero Section -->
        <!-- <section class="pt-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex items-center">
      <div class="container mx-auto px-6 md:flex md:items-center md:justify-between">
        <div class="md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to MyBrand</h1>
          <p class="mb-6 text-lg md:text-xl">Build beautiful, responsive websites faster with Tailwind CSS & Vue.js.</p>
          <button
            class="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">Get
            Started</button>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0">
          <img src="https://source.unsplash.com/600x400/?technology" alt="hero image"
            class="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </section> -->

        <!-- Features Section -->
        <!-- <section id="features" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center text-gray-700">

          <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <svg class="mx-auto mb-4 h-12 w-12 text-indigo-600" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 8c-2.21 0-4 1.79-4 4a4 4 0 0 0 8 0c0-2.21-1.79-4-4-4z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 12v8m0 0h-2m2 0h2" />
            </svg>
            <h3 class="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Quick setup and ready to customize with minimal configuration.</p>
          </div>

          <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <svg class="mx-auto mb-4 h-12 w-12 text-indigo-600" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12h6m-3-3v6m12 3v-6a9 9 0 0 0-18 0v6" />
            </svg>
            <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Looks great on all screen sizes, from mobile to desktop.</p>
          </div>

          <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <svg class="mx-auto mb-4 h-12 w-12 text-indigo-600" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 9V7a5 5 0 0 0-10 0v2" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
            </svg>
            <h3 class="text-xl font-semibold mb-2">Modern Tools</h3>
            <p>Built with Vue 3, Vite, and Tailwind CSS for great developer experience.</p>
          </div>

        </div>
      </div>
    </section> -->

        <!-- About Section -->
        <!-- <section id="about" class="py-16 bg-white">
      <div class="container mx-auto px-6 max-w-4xl text-center text-gray-800">
        <h2 class="text-3xl font-bold mb-6">About Us</h2>
        <p class="mb-4">We build cutting-edge web applications that help you grow your business and engage your audience.</p>
        <p>Our team of expert developers and designers are passionate about creating the best user experiences possible.</p>
      </div>
    </section> -->

        <!-- Contact Section -->
        <!-- <section id="contact" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 max-w-md">
        <h2 class="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form class="space-y-6">
          <input type="text" placeholder="Your Name"
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder="Your Email"
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea rows="4" placeholder="Your Message"
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          <button type="submit"
            class="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition duration-300">Send
            Message</button>
        </form>
      </div>
    </section> -->

        <!-- Footer -->
        <!-- <footer class="bg-white py-6 text-center text-gray-600 border-t mt-12">
      &copy; 2025 MyBrand. All rights reserved.
    </footer> -->
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
