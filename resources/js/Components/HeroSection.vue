<script>
export default {
    name: "HeroSection",
    data() {
        return {
            logoLink: "/assets/images/home.png",
            headingText: "Building a website interface As Front end Developer",
            decriptionText: "I am a Front End Developer, I like website programming language such as PHP, JavaScript, HTML, CSS, Bootstrap, Tailwind, Vue, Laravel, MySQL.",
        }
    }
}
</script>

<template>
    <section class="py-20 bg-white text-black2 min-h-screen flex items-center font-jost">
        <div class="container mx-auto px-6 md:flex md:items-center md:justify-between">
            <div class="md:w-1/2">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-3xl font-bold text-primary lg:text-4xl xl:text-5xl">{{ headingText }}</h1>
                        <p class="text-md font-medium">{{ decriptionText }}</p>
                    </div>

                    <div class="flex flex-wrap gap-4">
                        <button class="bg-primary text-md font-medium text-white py-2 px-4 rounded-md hover:bg-primary2 transition duration-300">Contact Me</button>
                        <button class="bg-white text-md font-medium text-black1 py-2 px-4 rounded-md border-2 border-primary hover:bg-primary hover:text-white transition duration-300">Hire Me</button>
                    </div>
                </div>
            </div>

            <div class="mt-12 px-3 md:w-1/2 md:mt-0">
                <img :src="logoLink" alt="Hero Image" class="w-full h-auto mx-auto max-w-sm md:max-w-md">
            </div>
        </div>
    </section>
</template>
