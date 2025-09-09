<template>
  <section class="mt-section heroSection d-flex flex-column full-vh">
    <LandingBackground />
    <div class="full-vh d-flex flex-column">
      <h1 class="text-center herotitle" style="z-index: 0;">
        MATEJ <br />DASKALOSKI
      </h1>
      <h2 class="mt-5 text-center subtitleFont p-2 neutralFonts">
        SOFTWARE DEVELOPER
      </h2>
      <p class="text-center subtitleFont p-2">
        "If it works on prod, it’s a feature"
      </p>
      <div class="marquee-container mt-auto container mb-lg-2 mb-5">
        <div class="marque-gradiant"></div>
        <div class="marquee-content">
          <span
            v-for="(skill, index) in [...skills, ...skills]"
            :key="index"
            class="marqueeText"
            :aria-hidden="index >= skills.length"
          >
            {{ skill }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import LandingBackground from "./LandingBackground.vue";

const skills = [
  "JavaScript",
  "TypeScript",
  "ASP.NET",
  "C#",
  "Vue.js",
  "React.js",
  "Python",
  "SQL",
  "Microsoft SQL Server",
  "Entity Framework",
  "NHibernate",
  "jQuery",
  "Bootstrap",
  "HTML",
  "CSS",
  "SCSS",
  "Git",
  "Java",
  "MySQL",
  "Firebase",
];
</script>
<style scoped>
.heroSection {
  position: relative; /* create a stacking context */
  overflow: hidden; /* make sure canvas doesn't leak out */
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* canvas is "background" */
}

.heroSection > *:not(canvas) {
  position: relative;
  z-index: 1; /* your text/content stays above */
}

.herotitle {
  font-size: 100px;
  text-align: center;
  background: radial-gradient(
      circle at center top,
      rgb(255, 255, 255),
      rgb(64, 51, 51) 49%
    )
    text;
  -webkit-text-fill-color: transparent;
  padding-top: 5%;
  font-family: "Neutral Face", sans-serif;
}

.marquee-container {
  overflow: hidden;
  position: relative;
  padding: 0px;
}

.marque-gradiant {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-background),
    var(--color-background)
  );
  pointer-events: none;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  overflow: clip;
  animation: marquee-move-text var(--speed, 25s) linear infinite
    var(--direction, forwards);
}

@keyframes marquee-move-text {
  to {
    transform: translateX(-50%);
  }
}

.marqueeText {
  font-size: 18px;
  padding: 3px 15px;
  color: white;
}
</style>
