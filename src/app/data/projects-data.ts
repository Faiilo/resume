import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  // 1. ОЛИМПИАДЫ И КОНКУРСЫ
  
  {
    id: 1,
    title: 'ArtMasters',
    description: 'Участие в чемпионате ArtMasters. Выполнение тестового задания и представление портфолио в номинации "Веб-дизайн".',
    technologies: ['Figma', 'Photoshop', 'AI'],
    screenshotUrl: 'assets/olympiads/artmasters/qs.png',
    certificateUrl: 'assets/olympiads/artmasters/diplom-qs-79.pdf',
    githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Олимпиады/Artmasters',
    category: 'olympiad',
  },
  
  {
    id: 2,
    title: 'Траектория будущего',
    description: 'Участие в олимпиаде "Траектория будущего" в номинациях "Astra", "RedOS", "Нейросетевое искусство" и "Разработка игр".',
    technologies: ['RedOS', 'Astra Linux', 'AI', 'Vegas PRO'],
    screenshotUrl: 'assets/olympiads/tb-future-2026/screenshot.jpg',
    certificateUrl: 'assets/olympiads/tb-future-2026/certificate.pdf',
    githubUrl: 'https://github.com/Faiilo/tb-future-2026',
    category: 'olympiad',
  },

  // 2. ОЛИМПИАДЫ И КОНКУРСЫ
  
  {
    id: 3,
    title: 'Большие вызовы',
    description: 'Участие в конкурсе "Большие вызовы" в направлении "Транспортно-логистические системы". Финалист.',
    technologies: ['Python', 'YoLo'],
    screenshotUrl: '/resume/assets/olympiads/big-challenges-2026/screenshot.jpg',
    certificateUrl: '/resume/assets/olympiads/big-challenges-2026/screenshot.jpg',
    githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Олимпиады/Большие_Вызовы',
    category: 'olympiad',
  },

  // 3. СТАЖИРОВКИ И КЕЙСЫ
  
  {
    id: 5,
    title: 'Кейс VK: Тексты для запуска кастомных стикеров ВКонтакте',
    description: 'Решение кейса от VK Education. Тексты для запуска кастомных стикеров ВКонтакте',
    technologies: ['MS Word', 'Mail.ru Cloud'],
    screenshotUrl: '/resume/assets/internships/vk_case2.png',
    // certificateUrl: 'assets/internships/vk-case/certificate.pdf',
    githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Стажировки_и_кейсы/VK_Креативные_Индустрии',
    category: 'case',
  },
  
  {
    id: 6,
    title: 'Цифровой марафон Сбера',
    description: 'Участие в цифровом марафоне от Сбербанка. Решение задач по анализу данных и разработке.',
    technologies: ['Python', 'HTML', 'JS'],
    screenshotUrl: '/resume/assets/internships/it-marathon.jpg',
    certificateUrl: '/resume/assets/internships/it-marathon.pdf',
    githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Стажировки_и_кейсы/Сбер_марафон',
    category: 'internship',
  },

  // 4. ПРОЕКТЫ С ПРАКТИКИ
  
  {
    id: 8,
    title: 'Цифровые решения: Редизайн сайта',
    description: 'Редизайн корпоративного сайта для компании "Цифровые решения". Улучшение юзабилити и визуального стиля.',
    technologies: ['Figma', 'Photoshop'],
    screenshotUrl: '/resume/assets/projects/evilink.jpg',
    githubUrl: 'https://github.com/Faiilo/college-projects/tree/main/Цифровые_Решения',
    category: 'practice',
  },

  // 5. КУРСОВЫЕ ПРОЕКТЫ
  
  {
    id: 9,
    title: 'Курсовая: Документооборот на Django',
    description: 'Разработка системы электронного документооборота для организации. Реализация на Django с базой данных PostgreSQL.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS'],
    screenshotUrl: '/resume/assets/coursework/django.png',
    githubUrl: 'https://github.com/Faiilo/course-document-flow',
    category: 'coursework',
  },
  
  {
    id: 10,
    title: 'Курсовая: Индивидуальная тема на Laravel',
    description: 'Разработка индивидуального проекта на фреймворке Laravel. Включает авторизацию, CRUD-операции и админ-панель.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    screenshotUrl: '/resume/assets/coursework/laravel.png',
    githubUrl: 'https://github.com/Z1Dipex/Agent-Focus-Site/tree/main',
    category: 'coursework',
  },

  // 6. ЗАДАНИЕ НА МЕСТЕ ПРАКТИКИ
  
  {
    id: 11,
    title: 'Сайт организации',
    description: 'Разработка корпоративного сайта для организации, в которой проходила практика. Реализация маркетингового лендинга, резервного копирования и HTTPS.',
    technologies: ['Astro', 'Headless CMS', '1C-Bitrix', 'Webflow', 'Framer'],
    // screenshotUrl: 'assets/practice/company-site/screenshot.jpg',
    // githubUrl: 'https://github.com/your-username/practice-company-site',
    category: 'practice',
  }
];