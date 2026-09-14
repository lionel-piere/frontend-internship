export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  status?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  initials: string;
  avatarUrl: string;
  role: string;
  company: string;
  introduction: string;
  about: string[];
  skills: {
    projectExposure: string[];
    currentlyLearning: string[];
  };
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
}

export const profileData: ProfileData = {
  name: 'Lionel Piere Punsalang',
  shortName: 'Lionel Piere',
  initials: 'LP',
  avatarUrl: '/profile.png',
  role: 'Software Developer Intern',
  company: 'Tito Solutions',
  introduction:
    'I’m a Software Developer Intern at Tito Solutions, learning full-stack development through practical projects. I enjoy understanding people’s real problems and building useful digital solutions.',
  about: [
    'I graduated from Saint Louis University with a degree in Entrepreneurship, specializing in Business Analytics. I build and personally test AI-assisted software prototypes while strengthening my programming and database fundamentals.',
    'My background in business analytics and volunteer media work shapes how I approach real-world problems, communicate ideas clearly, and learn new technical skills.',
  ],
  skills: {
    projectExposure: [
      'JavaScript and TypeScript',
      'React',
      'Firebase and Supabase',
      'Python and FastAPI',
      'SQLite',
      'Electron',
    ],
    currentlyLearning: [
      'Frontend and backend fundamentals',
      'NestJS and databases',
      'Git branching, pull requests, and code review',
      'AI architecture, planning, and problem understanding',
    ],
  },
  projects: [
    {
      id: 'mpm-portal',
      title: 'MPM: Mission Website and Portal MVP',
      category: 'Web Portal MVP',
      description:
        'An AI-assisted React/TypeScript and Firebase portal that I built and personally tested. Includes a church locator using Google Maps, Firestore directory data, and distance calculations. The code also includes facility booking and news/event publishing features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Google Maps API'],
    },
    {
      id: 'diets-prototype',
      title: 'D.I.E.T.S.: Hospital Dietary Management Prototype',
      category: 'In-Development Prototype',
      description:
        'An AI-assisted Python/FastAPI and SQLite prototype under development. Its code covers patient admissions, diet-order requests and approvals, meal allocation, intake tracking, and role-based access checks.',
      technologies: ['Python', 'FastAPI', 'SQLite'],
    },
    {
      id: 'document-expense-portal',
      title: 'Document & Expense Portal',
      category: 'Personal Web Application',
      description:
        'An AI-assisted React/TypeScript and Supabase application that my mother actively uses to organize documents and track expenses. Its code includes file storage and PDF/Excel exports.',
      technologies: ['React', 'TypeScript', 'Supabase'],
    },
    {
      id: 'yechidah-nexus',
      title: 'YECHIDAH Nexus: Personal Desktop Dashboard',
      category: 'Desktop Prototype',
      description:
        'An AI-assisted Electron/React desktop dashboard with local file scanning, file metadata integration, and activity-tracking components.',
      technologies: ['Electron', 'React', 'TypeScript'],
    },
  ],
  experience: [
    {
      organization: 'Mountain Provinces Mission (MPM)',
      role: 'Volunteer Media Host, Studio Staff & Filmmaker',
      period: '2024 - 2026',
      description:
        'Hosted live studio programs at the MPM studio and supported technical production, camera operation, and video editing using Sony Vegas and CapCut. Contributed to Firemakers, an SDA film series, during 2024 - 2025.',
    },
  ],
  education: [
    {
      institution: 'Saint Louis University, Baguio City',
      degree: 'Bachelor of Science in Entrepreneurship with Specialization in Business Analytics',
      details: 'Graduated July 2025',
    },
  ],
  certifications: [
    {
      title: 'Certified LLM Security Professional (CLLMSP)',
      issuer: 'Red Team Leaders',
      date: 'June 7, 2026',
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: 'March 2026',
    },
    {
      title: 'Maximize Productivity With AI Tools',
      issuer: 'United Latino Students Association',
      date: 'March 2026',
    },
    {
      title: 'Google Play Academy: Store Listing Certificate',
      issuer: 'Google Play Academy',
      date: 'February 2026',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Coursera',
      date: 'In progress',
      status: 'In progress',
    },
  ],
  languages: [
    { language: 'Filipino', proficiency: 'Native' },
    { language: 'English', proficiency: 'Fluent' },
  ],
};
