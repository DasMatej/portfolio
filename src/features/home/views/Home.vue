<template>
  <div>
    <LandingBackground />
    <!-- Welcome overlay -->
    <div v-if="showWelcome" ref="welcomeRef" class="welcome-screen">
      <h1 class="welcome-text">Hello 👋</h1>
    </div>

    <!-- Main content -->
    <div ref="mainContent" class="main-content">
      <AboutMe />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

import WorkExperience from "../components/WorkExperience.vue";
import ContactMe from "../components/ContactMe.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/Projects.vue";
import LandingBackground from "../components/LandingBackground.vue";

const showWelcome = ref(true);
const welcomeRef = ref<HTMLElement | null>(null);
const mainContent = ref<HTMLElement | null>(null);

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      showWelcome.value = false; // remove welcome screen after animation
    },
  });

  tl.fromTo(
    ".welcome-text",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  )
    .to(".welcome-text", {
      rotate: 10,
      duration: 0.2,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
    })
    // Slide whole welcome screen down to reveal main page
    .to(welcomeRef.value, {
      y: "100%",
      duration: 1,
      ease: "power3.inOut",
      delay: 0.5,
    })
    // Fade/slide in the main content
    .fromTo(
      mainContent.value,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
});
</script>

<style scoped>
.welcome-screen {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d1117; /* dark background */
  z-index: 9999;
}

.welcome-text {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

.main-content {
  opacity: 0; /* hidden until animation plays */
}
</style>
