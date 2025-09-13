// borderEffect.ts
import type { Directive } from "vue";

export const borderEffect: Directive = {
  mounted(el: HTMLElement) {
    let rafId: number | null = null;

    const update = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      });
    };

    el.addEventListener("mousemove", update);
  },
};
