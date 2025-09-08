<template>
  <div
    class="card-content"
    ref="cardRef"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <!-- Top row: year and working time -->
    <div class="card-header">
      <div class="year">{{ job.year }}</div>
      <div class="working-time" v-if="job.workingTime">
        {{ job.workingTime }}
      </div>
    </div>

    <!-- Title -->
    <div ref="titleRef" class="title">
      {{ job.title }}
      <div class="title-underline"></div>
    </div>

    <!-- Subtitle + location -->
    <div class="sub-info" v-if="job.subTitle || job.location">
      <span class="subtitle">{{ job.subTitle }}</span>
      <span v-if="job.subTitle && job.location" class="dot">•</span>
      <span class="location">{{ job.location }}</span>
    </div>

    <!-- Details -->
    <div class="details" v-if="job.details">
      {{ job.details }}
    </div>

    <!-- Points -->
    <ul class="points" v-if="job.points?.length">
      <li v-for="(point, i) in job.points" :key="i">
        <Icon
          v-if="point.img"
          :icon="point.img"
          :alt="point.details"
          width="24"
          height="24"
          class="mt-ft-color-red me-2 point-icon"
        />
        <span>{{ point.details }}</span>
      </li>
    </ul>

    <!-- Tech stack -->
    <div class="tech-stack" v-if="job.techs?.length">
      <span v-for="(tech, i) in job.techs" :key="i" class="mt-circle">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";
import type { WorkingExperience } from "../types/WorkingExperience";
const props = defineProps<{
  job: Partial<WorkingExperience>;
}>();

const cardRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);

const onEnter = () => {
  if (titleRef.value) {
    // Animate underline (scaleX from 0 to 1)
    gsap.fromTo(
      titleRef.value.querySelector(".title-underline"),
      { width: "0%" },
      {
        width: "100%",
        display: "block",
        height: "2px;",
        duration: 0.4,
        ease: "power3.out",
        background: "linear-gradient(to right, #dd1818, #333333)",
      }
    );
  }

  // Shake the icons a bit
  if (cardRef.value) {
    const icons = cardRef.value.querySelectorAll(".point-icon");

    icons.forEach((icon) => {
      const tl = gsap.timeline();
      tl.to(icon, { rotation: 5, duration: 0.1, ease: "power1.inOut" }) // tilt right
        .to(icon, { rotation: -5, duration: 0.1, ease: "power1.inOut" }) // tilt left
        .to(icon, { rotation: 0, duration: 0.1, ease: "power1.inOut" }); // reset neutral
    });
  }
};
const onLeave = () => {
  if (titleRef.value) {
    gsap.to(titleRef.value.querySelector(".title-underline"), {
      width: "0%",
      duration: 0.3,
      ease: "power3.in",
    });
  }
};
</script>
<style scoped>
.card-content {
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.card-content:hover {
  transform: translateY(-3px);
}

/* Header */
.card-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.year {
  font-size: 1.1rem;
}

.working-time {
  font-size: 0.95rem;
  opacity: 0.75;
}

/* Title */
.title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

/* Subtitle + location */
.sub-info {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.8rem;
}

.sub-info .dot {
  margin: 0 6px;
  color: #aaa;
}

/* Details */
.details {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

/* Points */
.points {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.points li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.points img {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

/* Tech stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  background: #f1f3f5;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #444;
}
</style>
