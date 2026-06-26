/**
 * Contenido de la guía para padres — estrategias ABA para transición a matIA.
 * Basado en análisis conductual aplicado (respaldo UNAM).
 */

export const AYUDA_BANNER = {
  title: 'Guía para padres',
  subtitle: 'Transición de dispositivos a matIA',
  badge: 'Metodología respaldada por investigadores UNAM',
};

export const ESTRATEGIAS = [
  {
    id: 'fading',
    number: 1,
    title: 'Cambio gradual',
    subtitle: 'Fading',
    icon: 'Sunset',
    color: 'mint',
    description:
      'Los hábitos de pantalla no cambian de un día para otro. La mejor estrategia es una transición progresiva: reducir gradualmente estímulos altos — brillo, color, animaciones, sonidos y tiempo total — mientras aumenta el uso de dispositivos educativos de baja estimulación, como lectores e-ink.',
    keyMessage: 'No quites de golpe; reemplaza paso a paso.',
    steps: [
      {
        id: 'fading-1',
        text: 'Reduce el brillo y las animaciones del dispositivo actual durante una semana.',
      },
      {
        id: 'fading-2',
        text: 'Introduce matIA en momentos cortos (15–20 min) junto al dispositivo habitual.',
      },
      {
        id: 'fading-3',
        text: 'Sustituye una sesión diaria de pantalla alta por una actividad con matIA.',
      },
      {
        id: 'fading-4',
        text: 'Aumenta progresivamente el tiempo con matIA hasta que sea la opción principal.',
      },
    ],
  },
  {
    id: 'access-economy',
    number: 2,
    title: 'Economía de acceso',
    subtitle: 'Access Economy / Stimulus Control',
    icon: 'ShieldCheck',
    color: 'olive',
    description:
      'El acceso a pantallas debe seguir reglas claras y consistentes, no el aburrimiento ni la disponibilidad inmediata. El entorno debe hacer que la mejor elección sea la más fácil antes de que aparezca el conflicto.',
    keyMessage:
      'Lo que siempre está disponible se usa; lo que tiene reglas claras se usa con intención.',
    steps: [
      {
        id: 'access-1',
        text: 'Define horarios fijos para pantallas de alto estímulo (ej. solo fines de semana).',
      },
      {
        id: 'access-2',
        text: 'Guarda dispositivos estimulantes fuera del alcance visual del niño.',
      },
      {
        id: 'access-3',
        text: 'Deja matIA accesible en un lugar visible y listo para usar.',
      },
      {
        id: 'access-4',
        text: 'Usa los controles parentales de la app para reforzar los horarios acordados.',
      },
    ],
  },
  {
    id: 'differential-reinforcement',
    number: 3,
    title: 'Reforzamiento diferencial',
    subtitle: 'Differential Reinforcement',
    icon: 'Heart',
    color: 'coral',
    description:
      'Cuando el niño elige por sí mismo la pantalla educativa, los padres deben reforzar de inmediato ese comportamiento con atención positiva, elogio específico, tiempo compartido o recompensas simples.',
    keyMessage:
      'El comportamiento que recibe atención positiva es el que más probablemente se repite.',
    steps: [
      {
        id: 'reinforce-1',
        text: 'Observa y detecta cuando el niño elige matIA sin que se lo pidas.',
      },
      {
        id: 'reinforce-2',
        text: 'Elogia de forma específica: "Me encanta que elegiste aprender con matIA".',
      },
      {
        id: 'reinforce-3',
        text: 'Comparte un momento breve preguntando qué aprendió o le gustó.',
      },
      {
        id: 'reinforce-4',
        text: 'Usa recompensas simples (stickers, tiempo extra de juego) de forma consistente.',
      },
    ],
  },
];
