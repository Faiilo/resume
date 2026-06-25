import { Course } from '../models/course.model';

export const COURSES: Course[] = [
  // 1. КУРСЫ ОТ ВЕНДОРОВ (ОБЯЗАТЕЛЬНЫЙ МИНИМУМ)
  
  {
    id: 1,
    title: 'Гибкие навыки для старта карьеры',
    platform: 'VK Education',
    certificateUrl: 'assets/certificates/vk-education.pdf',
    description: 'Маленький курс об общем строении карьеры от VK'
  },
  
  {
    id: 2,
    title: 'Go-1: шаг за шагом',
    platform: 'Яндекс Лицей',
    certificateUrl: 'assets/certificates/yandex-lyceum.pdf',
    description: 'Курс по обучению ЯП Go от Яндекс Лицея.'
  },
  
  {
    id: 3,
    title: 'Основы SQL',
    platform: 'Сбербанк (СберУниверситет)',
    certificateUrl: 'assets/certificates/sber.pdf',
    description: 'Курс по SQL и базам данных от СберУниверситета.'
  },

  {
    id: 4,
    title: 'Цифровой марафон от Сбера',
    platform: 'СберУниверситет, Нетология',
    certificateUrl: 'assets/certificates/it-marathon.pdf',
    description: 'Крупный цифровой марафон с курсами и задачи от Сбера и Нетологии'
  },
]