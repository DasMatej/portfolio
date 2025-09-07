<template>
  <section class="experience-section" ref="section">
    <div class="timeline"></div>

    <div
      v-for="(job, index) in jobs"
      :key="index"
      class="experience-card"
      :class="index % 2 === 0 ? 'left' : 'right'"
      ref="cards"
    >
      <h3>{{ job.company }}</h3>
      <p>{{ job.role }}</p>
      <span>{{ job.years }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  { company: "Company A", role: "Frontend Dev", years: "2020 - 2021" },
  { company: "Company B", role: "Backend Dev", years: "2021 - 2022" },
  { company: "Company C", role: "Fullstack Dev", years: "2022 - 2023" },
  { company: "Company D", role: "Team Lead", years: "2023 - Now" },
];

const section = ref<HTMLElement | null>(null);
const cards = ref<HTMLDivElement[]>([]);

onMounted(() => {
  // Pin the whole section (timeline stays in place)
  ScrollTrigger.create({
    trigger: section.value,
    start: "top top",
    end: "bottom bottom",
    pin: ".timeline", // keeps the line fixed
  });

  // Animate each card in
  cards.value.forEach((card, i) => {
    gsap.from(card, {
      x: i % 2 === 0 ? -200 : 200, // from left or right
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X inside card
      const y = e.clientY - rect.top; // mouse Y inside card

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10; // tilt max 10deg
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(card, {
        rotateX: -rotateX,
        rotateY: rotateY,
        transformPerspective: 500,
        ease: "power2.out",
        duration: 0.3,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    });
  });
});
</script>

<style scoped>
* {
  color: black;
}
.experience-section {
  position: relative;
  z-index: 10;
}

.timeline {
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 100%;
  background: #aaa;
  transform: translateX(-50%);
}

.experience-card {
  width: 25%;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.experience-card.left {
  left: 0;
}

.experience-card.right {
  left: 55%;
}
</style>
