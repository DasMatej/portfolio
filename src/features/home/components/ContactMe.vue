<template>
  <section
    ref="container"
    class="container mt-section mt-border"
    v-border-effect
  >
    <canvas ref="canvas" class="bg-canvas"></canvas>

    <div>
      <div class="h3">Contact Me</div>
      <div class="contact-form row">
        <div class="col-5">
          <div>
            <label>Name</label>
            <input class="form-control" />
          </div>
          <div>
            <label>Email</label>
            <input class="form-control" />
          </div>
          <div>
            <label>Message</label>
            <textarea class="form-control"></textarea>
          </div>
        </div>
        <div class="col-7 d-flex justify-content-center align-items-center">
          <div style="width:200px; height: 200px;" >
            <img class="img-fluid" src="/sprites/amongUs.png"></img>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import * as THREE from "three";

const container = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!container.value || !canvas.value) return;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    0,
    container.value.clientWidth,
    container.value.clientHeight,
    0,
    -1000,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
  });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);

  // Load frames
  const loader = new THREE.TextureLoader();
  const frames: THREE.Texture[] = [];
  const totalFrames = 12;

  for (let i = 1; i <= totalFrames; i++) {
    const walkNum = i.toString().padStart(4, "00");
    const tex = loader.load(`/sprites/Base/Walk${walkNum}.png`);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    frames.push(tex);
  }

  // Load holding sprites
  const holdLeftTex = loader.load(
    "/sprites/Base/deaths/killalien_victim0023.png"
  );
  const holdRightTex = loader.load(
    "/sprites/Base/deaths/killGun_victim0008.png"
  );

  // Create plane for sprite
  const planeWidth = 82.5;
  const planeHeight = 105.5;
  const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
  const material = new THREE.MeshBasicMaterial({
    map: frames[0],
    transparent: true,
  });
  const spriteMesh = new THREE.Mesh(geometry, material);
  spriteMesh.position.set(
    container.value.clientWidth / 2,
    container.value.clientHeight,
    0
  );
  scene.add(spriteMesh);

  // ---------------------------
  // Physics + Animation Vars
  // ---------------------------
  let vx = 2;
  let vy = 0;
  const gravity = -0.5;
  const bounceFactor = 0.6;
  const floorY = 40;

  let currentFrame = 0;
  let frameAccumulator = 0;
  const frameSpeed = 0.2;

  // Dragging
  let isDragging = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastMoveTime = 0;

  // ---------------------------
  // Pointer Events
  // ---------------------------
  canvas.value.addEventListener("pointerdown", (e) => {
    if (!canvas.value) return;
    const rect = canvas.value.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const sceneX = mouseX;
    const sceneY = container.value!.clientHeight - mouseY;

    const dx = sceneX - spriteMesh.position.x;
    const dy = sceneY - spriteMesh.position.y;

    if (Math.abs(dx) < planeWidth / 2 && Math.abs(dy) < planeHeight / 2) {
      isDragging = true;
      lastPointerX = sceneX;
      lastPointerY = sceneY;
      lastMoveTime = performance.now();
      vx = 0; // reset while dragging
      vy = 0;
    }
  });

  canvas.value.addEventListener("pointermove", (e) => {
    if (!isDragging || !canvas.value) return;
    const rect = canvas.value.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const sceneX = mouseX;
    const sceneY = container.value!.clientHeight - mouseY;

    // compute velocity from drag delta
    const now = performance.now();
    const dt = (now - lastMoveTime) / 16; // normalize ~60fps
    vx = (sceneX - lastPointerX) / dt;
    vy = (sceneY - lastPointerY) / dt;

    spriteMesh.position.x = sceneX;
    spriteMesh.position.y = sceneY;

    const dx = sceneX - lastPointerX;
    if (dx > 0) spriteMesh.material.map = holdRightTex;
    else if (dx < 0) spriteMesh.material.map = holdLeftTex;

    lastPointerX = sceneX;
    lastPointerY = sceneY;
    lastMoveTime = now;
  });

  canvas.value.addEventListener("pointerup", () => {
    if (!isDragging) return;
    isDragging = false;
    spriteMesh.material.map = frames[currentFrame]; // resume walk anim
  });

  // ---------------------------
  // Animation Loop
  // ---------------------------
  function animate() {
    requestAnimationFrame(animate);

    if (!isDragging) {
      // apply physics
      spriteMesh.position.x += vx;
      spriteMesh.position.y += vy;

      vy += gravity;

      // floor collision
      if (spriteMesh.position.y <= floorY) {
        spriteMesh.position.y = floorY;
        vy = 0;
        vx *= 0.8; // floor friction
      }

      // wall bounce
      if (spriteMesh.position.x >= container.value!.clientWidth - planeWidth / 2) {
        spriteMesh.position.x = container.value!.clientWidth - planeWidth / 2;
        vx = -vx * bounceFactor;
      }
      if (spriteMesh.position.x <= planeWidth / 2) {
        spriteMesh.position.x = planeWidth / 2;
        vx = -vx * bounceFactor;
      }

      // flip sprite
      if (vx !== 0) spriteMesh.scale.x = vx > 0 ? 1 : -1;

      // walking animation when on floor
      if (spriteMesh.position.y <= floorY && Math.abs(vx) > 0.5) {
        frameAccumulator += frameSpeed;
        if (frameAccumulator >= 1) {
          frameAccumulator = 0;
          currentFrame = (currentFrame + 1) % totalFrames;
          (spriteMesh.material as THREE.MeshBasicMaterial).map =
            frames[currentFrame];
        }
      }
    }

    renderer.render(scene, camera);
  }

  animate();

  // Resize handling
  const handleResize = () => {
    if (!container.value) return;
    camera.right = container.value.clientWidth;
    camera.bottom = container.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  };
  window.addEventListener("resize", handleResize);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

/* Canvas sits behind everything */
.bg-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
/* Contact form sits above the canvas */
.form-control {
  position: relative;
  z-index: 1;
}
</style>