export interface Practice {
  resume: {
    title: string;
    description: string;
    fileUrl: string;
    googleDocUrl: string;
  };
  internships: Internship[];
  documents: {
    description: string;
    googleDriveLink: string;
    templatesLink: string;
  };
  practiceTasks: PracticeTask[];
}

export interface Internship {
  id: number;
  company: string;
  position: string;
  status: string;
  date: string;
  screenshots?: string;
  link?: string;
  screenshotUrl?: string; 
}

export interface PracticeTask {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  screenshotUrl?: string;
}