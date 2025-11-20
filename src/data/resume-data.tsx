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
  // locationLink: "https://i.imgur.com/wWsBaUk.jpeg",
  about:
    "Machine Learning Engineer & Software Engineer & Hobbyist Researcher",
  summary:
    "I am passionate about working across the software stack, with expertise in machine learning and distributed systems. In addition to my technical work, I actively engage in research, dedicating my free time to studying the latest advancements in machine learning and contributing to open-source machine learning projects. On any given day, you'll likely find me fitting models on my RTX 3090, eventually resorting to cloud compute--all while wearing a shirt that showcases the Chinchilla Scaling Laws.",
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
      company: "Amazon",
      link: "https://www.lamini.ai/",
      badges: [],
      title: "Software Engineer, Machine Learning",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description:
        "Working on the software engineering and machine learning side at Amazon Prime Video Recommendations.",
    },
    {
      company: "Lamini AI",
      link: "https://www.lamini.ai/",
      badges: [],
      title: "Machine Learning Engineer",
      logo: ConsultlyLogo,
      start: "2024",
      end: 2024,
      description:
        "Building the LLM platform for engineers to use customized, private models for their data. Building the training and finetuning abilities underneath, for better performing models compared to general-purpose LLMs.",
    },
    {
      company: "Google",
      link: "https://google.com",
      badges: [],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "YouTube Ads Creative Optimization.",
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
        "Vision Transformers on the Perception team.",
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
        "Explored multi-arm bandit algorithms for content recommendation ([collaborative contextual bandits](https://huazhengwang.github.io/papers/SIGIR16_CoLin_Wu.pdf)) such as LinUCB for personalization and used GloVe embeddings for queries.",
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
    "Pytorch",
    "Openai Triton",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "SQL",
    "C++",
  ],
  projects: [
    {
      title: "Diffusion LCM with DPO",
      techStack: [
      ],
      description:
        "TODO",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/catherinelee274/llava_alignment",
      },
    },
    {
      title: "Llama in Triton",
      techStack: [
        "Open Source",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Llama in Triton. In charge of softamx, argmax Triton implementation.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "VLM Alignment",
      techStack: [
      ],
      description:
        "Vision Language Model Alignment",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://github.com/catherinelee274/llava_alignment",
      },
    },
    // {
    //   title: "VLM in Triton",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Vision Language Model in Triton",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    {
      title: "Virtual Try On",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "Virtual Try On Application using Diffusion.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/catherinelee274/virtual-try-on-team",
      },
    },
    {
      title: "Place.it",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "City Planning.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/gits-lit/place.it/",
      },
    },

    {
      title: "Bikeable",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "Safe Boston Bike Routes using Mahcine Learning.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/ayushupneja/Bikeable",
      },
    },
    {
      title: "PictRNNary",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "Pictionary using a Recurrent Neural Network to generate sketches.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/DevinMui/pictionary",
      }
    },
    {
      title: "Machine Learning Reading Group",
      techStack: ["For Fun :P",],
      description:
        "I host a casual ML reading group with friends.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/catherinelee274/Machine-Learning-Reading-Group",
      }
    },
    {
      title: "Fraud Detection",
      techStack: ["Side Project"],
      description:
        "Predicting whether a user will download an app after clicking a mobile app advertisement.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/catherinelee274/fraud_detection",
      }
    },
    {
      title: "Barcelona Prediction",
      techStack: ["Side Project"],
      description:
        "Predicting accidents or air pollution with Barcelona dataset.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/catherinelee274/Barcelona-Prediction",
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
