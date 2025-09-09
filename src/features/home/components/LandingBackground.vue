<template>
  <canvas ref="canvasRef" style="z-index: 0; width: 100% !important;"></canvas>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { onMounted, onBeforeUnmount, ref } from "vue";
import type { BrandLogo } from "../types/BrandLogo";

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let animationId: number;
let starGroup: THREE.Group;
const canvasRef = ref<HTMLCanvasElement | null>(null);

function repeatLogo(file: string, size: number, count: number): BrandLogo[] {
  return Array(count)
    .fill(null)
    .map(() => ({ file, size }));
}

onMounted(() => {
  if (!canvasRef.value) return;
  const canvas = canvasRef.value;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Create a group for stars + logos
  starGroup = new THREE.Group();
  scene.add(starGroup);

  // Dust particles
  const geometry = new THREE.BufferGeometry();
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.02,
  });
  const particles = new THREE.Points(geometry, material);
  starGroup.add(particles);

  // Logos inside the same group
  const textureLoader = new THREE.TextureLoader();
  const brandLogos: BrandLogo[] = [
    ...repeatLogo("/logos/JavaScript-logo.png", 0.4, 5),
    ...repeatLogo("/favicon.ico", 0.4, 5),
    ...repeatLogo("/logos/TypeScript-logo.png", 0.4, 5),
  ];

  brandLogos.forEach(({ file, size }) => {
    const tex = textureLoader.load(file);
    const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);

    sprite.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
    sprite.scale.set(size, size, 1);

    starGroup.add(sprite);
  });

  // Animate (rotate the whole group)
  const animate = () => {
    animationId = requestAnimationFrame(animate);

    starGroup.rotation.y += 0.0005;
    starGroup.rotation.x += 0.0002;

    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener("resize", onWindowResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onWindowResize);
  renderer.dispose();
});

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
</script>

<style scoped>
canvas {
  position: absolute; /* <-- important! */
  background: radial-gradient(
    circle at top center,
    rgba(255, 255, 255, 0.4),
    rgba(0, 0, 0, 0.8) 5%
  );
  background-position: 50% 75%;
  background-size: 200% 100%;
}
</style>
