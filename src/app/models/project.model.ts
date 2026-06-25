export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  screenshotUrl?: string;
  certificateUrl?: string;
  category: 'olympiad' | 'case' | 'practice' | 'coursework' | 'internship'; // Добавили internship
  date?: string;
  platform?: string; // Добавили platform
}