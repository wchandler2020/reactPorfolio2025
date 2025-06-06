// PROJECT ONE
import project_1_01 from '../assets/projects/project_page/project_1/img_1.png'
import project_1_02 from '../assets/projects/project_page/project_1/img_2.png'
import project_1_03 from '../assets/projects/project_page/project_1/img_3.png'
import project_1_04 from '../assets/projects/project_page/project_1/img_4.png'

// PROJECT TWO

import project_2_01 from '../assets/projects/project_page/project_2/bg_remove_1.png'

import default_image from '../assets/default_img.jpg'

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
    technologies: ["Python", "React", "MS SQL Server", "Django", "Azure", "Docker", "PyTest"],
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
    title: "EZ-SHORT URL SHORTNER",
    image: project_1_01,
    image_1: project_1_01,
    image_2: project_1_02,
    image_3: project_1_03,
    image_4: project_1_04,
    description:
      "This URL Shortener is a full-stack web application that allows users to convert long URLs into short, shareable links. Built with React and styled using Tailwind CSS, the frontend offers a sleek, responsive user interface. The backend is powered by Spring Boot, with Spring Security handling authentication and authorization to protect user data and manage access control. Data is stored in a MySQL database, ensuring reliable persistence of URLs and user information. The entire application is containerized using Docker for easy deployment and scalability across environments.",
    technologies: ["HTML", "CSS", "React", "Springboot", "MySQL", "Tailwind CSS", "Docker"],
    github_link: 'https://github.com/wchandler2020/springboot-react-urlShortner',
    demo_link: 'https://deft-cendol-d9ecab.netlify.app/',
  },
  {
    id: 2,
    title: "BG_REMOVE",
    image: project_2_01,
    image_1: project_2_01,
    image_2: default_image,
    image_3: default_image,
    image_4: default_image,
    description:
      "This is a web-based Image Background Removal Tool that enables users to upload images and automatically remove their backgrounds. The frontend is built with React.js and styled using Tailwind CSS for a clean and responsive UI. The backend is powered by Spring Boot, with Spring Security handling request protection and role-based access.Clerk is integrated for user authentication and management, providing secure and seamless sign-in/sign-up flows. A MySQL database is used to persist user data, including tracking the number of credits each user has remaining for background removal operations. This allows the application to enforce usage limits and personalize the experience for each user.",
    technologies: ["React", "Tailwind", "Clerk", "Springboot", "MySQL", "Spring Security"],
    github_link: 'https://github.com/wchandler2020/bg-remove-app',
    demo_link: ''
  },
  {
    id: 3,
    title: "App Three Coming Soon",
    image: default_image,
    image_1: default_image,
    image_2: default_image,
    image_3: default_image,
    image_4: default_image,
    description:
      "My projects are currently being deployed and will be available here shortly. Stay tuned—exciting work is on the way!",
    technologies: ["HTML", "CSS", "JS", "React Native", "Django"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 4,
    title: "App Three Coming Soon",
    image: default_image,
    image_1: default_image,
    image_2: default_image,
    image_3: default_image,
    image_4: default_image,
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
