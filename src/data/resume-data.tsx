import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hassan Amin",
  initials: "Profile",
  location: "Malaysia",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "UI/UX CREATIVE DESIGNER",
  summary:
    "My job is to build your website so that it is functional and user-friendly",
  avatarUrl:
    "https://private-user-images.githubusercontent.com/39194813/299920738-3fbdfe9f-d2d4-4721-90cd-7fa8bf89b23a.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyNTc4MTIsIm5iZiI6MTcwNjI1NzUxMiwicGF0aCI6Ii8zOTE5NDgxMy8yOTk5MjA3MzgtM2ZiZGZlOWYtZDJkNC00NzIxLTkwY2QtN2ZhOGJmODliMjNhLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEyNlQwODI1MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mODZhZjI2MGZmMDM5ZWRmMTBlNzVlNzVkZjA3MDJhNDBiOWVjZjI0N2E4ZDYzMDdiM2UyM2U2NjJhMzQ4MmRmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.SQh9ZX0TIooODa2fJ2cRy7rOIQaj7GlVXQQN2rDK_XI",
  personalWebsiteUrl: "https://youwdin.com",
  contact: {
    email: "youwdin@gmail.com",
    tel: "+601111777140",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aqeox",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hassan-amin-b5693b170/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/youwdin?lang=en",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universiti Kuala Lumpur",
      degree: "Bachelor's degree Interactive Multimedia Design (First Class)",
      start: "2022",
      end: "2019",
    },
    {
      school: "Universiti Kuala Lumpur",
      degree: "Diploma In Multimedia Design",
      start: "2019",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Xchanging (DXC, YTL Company)",
      link: "https://dxc.com/us/en/",
      badges: ["Remote"],
      title: "UI/UX CREATIVE DESIGNER",
      start: "2024",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Bateriku",
      link: "https://bateriku.com/",
      badges: ["Hybrid"],
      title: "UI/UX Designer",
      start: "2023",
      end: "2023",
      description: "Worked with the Product team on new features",
    },
  ],
  skills: ["JavaScript", "TypeScript", "User Interface", "User Experience"],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;
