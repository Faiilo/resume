import { Activity } from '../models/activity.model';

export const ACTIVITIES: Activity[] = [
  // ============================================
  // 1. КОНФЕРЕНЦИИ (МИНИМУМ ОДНА ОЧНАЯ)
  // ============================================
  {
    id: 1,
    title: 'Экскурсия в НИУ МЭИ от Взлёта',
    description: 'Посещение НИУ МЭИ с преподавателями. Знакомство с направлениями подготовки.',
    type: 'conference',
    imageUrl: 'assets/events/mei.png',
    date: '2026',
    location: 'Москва'
  },
  
  {
    id: 2,
    title: 'Цифровые решения',
    description: 'Экскурсия в офис компании "Цифровые решения". Знакомство с проектами и командой.',
    type: 'conference',
    imageUrl: 'assets/events/digital-solutions-tomilino-2026.jpg',
    date: '2026',
    location: 'Люберцы'
  },
  
  // ============================================
  // 3. СОЦИАЛЬНАЯ АКТИВНОСТЬ
  // ============================================
  
  {
    id: 12,
    title: 'Реакции в канале "Max"',
    description: 'Активное участие в канале в Максе. Скриншоты реакций.',
    type: 'social',
    imageUrl: 'assets/social/max/screen.png',
    date: '2026'
  },
  
  {
    id: 13,
    title: 'Видео для дня открытых дверей техникума',
    description: 'Создание видео для дня открытых дверей техникума. Режиссёр.',
    type: 'social',
    imageUrl: 'assets/social/college-open-day-video.png',
    date: '2026'
  },
  
  {
    id: 14,
    title: 'Интервью с "Ред Софт"',
    description: 'Участие в интервью с представителями компании "Ред Софт". Обсуждение карьерных перспектив.',
    type: 'social',
    imageUrl: 'assets/social/red-soft-interview.png',
    date: '2026'
  },
  
  // ============================================
  // 4. УЧЕБНЫЕ ЗАДАНИЯ И КОНСПЕКТЫ
  // ============================================
  
  {
    id: 18,
    title: 'Конспект "Бережливое производство"',
    description: 'Конспект по дисциплине "Бережливое производство".',
    type: 'note',
    link: 'https://docs.google.com/document/d/1h2rHkb6eqE5-Q71yTvSvlWekU0eET69wrD9BHJ_bLko/edit?usp=sharing',
    date: '2026'
  },
  
  {
    id: 19,
    title: 'Конспект "Численные методы"',
    description: 'Конспект по дисциплине "Численные методы".',
    type: 'note',
    link: 'https://docs.google.com/document/d/1IHw_Ct_P_fU2a0i33FgzMD9UrcQ9DxWS-T3pVZitGto/edit?usp=sharing',
    date: '2026'
  },
  
  {
    id: 20,
    title: 'Численные методы: Colab',
    description: 'Набор кодов в Google Colab по численным методам: поиск корней, логистическая регрессия.',
    type: 'note',
    link: 'https://colab.research.google.com/drive/1Mo9xF6c1FxqQ4_ahpjU4p6H_3w0nCN7T?usp=sharing',
    date: '2026'
  }
];