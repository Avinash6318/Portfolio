import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiVercel,
  SiGithub,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiClerk,
  SiCloudinary,
  SiDocker,
  SiAmazonwebservices
} from "react-icons/si";

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: "AI SaaS Platform",
    description: "React • Node.js • PostgreSQL • Redis",
    bgImage: "/ai-saas.png",
    github: "https://github.com/Avinash6318/neptuneAI",
    live: "https://your-ai-saas.vercel.app",
  },
  {
    title: "Hotel Booking Platform",
    description: "MERN • Clerk • Stripe • PostgreSQL",
    bgImage: "/booknow-ss.png",
    github: "https://github.com/Avinash6318/hotel-booking",
    live: "https://hotel-booking.vercel.app",
  },
  {
    title: "FeedsOut",
    description: "MERN • Redis • Cloudinary",
    bgImage: "/feedsout-ss.png",
    github: "https://github.com/Avinash6318/FeedsOut",
    live: "https://feedsout.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "Next.js • Tailwind CSS • Motion",
    bgImage: "/portfolio-ss.png",
    github: "https://github.com/Avinash618/Portfolio",
    live: "https://portfolio-phi-three-1e2g1svbz1.vercel.app",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full Stack Development",
    description:
      "Develop scalable full-stack web applications with responsive UIs, secure authentication, and optimized backend architecture.",
    tech: "React • Next.js • Node.js • Express • PostgreSQL"
  },
  {
    icon: assets.mobile_icon,
    title: "Backend Development",
    description:
      "Build secure server-side applications with authentication, databases, caching, and cloud storage integrations.",
    tech: "Node.js • Express • PostgreSQL • MongoDB • Redis"
  },
  {
    icon: assets.ui_icon,
    title: "REST API Development",
    description:
      "Design and develop RESTful APIs with authentication, validation, file uploads, and efficient database operations.",
    tech: "Express • Clerk • JWT • Cloudinary • Multer"
  },
  {
    icon: assets.graphics_icon,
    title: "Cloud Deployment & Optimization",
    description:
      "Deploy production-ready applications with performance optimization, caching, rate limiting, and cloud hosting.",
    tech: "Vercel • AWS • Redis • GitHub • Docker"
  },
];

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Skills',
        description: 'React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Redis, Tailwind CSS'
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'B.Tech in Electronics and Communication Engineering(ECE) at IIIT RANCHI '
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: '6+ Full Stack projects with Authentication, REST APIs, AI Integration & Cloud Deployment'
    }
];

export const toolsData = [
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express.js" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "Mongodb" },
  { Icon: SiJavascript, name: "Javascript" },
  { Icon: SiGithub, name: "Github" },
  { Icon: SiTailwindcss, name: "Tailwindcss" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiRedis, name: "Redis" },
];
