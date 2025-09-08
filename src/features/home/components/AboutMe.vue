<template>
  <section
    class="mt-section container about-section"
    style="margin-bottom: 10rem !important;"
  >
    <div class="h3">About Me</div>
    <div class="mt-3">
      <div class="row mb-5">
        <div class="col-6 about-left">
          <div class="display-4">
            <div>Hi, I'm</div>
            <div class="mt-ft-color-red fw-bold">Matej Daskaloski</div>
          </div>
          <AboutMeInfo />
          <div class="about-text">
            I am passionate about constantly improving myself, especially in the
            realm of software development. The challenge and potential for
            creativity in this field continually drive me to learn and grow.
          </div>
          <div class="about-buttons">
            <div>Button</div>
            <div>Button2</div>
          </div>
        </div>
        <div class="col-6 about-right">
          <div class="mb-3">
            <div class="h4">Key Skills</div>
            <KeySkills />
          </div>
          <div class="h4">Services</div>
          <KeyServices />
        </div>
      </div>
      <div class="mb-5 about-cards">
        <KeyCards />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutMeInfo from "./AboutMeInfo.vue";
import KeyCards from "./KeyCards.vue";
import KeyServices from "./KeyServices.vue";
import KeySkills from "./KeySkills.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animate left column
  gsap.from(".about-left", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%", // when section enters viewport
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animate right column
  gsap.from(".about-right", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });

  // Animate cards with stagger
  gsap.from(".about-cards", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.4,
  });
});
</script>
