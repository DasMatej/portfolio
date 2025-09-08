<template>
  <section class="mt-section container">
    <div style="text-align: center; margin-top: 100px;">
      <h1>Projects</h1>
      <p>Here are some of my projects.</p>
    </div>

    <div class="projects-grid">
      <div v-for="(project, i) in projects" :key="i" class="project-card p-4">
        <div>
          <img
            v-if="project.image"
            style="border-radius: 10px;"
            :src="project.image"
            :alt="project.title"
          />
          <div v-else>
            <LandingBackground />
          </div>
        </div>
        <div class="overlay">
          <h5>{{ project.title }}</h5>
          <p>{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="btn btn-sm btn-primary"
          >
            View
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LandingBackground from "./LandingBackground.vue";

let projects = [
  {
    title: "title",
    description: "description",
    image: "/logos/facebookClone.jpg",
    link: "projects",
  },
  {
    title: "title",
    description: "description",
    image: "/logos/MyBrainAI-Logo.png",
    link: "projects",
  },
  {
    title: "Portfolio",
    description: "This portfolio",
    image: "/logos/PortfolioProject.png",
    link: "projects",
  },
  {
    title: "title",
    description: "description",
    image: "/logos/MyBrainAI-Logo.png",
    link: "projects",
  },
];
</script>

<style scoped>
/* Grid wrapper */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 360px); /* exactly 3 per row */
  gap: 24px; /* spacing between cards */
  justify-content: center; /* center the whole grid */
  margin-top: 50px;
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

/* Overlay */
.project-card .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 1rem;
  text-align: center;
}
.project-card:hover .overlay {
  opacity: 1;
}
</style>
