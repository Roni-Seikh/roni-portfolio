// ============================================================================
// PORTFOLIO CONTENT — edit everything here. No other file needs to change.
// ============================================================================

export const profile = {
  name: 'Roni Seikh',
  initials: 'RS',
  title: 'Full Stack Developer & AI/ML Enthusiast',
  tagline: 'Building intelligent, scalable, and impactful digital experiences with full-stack development and AI.',
  location: 'Kolkata, West Bengal',
  email: 'roni.seikh.softwareeng@gmail.com',
  phone: '+91 6289505567',
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/Roni-Seikh',
  linkedin: 'https://www.linkedin.com/in/roniseikh',
  bio: [
    "I'm a B.Tech Computer Science & Engineering student who builds software at the intersection of full-stack web development and applied AI/ML — from AI-powered developer tools to machine-learning dashboards.",
    'I like taking a problem apart, from database schema to UI polish, and shipping something that actually works end to end. Currently exploring how large language models can make everyday developer and data workflows faster.',
  ] as string[],
  currentlyLearning: ['Advanced LLM tooling', 'System design', 'Cloud deployment (Docker)'],
};

// Verified facts only — nothing fabricated.
export const stats = [
  { value: '8.65', label: 'CGPA / 10' },
  { value: '3', label: 'Major Projects Shipped' },
  { value: '4', label: 'Web Dev Internships' },
  { value: '2027', label: 'Expected Graduation' },
];

export const achievements = [
  {
    title: 'Global AI Hackathon Finalist',
    description: 'Selected as a finalist in a Global AI Hackathon, demonstrating practical problem-solving with emerging AI technologies.',
  },
  {
    title: 'Tech Lead, Creatiq Media',
    description: 'Served as Tech Lead, contributing to technical development, project execution, and team collaboration.',
  },
  {
    title: 'Organizer & Host, TechSpark Summit 2026',
    description: 'Organized and hosted a student-focused technology and career development summit covering Web Development and Generative AI.',
  },
];

export type ProjectCategory = 'Full Stack' | 'AI/ML' | 'Web Development';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  bullets: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// NOTE: specific per-repo GitHub URLs weren't provided — githubUrl currently
// points to the main profile. Swap in the exact repo link any time.
export const projects: Project[] = [
  {
    id: 'copilot-mini',
    title: 'Copilot Mini',
    category: 'AI/ML',
    shortDescription: 'AI-powered coding assistant with 10 code-intelligence tools and GitHub integration.',
    description:
      'A full-stack AI coding assistant supporting Gemini, with streaming AI responses and persistent conversation history.',
    bullets: [
      'Built 10 AI-powered code intelligence tools: explanation, bug detection, refactoring, security scanning, performance analysis, translation, unit-test generation, documentation, commit-message generation, and diff analysis.',
      'Integrated GitHub OAuth and the GitHub API to browse repos, edit files with Monaco Editor, generate AI commit messages, commit changes, and run automated AI pull-request reviews.',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL', 'GitHub API'],
    githubUrl: 'https://github.com/Roni-Seikh',
    featured: true,
  },
  {
    id: 'ai-resume-interview',
    title: 'AI Resume Interview Mock Portal',
    category: 'Full Stack',
    shortDescription: 'Full-stack AI interview platform that analyzes resumes and runs mock interviews.',
    description:
      'Analyzes PDF/DOCX resumes and generates personalized technical & HR interview questions using Claude AI.',
    bullets: [
      'Implemented JWT + OTP authentication, timed interviews, webcam/anti-cheat monitoring, performance analytics, AI feedback, and PDF report generation.',
      'Built REST APIs with Flask and MySQL for users, resumes, interviews, questions, results, feedback, and violation tracking.',
    ],
    tech: ['React.js', 'Flask', 'MySQL', 'Claude AI'],
    githubUrl: 'https://github.com/Roni-Seikh',
    featured: true,
  },
  {
    id: 'water-pollutants-predictor',
    title: 'Water Pollutants Predictor',
    category: 'AI/ML',
    shortDescription: 'ML web app predicting six water-quality parameters from historical data.',
    description:
      'A machine learning web application to predict six water-quality parameters using Year and Station ID as inputs.',
    bullets: [
      'Implemented a Random Forest + Multioutput Regressor model to predict Dissolved Oxygen, Nitrate, Nitrite, Sulfate, Phosphate, and Chloride levels.',
      'Built an interactive Streamlit dashboard with data visualizations, predicted-vs-real comparisons, station mapping, and CSV result downloads.',
    ],
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/Roni-Seikh',
    featured: true,
  },
];

export interface SkillCategory {
  title: string;
  badge: string;
  items: string[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    badge: 'Interfaces',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
    description: 'Building responsive, component-driven interfaces.',
  },
  {
    title: 'Backend',
    badge: 'Services',
    items: ['Node.js', 'Flask', 'REST APIs'],
    description: 'Designing APIs and server-side application logic.',
  },
  {
    title: 'Programming',
    badge: 'Foundations',
    items: ['C++', 'Java', 'Python'],
    description: 'Core languages for problem-solving and application logic.',
  },
  {
    title: 'Databases',
    badge: 'Persistence',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'DBMS'],
    description: 'Relational and document data modeling.',
  },
  {
    title: 'AI / Machine Learning',
    badge: 'Intelligence',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Streamlit'],
    description: 'Data analysis, visualization, and applied ML models.',
  },
  {
    title: 'Tools & Platforms',
    badge: 'Workflow',
    items: ['Git', 'GitHub', 'Power BI', 'Jupyter Notebook', 'Google Colab'],
    description: 'Version control, BI, and day-to-day dev environment.',
  },
];

