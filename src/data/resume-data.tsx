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
      // description: "test"
    },
  ],
  work: [
    {
      company: "Amazon",
      link: "https://www.amazon.com/",
      badges: [],
      title: "Machine Learning Engineer",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description:
        "Working on the software engineering and machine learning side for Recommendation Systems at Amazon Prime Video Personalization and Disvoery.",
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
      link: "https://www.snap.com/",
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
      link: "https://www.adobe.com/",
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
      description: "Built fullstack application in Java using microservices, API Gateway, AWS Lambda, Kinesis, Cloudformation, DynamoDB, S3, CQRS, Event Sourcing, and Dependency Injection. Created a reactive dashboard to monitor the statuses of individual contract workflows with Javascript (SvelteJS).",
    },
  ],
  skills: [
    "LLM Post-training",
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
        "Side Project",
        "Diffusion",
        "DPO",
      ],
      description:
        "Latent Consistency Model fine-tuned with Direct Preference Optimization, plus benchmarks comparing sample quality against the base diffusion model at matched step counts.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/catherinelee274/Diffusion-Benchmarking",
      },
    },
    {
      title: "Llama in Triton",
      techStack: [
        "Open Source",
        "Triton",
      ],
      description:
        "Open-source port of Llama inference to OpenAI Triton kernels. Wrote and tuned the softmax and argmax implementations.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/kernels",
      },
    },
    {
      title: "VLM Alignment",
      techStack: [
      ],
      description:
        "Alignment experiments on LLaVA, exploring how preference tuning shifts a vision-language model's responses.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
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
        "Diffusion-based app that renders a garment onto a person's photo from a single reference image.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/catherinelee274/virtual-try-on-team",
      },
    },
    {
      title: "Place.it",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "City planning tool for sketching proposed urban changes and visualizing them on a map before they're built.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/gits-lit/place.it/",
      },
    },

    {
      title: "Bikeable",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "Scores Boston bike routes by safety, learning from crash and street data to steer riders toward safer paths.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/ayushupneja/Bikeable",
      },
    },
    {
      title: "PictRNNary",
      techStack: ["🌟 Hackathon Winner"],
      description:
        "Multiplayer Pictionary where a recurrent network draws the sketches players race to guess.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/DevinMui/pictionary",
      }
    },
    {
      title: "Machine Learning Reading Group",
      techStack: ["For Fun :P",],
      description:
        "A casual reading group I host, working through recent machine learning papers with friends.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/catherinelee274/Machine-Learning-Reading-Group",
      }
    },
    {
      title: "Fraud Detection",
      techStack: ["Side Project"],
      description:
        "Click-fraud model predicting whether a mobile ad click leads to a real app download, trained on a heavily imbalanced dataset.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/catherinelee274/fraud_detection",
      }
    },
    {
      title: "Barcelona Prediction",
      techStack: ["Side Project"],
      description:
        "Models built on Barcelona's open city data to forecast traffic accidents and air pollution levels.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/catherinelee274/Barcelona-Prediction",
      }
    },



  ],
  achievements: []
} as const;
