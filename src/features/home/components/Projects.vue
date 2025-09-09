<template>
  <section class="mt-section container mt-border" v-border-effect>
    <div>
      <div class="h3">Projects</div>
    </div>
    <div class="projects-grid">
      <a
        v-for="(project, i) in projects"
        :key="i"
        class="project-card p-4"
        :href="project.link"
        target="_blank"
        :ref="(el) => (cardRefs[i] = el as HTMLElement)"
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
      "Created a Facebook clone with FIrebase Gooogle Authentication full login panel. Also live posting and showing across accounts. ",
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
      "MyBrain AI, your innovative AI companion/assistant for Discord, is here to provide a unique interaction experience.With conscious techniques to enhance AI cognition, MyBrain AI is more than just an algorithm, he is a companion.",
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
];

const cardRefs = ref<HTMLElement[]>([]);
</script>

<style scoped>
/* Grid wrapper */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 360px); /* exactly 3 per row */
  gap: 24px; /* spacing between cards */
  justify-content: center; /* center the whole grid */
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
  transition: transform 0.25s ease;
  background-color: var(--color-background-card);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
