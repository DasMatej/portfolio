import type { BrandLogo } from "@/features/home/types/BrandLogo";
export const ICON_SIZE = 126; // in px
export const SPRITE_WIDTH = 126;
export const SPRITE_HEIGHT = 1764;

export const spriteMap = {
  typescript: { x: 0, y: 0 },
  vue: { x: 0, y: 1 },
  javascript: { x: 0, y: 2 },
  jquery: { x: 0, y: 3 },
  dotNet: { x: 0, y: 4 },
  python: { x: 0, y: 5 },
  bootstrap: { x: 0, y: 6 },
  cSharp: { x: 0, y: 7 },
  discord: { x: 0, y: 8 },
  mySql: { x: 0, y: 9 },
  react: { x: 0, y: 10 },
  figma: { x: 0, y: 11 },
  firebase: { x: 0, y: 12 },
  git: { x: 0, y: 13 },
};

export const repeatLogo = (
  key: keyof typeof spriteMap,
  size: number,
  count: number
): BrandLogo[] => {
  const { x, y } = spriteMap[key];
  const repeat = 1 / (SPRITE_HEIGHT / ICON_SIZE); // 126 / 896 = 0.140625
  return Array.from({ length: count }, () => ({
    file: "/logos/sprite.png",
    size,
    offsetX: 0,
    offsetY: y * repeat,
    repeatX: 1,
    repeatY: repeat,
  }));
};
