<template>
  <div class="row">
    <div v-for="(value, i) in info" :key="i" class="col-3">
      <div class="circle">
        <div class="wave"></div>
        <div class="circle-text main">{{ value.text }}</div>
        <div class="circle-text small">{{ value.small }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const info = [
  { text: "Senior", small: "Professional Level" },
  { text: "500+", small: "Features & Tasks Completed" },
  { text: "5+", small: "Major Projects / Clients" },
  { text: "Mentor", small: "Team Lead & Guidance" },
];
</script>

<style scoped>
.circle {
  position: relative;
  border-radius: 15px;
  background-color: #ff4d4d0d;
  padding: 20px;
  text-align: center;
  overflow: hidden; /* keeps wave inside */
  z-index: 1;
  cursor: pointer;
  border: 2px solid #ff4d4d55;
  transition: transform 0.5s ease;
  animation: softPulse 6s ease-in-out infinite;
}

.circle:hover {
  background-color: #fc5e5e0d;
  transform: scale(1.1);
}

/* Wave effect */
.wave {
  position: absolute;
  top: 0;
  width: 150%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 77, 77, 0.25) 50%,
    transparent 100%
  );
  transform: skewX(-20deg);
  animation: waveMove 5s linear infinite;
  opacity: 0;
}

@keyframes waveMove {
  0% {
    left: -150%;
  }
  10% {
    opacity: 1;
  }
  40% {
    left: 150%;
    opacity: 0;
  }
  100% {
    left: 150%;
    opacity: 0;
  }
}

@keyframes softPulse {
  0% {
    box-shadow: 0 0 6px rgba(255, 77, 77, 0.3), 0 0 12px rgba(255, 77, 77, 0.2);
  }
  50% {
    box-shadow: 0 0 12px rgba(255, 77, 77, 0.4),
      0 0 24px rgba(255, 77, 77, 0.25);
  }
  100% {
    box-shadow: 0 0 6px rgba(255, 77, 77, 0.3), 0 0 12px rgba(255, 77, 77, 0.2);
  }
}

.circle-text.main {
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  z-index: 2;
}

.circle-text.small {
  font-size: 0.9rem;
  opacity: 0.7;
  position: relative;
  z-index: 2;
}
</style>
