<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <div class="app-container">
    <header class="header">
      <HeaderBar />
    </header>

    <div class="main-content">
      <!-- <aside class="sidebar">
        <Sidebar />
      </aside> -->

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 150px;
  min-width: 150px;
  background-color: var(--mt-theme-primary-sidebar);
  overflow-y: auto;
  transition: 0.3s ease-in-out all;
  display: flex;
  flex-direction: column;
  z-index: 90;
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
}
.sidebar:hover {
  width: 150px;
  min-width: 150px;
}

.content {
  flex: 1;
  overflow-y: auto;
}
</style>
