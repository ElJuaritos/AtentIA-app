# 03 — Identidad visual

Guía para la **app de padres**, la landing (`AtentIA/client`) y coherencia con el producto físico.

---

## Dos paletas: digital vs hardware

### Paleta digital (app + landing)

Usada en UI web/móvil. Definida en `AtentIA/client/tailwind.config.js`.

| Token | Hex | Uso |
|-------|-----|-----|
| **navy** | `#111E31` | Texto principal, fondos oscuros, headers |
| **coral** | `#FFAEB2` | Acentos, CTAs secundarios, alertas suaves, eyebrow |
| **mint** | `#B2D7C8` | Indicadores positivos, "en línea", progreso |
| **olive** | `#658E74` | Botones primarios, checks, éxito |
| **offwhite** | `#FAFAFA` | Fondos de página |
| **text** | `#111E31` | Cuerpo de texto (= navy) |

#### Colores auxiliares (mockups / ilustraciones)

| Hex | Uso |
|-----|-----|
| `#1a2838` | Pantalla interna del dispositivo (mockup) |
| `#FFAEB2` / `#B2D7C8` / `#658E74` | Pixel art Mati, gradientes aurora |

#### Opacidades habituales

- Fondos suaves: `coral/10`, `coral/15`, `mint/10`, `mint/20`, `olive/10`, `olive/20`, `navy/5`, `navy/10`
- Texto secundario: `text/50`, `text/60`, `text/70`
- Bordes: `navy/10`, `navy/20`, `white/10`, `white/20`

---

### Paleta hardware (dispositivo físico matIA)

| Token | Hex | Uso |
|-------|-----|-----|
| **Navy hardware** | `#2A3C86` | Carcasa principal |
| **Naranja** | `#FF7A14` | Acentos físicos, botones, branding |

> En la app digital se prioriza la paleta **navy `#111E31` + olive + coral + mint** por legibilidad en pantallas. El navy hardware es más saturado y se usa en renders 3D y materiales impresos.

---

## Tipografía

| Rol | Fuente | Peso | Uso |
|-----|--------|------|-----|
| **heading** | Nunito | 700–800 (bold/extrabold) | Títulos, números grandes en reportes |
| **body** | Inter | 400–600 | Párrafos, labels, formularios |

### Escala tipográfica (referencia landing)

| Elemento | Tamaños responsivos |
|----------|---------------------|
| H1 hero | `1.65rem` → `6xl` |
| H2 sección | `2xl` → `4xl` |
| Body | `sm` → `lg` |
| Labels / badges | `xs` → `sm` |
| Eyebrow | `xs` → `base`, uppercase, tracking-wide |

---

## Sombras y elevación

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-soft` | `0 8px 32px rgba(17,30,49,0.08)` | Cards, navbar |
| `shadow-glow` | `0 0 40px rgba(178,215,200,0.35)` | Dispositivo mockup |
| `shadow-olive` | `0 8px 24px rgba(101,142,116,0.35)` | Botón primario hover |
| `shadow-coral` | `0 8px 24px rgba(255,174,178,0.35)` | Acentos coral |

---

## Formas y espaciado

- **Border radius:** `rounded-2xl`, `rounded-3xl` en cards; `rounded-full` en botones y chips
- **Botones primarios:** fondo `olive`, texto blanco, pill shape
- **Botones secundarios:** borde `navy/20`, fondo transparente o `navy/5`
- **Cards:** fondo blanco sobre `offwhite`, borde sutil o `shadow-soft`
- **Secciones oscuras:** fondo `navy`, acentos `coral` y `mint`

---

## Tono de voz (copy)

### Para la app de padres
- Claro, directo, tranquilizador
- "Tú tienes el control. Siempre."
- Evitar jerga técnica (RAG, tokens, API)
- Hablar de **aprendizaje**, **tiempo**, **temas**, **preguntas a Mati**

### Para marketing (referencia)
- Problem-first: empatía con el dolor de las pantallas
- Eyebrow: *"Sin pantallas. Con propósito."*
- No culpar al padre; ofrecer alternativa concreta

### En inglés (pitch MIT)
- Mismo mensaje, datos con fuente
- "Associates with" no "causes" (evidencia scrolling/memoria)

---

## Iconografía

- Librería: **Lucide React** (landing actual)
- Iconos en cajas redondeadas (`IconBox`) con fondos semitransparentes de la paleta
- Tamaño típico: 16–24 px en badges; 32–36 px en features

---

## Logo y marca

- Marca producto: **MatIA** / **Mati**
- Marca empresa: **AtentIA**
- Logo: tipográfico con icono coral (ver `AtentIA/client/src/components/Logo.jsx`)

---

## Principios UI para AtentIA-app

1. **Mobile-first** — reportes legibles en pantalla pequeña
2. **Jerarquía clara** — métricas grandes (Nunito extrabold), contexto pequeño
3. **Confianza** — mucho blanco/offwhite, acentos olive/mint para positivo
4. **No infantilizar** — la app es para adultos; Mati es para niños, no la UI
5. **Accesibilidad** — contraste navy sobre offwhite; evitar solo color para estado crítico
6. **Consistencia** — reutilizar tokens de esta guía en toda la app

---

## Breakpoints (referencia)

| Token | Ancho |
|-------|-------|
| xs | 480px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |
