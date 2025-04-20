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


export const HERO_CONTENT = `I’m a detail-obsessed Software Engineer with 5+ years of full-stack web development experience, crafting clean, efficient solutions with Python, Java, React, and SQL. I thrive in Agile teams and love building cloud-powered apps on platforms like Azure and AWS.
Before diving into tech, I spent 23 years leading teams and solving complex challenges as a Health Care Supervisor in the U.S. Army — where I sharpened my leadership, adaptability, and get-it-done mindset.
Now, I bring that same energy into every line of code I write. Whether it's optimizing a backend service, architecting a cloud solution, or building intuitive web interfaces, I’m all about turning big ideas into working software. Always learning, always improving, and always ready for the next challenge.`;

export const ABOUT_TEXT = `I was born and raised in Norfolk, VA, and at the age of 18, I joined the U.S. Army as a Health Care Specialist. Over my 23-year career, I rose to the rank of Senior Non-Commissioned Officer, gaining invaluable experience in leadership and teamwork. I hold two bachelor's degrees—one in Business Management and another in Information Technology—and I’ve also graduated from a coding bootcamp. This educational background has laid a strong foundation for my career in technology. Since leaving the military, I have worked as a Software Developer, honing my skills as a C# and Python developer. Currently, I am a Full Stack Developer, where I also take on responsibilities as a Data Analyst. I am passionate about utilizing technology to create effective solutions and continuously seek opportunities for growth and learning.`;

export const EXPERIENCES = [
  {
    id: 1,
    year: "June 2023 - Present",
    role: "Principle Django Developer",
    company: "Jorie AI",
    description: `Engineered a client-oriented dashboard leveraging Django Rest Framework, ReactJS, and MySQL. This solution allows authenticated users to effortlessly access a dashboard that features dynamically updated Key Performance Indicators (KPIs) and interactive charts. Developed an automation pipeline using Selenium and Python to efficiently extract data from client systems, perform necessary transformations, and upload the data to an MS SQL Server database. Develop comprehensive reports and interactive dashboards using SQL and Tableau to deliver up-to-date insights into business Key Performance Indicators (KPIs).`,
    technologies: ["Python", "React.js", "MS SQL Server", "Django"],
  },
  {
    id: 2,
    year: "August 2021 – July 2023",
    role: "Python Developer",
    company: "Allured Business Media",
    description: `Created a python script using webhooks that is designed to automate the task of aggregating data in reference to online marketing campaigns, by providing a daily XML form that contains, “views”, “clicks throughs” and “unique impressions”. Designed a python script for getting from online data, pushing it into a database table, where a second script adds the data to an API. Currently updating and maintaining the company’s existing Django project by adding security features, a virtual environment, and more modern styling.`,
    technologies: ["Django", "Javascript", "MySQL", "Pandas"],
  },
  {
    id: 3,
    year: "April 2020 – August 2021",
    role: "Junior .Net Developer",
    company: "Dovetail Internet Technologies",
    description: `Designed two stage authentication system to be used in existing applications, that allows administrators to lock an account that exceeds a predetermined number of attempts. Created a system that allows customers to see the number of items available at several different warehouses, where a customer can add a surcharge to choose a specific warehouse for faster delivery. Debugged, tested and fixed errors found during the QA process, as well as documented revisions and changes.`,
    technologies: ["C#", ".Net Core", "React.JS", "MS SQL Server"],
  },
  {
    id: 4,
    year: "Aug 1994 - Aug 2016",
    role: "Health Care Sergeant/Supervisor",
    company: "United States Army",
    description: `Managed and coordinated 25 different deployment teams globally to succeed including: training, disciplining, and rewarding soldiers; planning, assigning, and directing deployment assets; appraising performance; and resolving logistical issues. Directed and trained a staff of 17 medics performing instruction and documenting coursework for soldier evaluations in support of maintenance standardization programs. Created a widely used computer-based system for tracking the use and ordering of required medical supplies. Negotiated with Afghan and Iraqi Health Officials to administer 1M+ lifesaving immunizations across 300+ villages and cities. Received over 20 commendation medals including the Bronze Star with Valor award during military service. Served as key member of the implementation team with a focus on the management of system and heath care administration projects, within assigned areas, from inception through implementation.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: project1,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 2,
    title: "Task Management App",
    image: project2,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: project3,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    github_link: '',
    demo_link: ''
  },
  {
    id: 4,
    title: "Blogging Platform",
    image: project4,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    image_4: image_4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
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
