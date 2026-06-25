/**
 * Datos mock locales — fallback cuando el servidor no está disponible.
 * Cambia API_BASE_URL a tu IP local para Expo Go (ej. 192.168.1.10:3001).
 */
export const API_BASE_URL = 'http://192.168.1.10:3001';

export const mockData = {
  parent: {
    id: 'p1',
    name: 'María González',
    email: 'maria@familia.com',
    initials: 'MG',
    plan: 'Unlimited',
    planLabel: 'Plan Unlimited',
  },
  child: {
    id: 'c1',
    name: 'Sofía González',
    age: 7,
    avatar: '🦊',
    streak: 12,
    level: 3,
    deviceStatus: 'online',
    lastSync: 'Hace 2 min',
    activeCartridge: 'Matemáticas básicas',
    aiQuestionsToday: 18,
    aiQuestionsLimit: 30,
  },
  dashboard: {
    stats: {
      weeklyTime: '2h 40m',
      lessons: 14,
      accuracy: 87,
      trend: '+23%',
    },
    weeklyActivity: [
      { day: 'L', value: 35 },
      { day: 'M', value: 52 },
      { day: 'X', value: 41 },
      { day: 'J', value: 68 },
      { day: 'V', value: 55 },
      { day: 'S', value: 72 },
      { day: 'D', value: 48 },
    ],
    activeTopics: [
      { id: 'math', name: 'Matemáticas', progress: 72, color: 'navy', icon: '1234' },
      { id: 'reading', name: 'Lectura', progress: 54, color: 'coral', icon: 'abc' },
      { id: 'science', name: 'Ciencias', progress: 38, color: 'olive', icon: '🌍' },
    ],
    achievements: 4,
  },
  cartridges: {
    featured: {
      id: 'feat-math-2',
      title: 'Pack Matemáticas Grado 2°',
      lessons: 32,
      ageRange: '7–8 años',
      tag: 'DESTACADO',
    },
    topics: [
      { id: 't1', name: 'Matemáticas', lessons: 24, progress: 72, color: 'navy', icon: '1234', age: 7 },
      { id: 't2', name: 'Lenguaje', lessons: 18, progress: 54, color: 'coral', icon: 'abc', age: 6 },
      { id: 't3', name: 'Ciencias', lessons: 16, progress: 38, color: 'olive', icon: '🌍', age: 8 },
      { id: 't4', name: 'Historia', lessons: 12, progress: 25, color: 'mint', icon: '🏛️', age: 9 },
      { id: 't5', name: 'Arte', lessons: 10, progress: 60, color: 'coral', icon: '🎨', age: 5 },
      { id: 't6', name: 'Música', lessons: 8, progress: 45, color: 'olive', icon: '🎵', age: 10 },
    ],
  },
  report: {
    period: 'Mayo 2025',
    stats: { studyTime: '12h 30m', accuracy: 87, lessons: 47 },
    chartData: [
      { week: 'Sem 1', math: 45, reading: 38 },
      { week: 'Sem 2', math: 52, reading: 44 },
      { week: 'Sem 3', math: 61, reading: 50 },
      { week: 'Sem 4', math: 72, reading: 54 },
    ],
    dominated: [
      'Sumas con llevada',
      'Lectura de oraciones',
      'Formas geométricas',
      'Conteo hasta 100',
      'Sílabas abiertas',
    ],
    pending: ['Restas con llevada', 'Multiplicación básica', 'Comprensión lectora'],
  },
  controls: {
    dailyLimitHours: 2,
    enabledDays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    schedule: '8:00 AM – 8:00 PM',
    aiOnline: true,
    privateMode: false,
    contentAge: '7–8 años',
  },
  loginMessages: [
    '¡Hoy Sofía aprendió 3 cosas nuevas!',
    'Mati está listo para enseñar con cariño',
    'Aprender sin pantallas, con propósito',
    'Tu hijo progresa cada día con matIA',
  ],
};

export default mockData;
