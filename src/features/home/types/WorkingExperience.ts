import type { SkillBubble } from "./SkillBubble";
export interface WorkingExperience {
  startDate: Date;
  endDate?: Date;
  title: string;
  subTitle?: string;
  location: string;
  websiteLink: string;
  employmentType: EmploymentType;
  details: string;
  points?: Points[];
  techs?: Partial<SkillBubble>[];
  isPresent?: boolean;
}
export type Points = {
  img: string;
  details: string;
};
export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Freelance"
  | "Other";
