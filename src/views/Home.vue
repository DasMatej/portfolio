<template>
  <section class="heroSection d-flex flex-column full-vh">
    <canvas id="dustCanvas" style="z-index: 0;"></canvas>
    <div class="full-vh d-flex flex-column">
      <h1 class="text-center herotitle">MATEJ DASKALOSKI</h1>
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
const skills = [
  "JavaScript",
  "TypeScript",
  "ASP.NET",
  "C#",
  "Vue.js",
  "React.js",
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
<style>
.heroSection {
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle at top center,
    rgba(255, 255, 255, 0.4),
    rgba(0, 0, 0, 0.8) 5%
  );
  background-position: 50% 75%;
  background-size: 200% 100%;
}

canvas {
  display: block;
}

#dustCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.herotitle {
  font-size: 150px;
  text-align: center;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle at top center,
    rgba(255, 255, 255, 0.1),
    rgba(68, 61, 61, 0.8) 104%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 10%;
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
  z-index: 2;
  background: linear-gradient(
    to right,
    black,
    transparent 10%,
    transparent 90%,
    black
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
  color: var(--text-theme-secondary);
  padding: 3px 15px;
}
</style>
