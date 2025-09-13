<template>
  <section
    class="mt-section container mt-border about-section hover-wave"
    style="margin-top: 7rem;"
    v-border-effect
  >
    <div class="mt-3">
      <div class="row mb-5">
        <div class="col-6 about-left">
          <div class="display-4 mb-3">
            <div class="h1">Hi, I'm</div>
            <div class="mt-ft-color-red fw-bold">Matej Daskaloski</div>
            <div class="mt-ft-color-red fw-bold">
              <!-- Wrap each letter in span -->
              <span>S</span><span>o</span><span>f</span><span>t</span
              ><span>w</span><span>a</span><span>r</span><span>e</span>
              <span>&nbsp;</span>
              <span>E</span><span>n</span><span>g</span><span>i</span
              ><span>n</span><span class="fall-e">e</span><span>e</span
              ><span>r</span>
            </div>
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
  // Existing scroll animations
  gsap.from(".about-left", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
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
  gsap.from(".about-cards", {
    scrollTrigger: { trigger: ".about-section", start: "top 75%" },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.4,
  });

  // Wave + falling e
  const container = document.querySelector(".hover-wave");
  const letters = container?.querySelectorAll("span");
  const fallingE = container?.querySelector(".fall-e");

  if (container && letters && fallingE) {
    // Create a GSAP timeline, paused initially
    const waveTl = gsap.timeline({ paused: true });

    letters.forEach((letter, index) => {
      if (letter === fallingE) return; // skip falling e
      waveTl.to(
        letter,
        {
          y: -20,
          duration: 0.3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        },
        index * 0.1
      ); // stagger using position in timeline
    });

    // Falling "e" at the end
    const fallingIndex = Array.from(letters).indexOf(fallingE as any);
    waveTl.to(
      fallingE,
      {
        y: 100,
        rotation: 90,
        opacity: 0,
        duration: 1,
        ease: "bounce.in",
      },
      fallingIndex * 0.1
    ); // delayed so wave reaches it

    // Hover controls
    container.addEventListener("mouseenter", () => {
      waveTl.play();
    });

    container.addEventListener("mouseleave", () => {
      waveTl.reverse();
    });
  }
});
</script>

<style scoped>
.hover-wave span {
  display: inline-block;
}
.fall-e {
  display: inline-block;
}
</style>
