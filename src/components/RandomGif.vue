<template>
  <div>
    <a v-if="!gifUrl" class="nav-link" href="#" title="Surprise!!">
      <div>
        <!-- If no gif is loaded yet, show the icon -->
        <div class="icon" @click="fetchGif">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffffff"
            viewBox="0 0 15 15"
            style="padding-top: 2px;"
          >
            <path
              d="M3 3V0H5C6.66 0 8 1.34 8 3C8 1.34 9.34 0 11 0H13V3H16V6H0V3H3Z"
            />
            <path d="M1 8H7V15H1V8Z" />
            <path d="M15 8H9V15H15V8Z" />
          </svg>
        </div>
      </div>
    </a>
    <!-- If gif is loaded, show it -->
    <div v-else class="gif-wrapper">
      <img :src="gifUrl" alt="Random Gif" class="gif-thumbnail" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RandomGif",
  setup() {
    const gifUrl = ref<string | null>(null);

    const fetchGif = async () => {
      try {
        debugger;
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=Z1Wu6ZrvzVI9IUDNXcXvX6ht7V1KQYIY&tag=dog+fails&rating=g`
        );
        const data = await res.json();

        // ✅ Correct way to set the gif URL
        gifUrl.value = data.data.images.fixed_height.url;
      } catch (err) {
        console.error("Error fetching GIF:", err);
      }
    };

    return {
      gifUrl,
      fetchGif,
    };
  },
});
</script>

<style scoped>
.gif-wrapper {
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  position: fixed;
  right: 10px;
  top: 70px;
}
.gif-wrapper:hover {
  width: 200px;
  height: 200px;
}

.gif-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
}

.gif-thumbnail:hover {
  z-index: 10;
}
</style>
