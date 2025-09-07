export interface WorkingExperience {
  year: string;
  workingTime?: string;
  title: string;
  subTitle?: string;
  location?: string;
  details: string;
  points?: Points[];
  techs?: string[];
  isPresent?: boolean;
}
export type Points = {
  img: string;
  details: string;
};
