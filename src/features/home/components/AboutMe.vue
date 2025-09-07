<template>
  <section class="container">
    <div class="h3">About Me</div>
    <div class="mt-3">
      <div class="row mb-5">
        <div class="col-6">
          <div class="display-4">
            <div>Hi, I'm</div>
            <div class="mt-ft-color-red fw-bold">Matej Daskaloski</div>
          </div>
          <AboutMeInfo />
          <div>
            I am passionate about constantly improving myself, especially in the
            realm of software development. The challenge and potential for
            creativity in this field continually drive me to learn and grow.
          </div>
          <div>
            <div>Button</div>
            <div>Button2</div>
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <div class="h4">Key Skills</div>
            <KeySkills />
          </div>
          <div class="h4">Services</div>
          <KeyServices />
        </div>
      </div>
      <div class="mb-5">
        <KeyCards />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutMeInfo from "./AboutMeInfo.vue";
import KeyCards from "./KeyCards.vue";
import KeyServices from "./KeyServices.vue";
import KeySkills from "./KeySkills.vue";
</script>

<style scoped></style>
