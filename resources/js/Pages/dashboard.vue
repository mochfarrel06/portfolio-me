<script>
import Navbar from '../Components/Navbar.vue';
import HeroSection from '../Components/HeroSection.vue';

export default {
    name: "Dashboard",
    components: {
        Navbar,
        HeroSection
    }
};
</script>

<template>
    <div>
        <!-- Navbar -->
        <Navbar />

        <!-- Hero Section -->
         <HeroSection />

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
