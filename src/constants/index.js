// PROJECT ONE
import project_1_01 from '../assets/projects/project_page/project_1/img_1.png'
import project_1_02 from '../assets/projects/project_page/project_1/img_2.png'
import project_1_03 from '../assets/projects/project_page/project_1/img_3.png'
import project_1_04 from '../assets/projects/project_page/project_1/img_4.png'

import projecct_3_home from '../assets/projects/project_page/project_3/home_screen.png'
import projecct_3_about from '../assets/projects/project_page/project_3/about.png'
import projecct_3_tour from '../assets/projects/project_page/project_3/tour.png'
import projecct_3_mfa from '../assets/projects/project_page/project_3/MFA.png'
import projecct_3_contact from '../assets/projects/project_page/project_3/contact.png'

import project_4_home from '../assets/projects/project_page/project_4/welcome.png'
import project_4_register from '../assets/projects/project_page/project_4/register.png'
import project_4_dashboard from '../assets/projects/project_page/project_4/dashboard.png'
import project_4_assistant from '../assets/projects/project_page/project_4/ai_assistant.png'


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


export const HERO_CONTENT = `Accomplished technologist and former Army Lead with a decade-spanning career in personnel management and 6+ years of hands-on software engineering. Proven expertise in developing full-stack solutions using Java, Python, and React, with a deep focus on cloud-native deployments. I bridge the gap between complex technical requirements and high-performing team dynamics, ensuring every project is delivered with precision and a forward-thinking mindset.`;

export const ABOUT_TEXT = [
  `A Norfolk, VA native, my professional foundation was built on a 23-year career in the U.S. Army. Serving as a Senior Non-Commissioned Officer, I mastered the art of high-stakes leadership and operational strategy. These decades of service instilled a "mission-first" discipline that I now apply to architecting enterprise-grade software and leading cross-functional engineering teams.`,

  `I bridge the gap between business objectives and technical execution, backed by dual Bachelor’s degrees in Business Management and Information Technology. My technical evolution is defined by a transition from foundational C# and .NET development to building scalable, cloud-native applications. I specialize in designing robust back-end architectures and seamless user experiences that drive organizational value.`,

  `Currently, I lead full-stack initiatives with a primary focus on Python (Django/FastAPI) and modern JavaScript environments. To further bolster my enterprise capabilities, I am deepening my expertise in Java and Spring Boot for high-concurrency systems. With a strong proficiency in AWS and Azure cloud environments, I focus on delivering secure, scalable solutions that leverage automated CI/CD pipelines and microservices architecture.`
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
    title: "FinanceFlow - AI-Powered Personal Finance Manager",
    image: project_4_home,
    image_1: project_4_home,
    image_2: project_4_register,
    image_3: project_4_dashboard,
    image_4: project_4_assistant,
    description:
    "FinanceFlow is an AI-driven personal finance platform designed to automate wealth management and transaction tracking. It features an integrated GPT-4 AI Advisor for personalized spending insights and an OpenAI Vision-powered Receipt Scanner that automates data entry with 85% accuracy.",
    technologies: ["Springboot", "Postgres", "Docker", "OpenAI", "AWS S3", "React JS", "TailwindCSS", "React Query", "Framer Motion"],
    github_link: 'https://github.com/wchandler2020/financeflow_api',
    demo_link: 'https://wchandler2020.github.io/financeflow_frontend/'
  },
  {
    id: 2,
    title: "Promed Health Plus",
    image: projecct_3_home,
    image_1: projecct_3_tour,
    image_2: projecct_3_mfa,
    image_3: projecct_3_contact,
    image_4: projecct_3_about,
    description:
      "Dashboard app for Promed Health Plus, a skin graft provider, enabling healthcare professionals to add new patients, submit IVRs, create and track open orders, consult with supervising physicians, and communicate with sales representatives.",
    technologies: ["Django", "ReactJS", "Azure", "MySQL", "Figma", "Tailwind"],
    github_link: '',
    demo_link: 'https://promedhealthplus.com/'
  },
  {
    id: 3,
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
