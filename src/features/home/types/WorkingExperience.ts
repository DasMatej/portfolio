import type { SkillBubble } from "./SkillBubble";
export interface WorkingExperience {
  year: string;
  workingTime?: string;
  title: string;
  subTitle?: string;
  location?: string;
  details: string;
  points?: Points[];
  techs?: Partial<SkillBubble>[];
  isPresent?: boolean;
}
export type Points = {
  img: string;
  details: string;
};
