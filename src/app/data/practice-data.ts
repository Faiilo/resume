import { Practice } from '../models/practice.model';

export const PRACTICE_INFO = {
  resume: {
    title: 'Резюме',
    description: 'Моё профессиональное резюме с опытом работы, навыками и проектами.',
    fileUrl: 'assets/docs/resume-filenko.pdf',
  },
  
  internships: [
    {
      id: 1,
      company: 'VK',
      position: 'Стажер-разработчик',
      status: 'Участие в кейс-чемпионате',
      date: '2026',
      screenshots: 'assets/internships/screenshots/',
      link: 'https://education.vk.company/education_projects'
    },
    {
      id: 2,
      company: 'Сбербанк',
      position: 'Участник цифрового марафона',
      status: 'Пройдены Образовательный этап и Тест',
      date: '2026',
      screenshots: 'assets/internships/it-marathon.pdf',
      link: 'https://www.sberbank.ru/ru/person/it-marathon'
    }
  ],
  
  documents: {
    description: 'Документы по практике: договор, отчёты, характеристики.',
    googleDriveLink: 'https://drive.google.com/drive/folders/1RG-9mT8iZkZ7XciQI4vd3IvOx78m3XQJ?usp=sharing',
    templatesLink: 'https://drive.google.com/drive/u/0/folders/1rG3dJ-CJwdTQqq3NOBDH0JE9wopNSuPq'
  },
  
  practiceTasks: [
    {
      id: 1,
      title: 'Сайт организации',
      description: 'Разработка сайта для организации. Включает: восстановление из резервной копии, HTTPS, резервное копирование БД, анализ эффективности, улучшение юзабилити.',
      technologies: ['Astro', 'Headless CMS', '1C-Bitrix', 'Webflow', 'Framer', 'PostgreSQL'],
      githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Практика/Сайт_организации',
      screenshotUrl: 'assets/projects/migrant.png'
    },
    {
      id: 2,
      title: 'Редизайн сайта (Цифровые решения)',
      description: 'Редизайн корпоративного сайта компании "Цифровые решения". Улучшение юзабилити по книге "Не заставляйте меня думать".',
      technologies: ['Figma', 'Photoshop'],
      githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Цифровые_Решения',
      // screenshotUrl: 'assets/projects/digital-solutions-redesign/screenshot.jpg'
    },
  ]
};