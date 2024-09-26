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
  name: "Catherine Lee",
  initials: "CL",
  location: "United States",
  locationLink: "https://i.imgur.com/wWsBaUk.jpeg",
  about:
    "Machine Learning Engineer & Software Engineer & Hobbyist Researcher",
  summary:
    "I am passionate about working across the software stack, with expertise in machine learning, distributed systems, and parallel computing. In addition to my technical work, I actively engage in research, dedicating my free time to studying the latest advancements in machine learning and contributing to open-source machine learning projects. On any given day, you'll likely find me fitting models on my RTX 3090, eventually resorting to cloud compute--all while wearing a shirt that showcases the Chinchilla Scaling Laws.",
  avatarUrl: "https://i.imgur.com/wWsBaUk.jpeg",
  personalWebsiteUrl: "https://catherinelee274.github.io",
  contact: {
    email: "catherinelee274@yahoo.com",
    tel: "650-745-6064",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/catherinelee274",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/~catherine/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/cat_eye_on",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Stanford University",
      degree: "Artificial Intelligence Graduate Certificate",
      start: "2024",
      end: "Current",
    },
    {
      school: "University of California, San Diego ",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Lamini AI",
      link: "https://film.io",
      badges: [],
      title: "Machine Learning Engineer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Building the LLM platform for engineers to use customized, private models for their data. Building the training and finetuning abilities underneath, for better performing models compared to general-purpose LLMs. Technologies: React, TypeScript, Node.js",
    },
    {
      company: "Google",
      link: "https://parabol.co",
      badges: [],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "YouTube Ads Creative Optimization. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Snapchat",
      link: "https://clevertech.biz",
      badges: [],
      title: "Software Engineer, Machine Learning Intern",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Vision Transformers",
    },
    {
      company: "Adobe",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Machine Learning Intern",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2020",
      description:
        "Explored multi-arm bandit algorithms for content recommendation (\href{https://huazhengwang.github.io/papers/SIGIR16_CoLin_Wu.pdf}{collaborative contextual bandits}) such as LinUCB for personalization and used GloVe embeddings for queries.",
    },
    {
      company: "Amazon",
      link: "https://www.amazon.jobs/en/teams/product-imaging",
      badges: [],
      title: "Software Engineer Intern",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Built fullstack application in Java using microservices, API Gateway, AWS Lambda, Kinesis, Cloudformation, DynamoDB, S3, CQRS, Event Sourcing, and Dependency Injection.",
    },
  ],
  skills: [
    "Tensorflow",
    "Openai Triton",
    "Kubernetes",
    "Docker",
    "Pytorch",
    "PostgreSQL",
    "SQL",
    "C++",
  ],
  projects: [
    {
      title: "LLM Alignment",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Llama in Triton",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "VLM",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "LLM Merging",
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
      title: "VLM in Triton",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Virtual Try On",
      techStack: ["🌟 Hackathon Winner", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Place.it",
      techStack: ["🌟 Hackathon Winner", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },

    {
      title: "Bikeable",
      techStack: ["🌟 Hackathon Winner", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "PictRNNary",
      techStack: ["🌟 Hackathon Winner", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      }
    },
    {
      title: "Machine Learning Reading Group",
      techStack: ["For Fun :P",],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      }
    },
    {
      title: "Fraud Detection",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      }
    },
    {
      title: "Barcelona Prediction",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      }
    },



  ],
  // achievements: [
  //   {
  //     company: "Lamini AI",
  //     link: "https://film.io",
  //     badges: [],
  //     title: "Machine Learning Engineer",
  //     logo: ConsultlyLogo,
  //     start: "2024",
  //     end: null,
  //     description:
  //       "Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
  //   },
  // ]
} as const;
