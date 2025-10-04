<template>
  <section class="mt-section container">
    <div class="row">
      <a
        v-for="(project, i) in projects"
        :key="i"
        class="project-card p-4 mt-border col-12 col-md-6 col-lg-4"
        v-border-effect
        :href="project.link"
        target="_blank"
        :ref="(el) => (cardRefs[i] = el as HTMLElement)"
        @mousemove="(e) => handleMouseMove(e, i)"
        @mouseleave="() => handleMouseLeave(i)"
      >
        <div>
          <img
            v-if="project.image"
            style="border-radius: 10px;"
            :src="project.image"
            :alt="project.title"
          />
        </div>
        <div class="mt-4 h3">
          {{ project.title }}
        </div>
        <div>
          {{ project.description }}
        </div>
        <div class="mt-2">
          <SkillBubbles :skills="project.techStack" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";
import SkillBubbles from "./SkillBubbles.vue";
import { skills } from "@/data/skills";
let projects = [
  {
    title: "Facebook Clone",
    description:
      "Created a Facebook clone with Firebase Google Authentication full login panel. Also live posting and showing across accounts.",
    image: "/logos/facebookClone.jpg",
    link: "https://github.com/DasMatej/fb-clone",
    techStack: skills.filter((x) =>
      ["React.js", "Redux", "Material UI", "Firebase"].includes(x.title)
    ),
  },
  {
    title: "MyBrainAI",
    description:
      "MyBrain AI, your innovative AI companion/assistant for Discord, is here to provide a unique interaction experience.",
    image: "/logos/MyBrainAI-Logo.png",
    link: "https://github.com/DasMatej/MyBrainAI",
    techStack: skills.filter((x) =>
      [
        "Discord API",
        "Google Search API",
        "Python",
        "OpenAI API",
        "Firebase",
        "BeautifulSoup",
      ].includes(x.title)
    ),
  },
  {
    title: "Portfolio",
    description:
      "This portfolio is built with Vue 3 and Vite for a fast, modern development stack, and written entirely in TypeScript for type safety and scalability. The page features a fully interactive 3D character model and a dynamic space-themed background, both powered by Three.js for immersive WebGL rendering.",
    image: "/logos/PortfolioProject.png",
    link: "https://github.com/DasMatej/portfolio",
    techStack: skills.filter((x) =>
      ["Vue.js", "TypeScript", "Three.js", "GSAP"].includes(x.title)
    ),
  },
  {
    title: "SUS character",
    description: `The running dummy is going to be stand alone git project soon.`,
    image: "/sprites/amongUs.png",
    link: "https://github.com/DasMatej/portfolio",
    techStack: skills.filter((x) =>
      ["JavaScript", "Three.js"].includes(x.title)
    ),
  },
];

const cardRefs = ref<HTMLElement[]>([]);

// --- Tilt effect ---
const handleMouseMove = (e: MouseEvent, index: number) => {
  const card = cardRefs.value[index];
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  gsap.to(card, {
    rotationX: -rotateX,
    rotationY: rotateY,
    transformPerspective: 1000,
    ease: "power2.out",
    duration: 0.3,
  });
};

const handleMouseLeave = (index: number) => {
  const card = cardRefs.value[index];
  if (!card) return;

  gsap.to(card, {
    rotationX: 0,
    rotationY: 0,
    ease: "power2.out",
    duration: 0.5,
  });
};
</script>

<style scoped>
.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
