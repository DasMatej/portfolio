<template>
  <section class="navsection sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-blur">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#FFFFFF"
            viewBox="0 0 256 256"
          >
            <path
              d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
            ></path>
          </svg>
        </a>
        <ul class="navbar-nav d-flex flex-row justify-content-center mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active me-1"
              :href="LINKEDIN_URL"
              target="_blank"
              title="Link to my LinkedIn page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFFFFF"
                viewBox="0 0 256 256"
              >
                <path
                  d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link me-1"
              :href="GITHUB_URL"
              target="_blank"
              title="Link to my GitHub page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFFFFF"
                viewBox="0 0 256 256"
              >
                <path
                  d="M128,24a104,104,0,0,0-33,202.85c5.24.95,7.15-2.28,7.15-5.06,0-2.49-.09-9.09-.14-17.85-29.07,6.32-35.19-14-35.19-14C63,180.14,56,176.81,56,176.81c-9.48-6.48.71-6.35.71-6.35,10.48.74,16,10.76,16,10.76,9.32,16,24.44,11.39,30.39,8.7.94-6.77,3.64-11.39,6.63-14-23.2-2.64-47.62-11.6-47.62-51.64a40.39,40.39,0,0,1,10.77-28c-1.07-2.64-4.67-13.29,1-27.68,0,0,8.78-2.81,28.77,10.7a99.73,99.73,0,0,1,52.37,0c20-13.51,28.76-10.7,28.76-10.7,5.72,14.39,2.13,25,1,27.68a40.39,40.39,0,0,1,10.76,28c0,40.14-24.44,49-47.74,51.58,3.74,3.24,7.07,9.64,7.07,19.44,0,14.05-.13,25.39-.13,28.85,0,2.8,1.88,6.07,7.2,5A104,104,0,0,0,128,24Z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <RandomGif />
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>
<script lang="ts" setup>
import RandomGif from "./RandomGif.vue";
const LINKEDIN_URL = `https://www.linkedin.com/in/matej-daskaloski-ba7b69212/`;
const GITHUB_URL = `https://github.com/DasMatej`;
</script>
<style scoped>
.navsection {
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;
}

.nav-link:not(:last-child) {
  margin-right: 10px !important;
}

.bg-blur {
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