export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  description: string;
  refId?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'uptoskills',
    title: 'Web Development Intern',
    organization: 'Uptoskills',
    dateRange: 'Aug 2025 – Nov 2025',
    description:
      'Contributed to web development tasks, demonstrating willingness to learn, analytical thinking, and a professional attitude toward growth.',
  },
  {
    id: 'codevocado',
    title: 'Web Developer Intern',
    organization: 'Codevocado',
    dateRange: 'Apr 2025 – Jul 2025',
    description:
      'Contributed to web development projects using React.js, Flask, and MySQL — collaborating on development tasks, debugging, and improving application functionality.',
    refId: 'Certificate ID: COV-09-04-2025-1000016',
  },
  {
    id: 'vaultofcodes',
    title: 'Web Development Intern',
    organization: 'VaultofCodes',
    dateRange: 'Mar 2025 – Apr 2025',
    description:
      'Completed a 1-month web development internship, recognized as sincere, hardworking, technically sound, and result-oriented.',
    refId: 'UID: 2025VC3#116',
  },
  {
    id: 'techsaksham',
    title: 'AI Intern — TechSaksham',
    organization: 'Edunet Foundation',
    dateRange: 'Feb 2025 – Mar 2025',
    description:
      'Completed an AI-focused internship under TechSaksham, a joint CSR initiative of Microsoft & SAP implemented by Edunet Foundation, gaining practical exposure to AI and technology-driven learning.',
  },
];

export interface Certification {
  id: string;
  title: string;
  organization: string;
  dateRange?: string;
  category: 'Web Development' | 'Artificial Intelligence' | 'Data Analytics' | 'Power BI' | 'LLMs' | 'Security';
  refId?: string;
}

export const certifications: Certification[] = [
  {
    id: 'power-bi',
    title: 'Power BI for Business Applications',
    organization: 'Microsoft Elevate / AICTE',
    dateRange: 'Dec 2025 – Jan 2026',
    category: 'Power BI',
    refId: 'Student ID: STU67399a6e56fbd1731828334',
  },
  {
    id: 'ai-transformative-learning',
    title: 'AI: Transformative Learning',
    organization: 'TechSaksham (Microsoft, SAP & Edunet Foundation)',
    category: 'Artificial Intelligence',
    refId: 'TSPIN: TSPIN24_626229',
  },
  {
    id: 'ai-data-analytics-s4f',
    title: 'AI & Data Analytics — Green Skills',
    organization: 'Skills4Future (AICTE, Shell India & Edunet Foundation)',
    dateRange: 'Jun 2025 – Jul 2025',
    category: 'Data Analytics',
    refId: 'Student ID: STU67399a6e56fbd1731828334',
  },
  {
    id: 'llm-conversational-data',
    title: 'Conversational Data Analysis with LLMs',
    organization: 'AICTE & VOIS, implemented by Edunet Foundation',
    dateRange: 'Sep 2025 – Oct 2025',
    category: 'LLMs',
  },
  {
    id: 'isro-aiml',
    title: 'AI/ML Specialist',
    organization: 'ISRO (IIRS)',
    category: 'Artificial Intelligence',
  },
  {
    id: 'isea-security',
    title: 'Information Security & Cyber Security',
    organization: 'ISEA Phase III',
    category: 'Security',
  },
  {
    id: 'stp-fullstack',
    title: 'Full-Stack Web Development',
    organization: 'STP Computer Education',
    category: 'Web Development',
  },
  {
    id: 'ibm-aiml',
    title: 'AI/ML Certifications',
    organization: 'IBM SkillsBuild',
    category: 'Artificial Intelligence',
  },
];

export const education = [
  { school: 'Brainware University', detail: 'B.Tech in Computer Science and Engineering — CGPA: 8.65/10', years: '2023 – 2027' },
  { school: 'Rabindranath Institutions', detail: 'Higher Secondary — 64.60%', years: '2022 – 2023' },
  { school: 'Rabindranath Institutions', detail: 'Secondary — 78.43%', years: '2020 – 2021' },
];
