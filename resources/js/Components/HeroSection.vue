<script>
export default {
    name: "HeroSection",
    data() {
        return {
            logoLink: "/assets/images/home.png"
        }
    }
}
</script>

<template>
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

    <section class="py-20 bg-white text-black2 min-h-screen flex items-center font-jost">
        <div class="container mx-auto px-6 md:flex md:items-center md:justify-between">
            <div class="md:w-1/2">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-3xl font-bold text-primary">Building a website interface As Front end Developer</h1>
                        <p class="text-md font-medium">I am a Full Stack Developer, I like website programming language such as PHP, JavaScript, HTML, CSS, Bootstrap, Tailwind, React JS., Laravel, MySQL.</p>
                    </div>

                    <div class="flex flex-wrap gap-4">
                        <button class="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary2 transition duration-300">Contact Me</button>
                        <button class="bg-white text-black1 py-2 px-4 rounded-md border border-primary hover:bg-primary hover:text-white transition duration-300">Hire Me</button>
                    </div>
                </div>
            </div>

            <div class="mt-12 md:w-1/2 md:mt-0">
                <img :src="logoLink" alt="Hero Image" class="mx-auto">
            </div>
        </div>
    </section>
</template>
