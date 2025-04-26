import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import image_1 from '../assets/projects/project_page/image_1.jpg'
import image_2 from '../assets/projects/project_page/image_2.jpg'
import image_3 from '../assets/projects/project_page/image_3.jpg'
import image_4 from '../assets/projects/project_page/image_4.jpg'

import { RiJavascriptLine } from 'react-icons/ri';
import { RiJavaLine } from 'react-icons/ri';
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandDjango } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";


export const HERO_CONTENT = `Detail-obsessed coder with a secret weapon: 23 years of leading teams in the Army! 5+ years of full-stack magic (Python, Java, React, SQL), building cool stuff in the cloud with Azure and AWS. Agile-savvy and always ready to crack tech puzzles with a smile and a 'let’s do this' attitude. Always learning, always building, always ready for what’s next.`;

export const ABOUT_TEXT = [
  `I'm a proud Norfolk, VA native whose journey into leadership and service kicked off at 18 when I joined the U.S. Army as a Health Care Specialist. Over 23 incredible years, I climbed the ranks to Senior Non-Commissioned Officer, sharpening my leadership, problem-solving, and high-pressure teamwork skills along the way.`,

  `Always hungry for growth, I earned two bachelor’s degrees—one in Business Management and the other in Information Technology—and crushed a coding bootcamp focused on C#, .NET, and SQL. That foundation catapulted me into the tech world with purpose and drive.`,

  `Since stepping into civilian life, I've embraced the challenges of the tech industry head-on, working as a Software Developer with a focus on Python, SQL and Javascript. Today, I'm thriving as a Full Stack Developer, passionate about building smart, impactful solutions. I'm also leveling up my skills in Java and Spring Boot to expand what I can bring to the table. Always learning, always innovating—that’s the energy I bring to every project.`,
];

export const EXPERIENCES = [
  {
    id: 1,
    year: "June 2023 - Present",
    role: "Principle Django Developer",
    company: "Jorie AI",
    description: `Designed and built dynamic client dashboards (Django REST Framework, ReactJS). Automated client data extraction and ETL to MS SQL Server using Python and Selenium. Delivered KPI insights through SQL and Tableau reports and dashboards.`,
    technologies: ["Python", "React", "MS SQL Server", "Django", "Azure"],
  },
  {
    id: 2,
    year: "August 2021 – July 2023",
    role: "Python Developer",
    company: "Allured Business Media",
    description: `Automated online marketing data aggregation using Python and webhooks, generating daily XML reports ("views," "click-throughs," etc.). Developed Python scripts for data extraction, ETL to database, and API integration. Enhanced and maintained company Django project (security, virtual environment, modern styling).`,
    technologies: ["Django", "Javascript", "MySQL", "Pandas", "AWS", "React", "GraphQL"],
  },
  {
    id: 3,
    year: "April 2020 – August 2021",
    role: "Junior .Net Developer",
    company: "Dovetail Internet Technologies",
    description: `Developed a two-stage authentication system to improve application security. Created a system for customers to view warehouse inventory and choose expedited delivery. dConducted debugging, testing, and error resolution, ensuring quality and documenting changes.`,
    technologies: ["C#", ".Net Core", "React.JS", "MS SQL Server", "React", "Web Forms", "Dev Express"],
  },
  {
    id: 4,
    year: "Aug 1994 - Aug 2016",
    role: "Health Care Sergeant/Supervisor",
    company: "United States Army",
    description: `Led 25 global deployment teams (training, resources, logistics). Directed training for 17 medics. Developed a medical supply tracking system. Administered 1M+ immunizations (300+ locations). Awarded 20+ commendations (Bronze Star with Valor). Contributed to system/healthcare project implementation.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "App One Coming Soon",
    image: project1,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "My projects are currently being deployed and will be available here shortly. Stay tuned—exciting work is on the way!",
    technologies: ["HTML", "CSS", "React", "Springboot", "MySQL", "Tailwind CSS"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 2,
    title: "App Two Coming Soon",
    image: project2,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "My projects are currently being deployed and will be available here shortly. Stay tuned—exciting work is on the way!",
    technologies: ["HTML", "CSS", "Angular", "Springboot", "Postgres"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 3,
    title: "App Three Coming Soon",
    image: project3,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "My projects are currently being deployed and will be available here shortly. Stay tuned—exciting work is on the way!",
    technologies: ["HTML", "CSS", "JS", "React Native", "Django"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 4,
    title: "App Three Coming Soon",
    image: project4,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
    "My projects are currently being deployed and will be available here shortly. Stay tuned—exciting work is on the way!",
    technologies: ["HTML", "CSS", "JS", "Django Rest Framework", "React JS", "AWS EC3"],
    github_link: '',
    demo_link: ''
  },
];

export const CONTACT = {
  address: "Chicago, IL 60611",
  phoneNo: "(502)263 - 3992",
  email: "william.d.chandler1@gmail.com",
};

export const TECHNOLOGIES = [
  {
    "id": 1,
    "icon": <FaHtml5 className='text-7xl text-orange-400'/>
  },
  {
    "id": 2,
    "icon": <IoLogoCss3 className='text-7xl text-blue-400'/>
  },
  {
    "id": 3,
    "icon": <RiJavascriptLine className='text-7xl text-yellow-400'/>
  },
  {
    "id": 4,
    "icon": <FaPython className='text-7xl text-neutral-400'/>
  },
  {
    "id": 5,
    "icon": <RiJavaLine className='text-7xl text-red-400'/>
  },
  {
    "id": 6,
    "icon": <FaReact className='text-7xl text-cyan-400'/>
  },
  {
    "id": 7,
    "icon": <BiLogoSpringBoot className='text-7xl text-green-400'/>
  },
  {
    "id": 8,
    "icon": <TbBrandDjango className='text-7xl text-yellow-200'/>
  },
  {
    "id": 9,
    "icon": <TbSql className='text-7xl'/>
  },
]
