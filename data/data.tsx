import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

// Item Navbar
export const Nav_items = [
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experiences", path: "#experiences" },
  { name: "Contact", path: "#contact" },
];

// Item Sosmed
export const Social_links = [
  {
    name: "Email",
    url: "mailto:farghali.rahman@gmail.com",
    icon: <IoMail />,
  },
  {
    name: "whatsapp",
    url: "https://wa.me/62895392511022",
    icon: <FaWhatsapp />,
  },
  {
    name: "LinkedIn",
    url: "https://www.Linkedin.com/in/farghali-syafyurrahman",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/strnaut",
    icon: <FaInstagram />,
  },
  {
    name: "Github",
    url: "https://github.com/strnaut",
    icon: <FaGithub />,
  },
];

// Item Skills&Tools
export const Skill_tools = [
  { name: "HTML", icon: "devicon:html5" },
  { name: "CSS", icon: "devicon:css3" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "React", icon: "devicon:react" },
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "Tailwind", icon: "devicon:tailwindcss" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "Laravel", icon: "devicon:laravel" },
  { name: "CodeIgniter 4", icon: "logos:codeigniter-icon" },
  { name: "Python", icon: "devicon:python" },
  { name: "C++", icon: "devicon:cplusplus" },
  { name: "MySQL", icon: "devicon:mysql" },
  { name: "PostgreSQL", icon: "devicon:postgresql" },
  { name: "Git", icon: "devicon:git" },
  { name: "Figma", icon: "devicon:figma" },
  { name: "Draw.io", icon: "vscode-icons:file-type-drawio" },
  { name: "VSCode", icon: "devicon:vscode" },
];

export const projects = [
  {
    name: "Portfolio Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/photos/project1.png",
    url: "/",
    techStack: "",
    theme: "dark",
  },
  {
    name: "Project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/photos/project2.png",
    url: "http://localhost:3000/",
    techStack: "",
    theme: "light",
  },
  {
    name: "Project 3",
    description: "Description of Project 3",
    image: "/photos/project3.jpeg",
    url: "http://localhost:3000/",
    techStack: "",
    theme: "dark",
  },
  {
    name: "Project 4",
    description: "Description of Project 4",
    image: "/photos/project1.png",
    url: "http://localhost:3000/",
    techStack: "",
    theme: "dark",
  },
];

export const experiences = [
  {
    position: "Data Analyst",
    company: "PT United Tracktors",
    date: "July - August 2023",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "Intern",
  },
  {
    position: "System Analyst",
    company: "PT Bina Pertiwi",
    date: "August - December 2024",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "Intern",
  },
];

export const techs = [
  { name: "React", icon: "mdi:react" },
  { name: "Next.js", icon: "ri:nextjs-fill" },
  { name: "Tailwind", icon: "mdi:tailwind" },
  { name: "TypeScript", icon: "mdi:language-typescript" },
];
