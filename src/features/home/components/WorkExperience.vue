<template>
  <section
    class="mt-section container work-experience-section"
    style="padding-bottom: 10rem;"
  >
    <div class="timeline-container">
      <div class="timeline-line"></div>
      <div class="timeline-fill" ref="timelineFill"></div>
    </div>

    <div class="experience-container">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="experience-card"
        :class="index % 2 === 0 ? 'left' : 'right'"
        :ref="(el) => (cardRefs[index] = el as HTMLElement | null)"
      >
        <CardContent :job="job" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardContent from "./CardContent.vue";
import type { WorkingExperience } from "../types/WorkingExperience";
import { jobs as jobsData } from "@/data/jobs";

gsap.registerPlugin(ScrollTrigger);

const jobs: WorkingExperience[] = jobsData;

const cardRefs = ref<(HTMLElement | null)[]>([]);
const timelineFill = ref<HTMLElement | null>(null);

onMounted(() => {
  const container = document.querySelector(
    ".experience-container"
  ) as HTMLElement;
  if (!timelineFill.value || !container) return;

  cardRefs.value.forEach((card, i) => {
    if (!card) return;
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: i % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Smooth continuous timeline fill
    gsap.to(timelineFill.value, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true, // <-- makes it follow scroll smoothly
      },
    });
  });
});
</script>
<style scoped>
.work-experience-section {
  position: relative;
  padding: 100px 20px;
}

.timeline-container {
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  transform: translateX(-50%);
  height: 100%;
}

.timeline-line {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ff4d4d55; /* background line */
}

.timeline-fill {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0;
  background-color: #ff4d4d; /* filled part */
}

.experience-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.experience-card {
  width: 45%;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: -150px;
}

.experience-card.left {
  align-self: flex-start;
}

.experience-card.right {
  align-self: flex-end;
}

.experience-card:hover {
  box-shadow: 30px rgba(255, 77, 77, 0.3);
}
</style>
