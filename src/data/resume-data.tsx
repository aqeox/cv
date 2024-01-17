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
  location: "Bukit Jelutong, Malaysia",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "UI/UX DESIGNER",
  summary:
    "My job is to build your website so that it is functional and user-friendly",
  avatarUrl: "https://avatars.githubusercontent.com/u/39194813?v=4",
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
      company: "Xchanging Malaysia (YTL Company)",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "UI/UX Designer",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Bateriku",
      link: "https://clevertech.biz",
      badges: ["Hybrid"],
      title: "UI/UX Designer",
      logo: ClevertechLogo,
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
