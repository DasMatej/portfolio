<template>
  <div>
    <LandingBackground />
    <!-- Welcome overlay -->
    <div v-if="showWelcome" ref="welcomeRef" class="welcome-screen">
      <h1 class="welcome-text">
        <span class="hello-letter">H</span>
        <span class="hello-letter">e</span>
        <span class="hello-letter">l</span>
        <span class="hello-letter">l</span>
        <span class="hello-letter">o</span>
        <span class="welcome-wave">👋</span>
        <span class="mark-pulse">!!</span>
      </h1>
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
      showWelcome.value = false;
    },
  });

  tl.fromTo(
    ".welcome-text",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  );

  tl.to(
    ".welcome-wave",
    {
      rotate: 20,
      duration: 0.3,
      yoyo: true,
      repeat: 5,
      ease: "power1.inOut",
    },
    "<"
  );

  tl.to(
    ".hello-letter",
    {
      y: -15, // move up
      duration: 0.3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
      stagger: {
        each: 0.1,
        repeat: 1,
        yoyo: true,
        from: "start",
      },
    },
    "<"
  );

  tl.to(
    ".mark-pulse",
    {
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
      scale: 1.1,
      stagger: {
        each: 0.1,
        repeat: 1,
        yoyo: true,
        from: "start",
      },
    },
    "<"
  );

  tl.to(welcomeRef.value, {
    y: "100%",
    duration: 1,
    ease: "power3.inOut",
    delay: 0.5,
  });

  tl.fromTo(
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
  background: #0d1117;
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

.hello-letter {
  display: inline-block; /* needed for vertical transforms */
}

.welcome-wave {
  display: inline-block;
  transform-origin: 70% 70%;
}

.mark-pulse {
  display: inline-block;
}
</style>
