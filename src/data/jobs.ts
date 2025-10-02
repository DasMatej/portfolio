import type { WorkingExperience } from "@/features/home/types/WorkingExperience";
import { skills } from "./skills";
export const jobs: WorkingExperience[] = [
  {
    year: "2022 - Present",
    workingTime: "3+ years",
    title: "Senior Software Developer / Team Lead",
    subTitle: "Revolution Development",
    location: "Macedonia",
    details:
      "Leading a cross-functional team of 3 developers, 1 tester, and 1 designer to deliver scalable healthcare solutions. Driving technical decisions, architecture, and development of DentalSymphony - a dental healthcare app with modules like Treatment Planning Engine, Scheduler, Dental charting and many more.",
    points: [
      {
        img: "icon-park-solid:add-web",
        details:
          "Built and deployed the Treatment Planning Engine, enabling dentists to generate accurate treatment plans efficiently.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Created and optimized Scheduler module, reducing appointment conflicts and improving staff coordination.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Refactored legacy codebase and transitioned the system to modern technologies (React.js frontend, .NET backend), improving maintainability and performance.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Coordinated cross-team collaboration with stakeholders, testers, and designers to align business needs with technical delivery.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Mentored junior developers and established best practices in code reviews, testing, and agile processes.",
      },
    ],
    techs: skills.filter((skill) =>
      [
        "ASP.NET",
        "JavaScript",
        "C#",
        "Microsoft SQL Server",
        "SQL",
        "jQuery",
      ].includes(skill.title)
    ),
    isPresent: true,
  },
  {
    year: "2025 - Present",
    workingTime: "1+ year",
    title: "Senior Frontend Engineer / Team Lead",
    subTitle: "Digimak - Contract",
    location: "Macedonia",
    details:
      "Leading the development of a new Vue.js application, replacing the legacy Aztech system with a scalable, high-performance platform. Responsible for architecting the frontend from the ground up and mentoring junior developers.",
    points: [
      {
        img: "icon-park-solid:add-web",
        details:
          "Architected the new Aztech frontend using Vue 3, TypeScript, Vite, ensuring scalability and maintainability.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Introduced modular, component-based architecture to improve code reusability and developer efficiency.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Implemented state management with Pinia and optimized API communication for seamless backend integration.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Designed a responsive UI framework in collaboration with designers, ensuring a modern and intuitive user experience.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Mentored junior developers, providing guidance on modern Vue.js workflows, Git practices, and clean coding standards.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Collaborated with backend engineers to optimize API design and reduce frontend-backend communication overhead.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Migrated legacy features into the new system, improving performance and maintainability while preserving business-critical functionality.",
      },
    ],
    techs: skills.filter((skill) =>
      ["Vue.js", "JavaScript", "TypeScript", "Pinia", "Python", "SQL"].includes(
        skill.title
      )
    ),
    isPresent: false,
  },
  {
    year: "2021 - 2022",
    workingTime: "6 months",
    title: "Frontend Developer Intern",
    subTitle: "Emit Knowledge LLC",
    location: "North Macedonia · Remote",
    details:
      "Completed a 6-month internship focused on algorithms, frontend development, and Vue.js specialization, gaining hands-on experience with real-world projects and modern JavaScript frameworks.",
    points: [
      {
        img: "icon-park-solid:add-web",
        details:
          "Solved 100+ advanced JavaScript algorithm challenges on Codewars (kyu 4-1), improving problem-solving and optimization skills.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Developed JavaScript projects that combined algorithmic logic with interactive UI/UX design.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Contributed to team projects using Vue.js, building scalable, responsive, and maintainable web applications.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Gained practical experience in collaborative workflows, version control (Git), and agile development processes.",
      },
      {
        img: "icon-park-solid:add-web",
        details:
          "Worked closely with senior developers, applying mentorship feedback to improve coding standards and best practices.",
      },
    ],
    techs: skills.filter((skill) =>
      [
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "Algorithms",
        ".NET",
        "SQL",
      ].includes(skill.title)
    ),
    isPresent: false,
  },
];
