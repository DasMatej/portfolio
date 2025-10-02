<template>
  <div style="margin-top: 7rem;">
    <section
      class="mt-section container mt-border about-section hover-wave pt-2"
      v-border-effect
    >
      <div class="marquee-container container">
        <div class="marque-gradiant"></div>
        <div class="marquee-content">
          <span
            v-for="(skill, index) in [...skillsArr, ...skillsArr]"
            :key="index"
            class="marqueeText"
            :aria-hidden="index >= skillsArr.length"
          >
            {{ skill }}</span
          >
        </div>
      </div>
      <div class="mt-4">
        <div class="row mb-5">
          <div class="col-12 col-lg-6 mb-lg-0 mb-4 about-left">
            <div class="display-4 mb-3">
              <div class="h1">Hi, I'm</div>
              <div class="mt-ft-color-red fw-bold">Matej Daskaloski</div>
              <div class="mt-ft-color-red fw-bold fall-e-animation">
                <span>S</span><span>o</span><span>f</span><span>t</span
                ><span>w</span><span>a</span><span>r</span><span>e</span>
                <span>&nbsp;</span>
                <span>E</span><span>n</span><span>g</span><span>i</span
                ><span>n</span><span class="fall-e">e</span><span>e</span
                ><span>r</span>
              </div>
            </div>
            <AboutMeInfo />
            <div class="about-text">
              I am passionate about constantly improving myself, especially in
              the realm of software development. The challenge and potential for
              creativity in this field continually drive me to learn and grow.
            </div>
          </div>
          <div class="col-12 col-lg-6 about-right">
            <div class="mb-3">
              <div class="h4">Key Skills</div>
              <SkillBubbles :skills="skills" :limit="7" />
            </div>
            <div class="h4">Services</div>
            <KeyServices />
          </div>
        </div>
        <div class="mb-5 about-cards">
          <KeyCards />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutMeInfo from "./AboutMeInfo.vue";
import KeyCards from "./KeyCards.vue";
import KeyServices from "./KeyServices.vue";
import KeySkills from "./KeySkills.vue";
import SkillBubbles from "./SkillBubbles.vue";
import { skills } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

const skillsArr = [
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

onMounted(() => {
  // Scroll animations (keep as-is)
  gsap.from(".about-left", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".about-right", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });
  gsap.from(".about-cards", {
    scrollTrigger: { trigger: ".about-section", start: "top 75%" },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.4,
  });

  // Wave + falling e (auto loop)
  const container = document.querySelector(".hover-wave");
  const letters = container?.querySelectorAll(".fall-e-animation span");
  const fallingE = container?.querySelector(".fall-e");

  if (container && letters && fallingE) {
    const waveTl = gsap.timeline({ paused: true });

    letters.forEach((letter, index) => {
      if (letter === fallingE) return;
      waveTl.to(
        letter,
        {
          y: -20,
          duration: 0.3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        },
        index * 0.1
      );
    });

    const fallingIndex = Array.from(letters).indexOf(fallingE as any);
    waveTl.to(
      fallingE,
      {
        y: 100,
        rotation: 90,
        opacity: 0,
        duration: 1,
        ease: "bounce.in",
      },
      fallingIndex * 0.1
    );

    // Looping logic
    const loopAnimation = () => {
      waveTl.restart(); // play forward
      waveTl.eventCallback("onComplete", () => {
        gsap.delayedCall(1.5, () => {
          waveTl.reverse(); // play backward
          waveTl.eventCallback("onReverseComplete", () => {
            gsap.delayedCall(1.5, loopAnimation); // restart loop after delay
          });
        });
      });
    };

    // start the cycle after 3s
    setTimeout(() => {
      loopAnimation();
    }, 4000);
  }
});
</script>

<style scoped>
.hover-wave span {
  display: inline-block;
}
.fall-e {
  display: inline-block;
}
@media only screen and (max-width: 1200px) {
  .mt-ft-color-red {
    font-size: 3rem;
  }
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
