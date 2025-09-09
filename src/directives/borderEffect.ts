import type { Directive } from "vue";

export const borderEffect: Directive = {
  mounted(el: HTMLElement) {
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    });
  },
};
