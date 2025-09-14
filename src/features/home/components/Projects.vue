<template>
  <section class="mt-section container">
    <div class="projects-grid">
      <a
        v-for="(project, i) in projects"
        :key="i"
        class="project-card p-4 mt-border"
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
          <div
            v-for="tech in project.techStack"
            :key="tech.text"
            class="mt-circle"
          >
            <div>{{ tech.text }}</div>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";

let projects = [
  {
    title: "Facebook Clone",
    description:
      "Created a Facebook clone with Firebase Google Authentication full login panel. Also live posting and showing across accounts.",
    image: "/logos/facebookClone.jpg",
    link: "https://github.com/DasMatej/fb-clone",
    techStack: [
      { text: "React", link: "https://react.dev/" },
      { text: "Redux", link: "https://redux.js.org/" },
      { text: "Firebase", link: "https://firebase.google.com/" },
    ],
  },
  {
    title: "MyBrainAI",
    description:
      "MyBrain AI, your innovative AI companion/assistant for Discord, is here to provide a unique interaction experience.",
    image: "/logos/MyBrainAI-Logo.png",
    link: "https://github.com/DasMatej/MyBrainAI",
    techStack: [],
  },
  {
    title: "Portfolio",
    description: "This portfolio",
    image: "/logos/PortfolioProject.png",
    link: "https://github.com/DasMatej/portfolio",
    techStack: [],
  },
  {
    title: "Warframe Overlay (coming soon)",
    description:
      "Overlay over the game Warframe to help players organise and sort out their inventory data and optimisation.",
    image: "/logos/warframe.png",
    link: "projects",
    techStack: [],
  },
  {
    title: "SUS",
    description: `DO NOT CLICK THIS PROJECT ITS NOT SAFE!!! ( Click it ;-) ). It is going to be stand alone git project soon.`,
    image: "/sprites/amongUs.png",
    link: "projects",
    techStack: [],
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
/* Grid wrapper */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 360px);
  gap: 24px;
  justify-content: center;
  margin-top: 50px;
  cursor: pointer;
}

/* Card */
.project-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 360px;
  height: 455px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  background-color: var(--color-background-card);

  /* 3D tilt setup */
  transform-style: preserve-3d;
  will-change: transform;
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
