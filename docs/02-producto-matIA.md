# 02 — Producto matIA

## Definición en una frase

**Consola educativa audio-first** con tutor de IA para niños de **5 a 10 años**. Estilo retro (Game Boy / Yoto). Pantalla-cero de entretenimiento; el aprendizaje es **activo y medible**.

---

## Usuario vs comprador

| Rol | Quién | Interacción |
|-----|-------|-------------|
| **Usuario** | Niño 5–10 años | Escucha, conversa con Mati (PTT), usa cartuchos |
| **Comprador / admin** | Padre o madre | App de padres, suscripción, reportes, límites |

Un dispositivo = un niño (no multi-perfil en MVP).

---

## Forma y diseño físico

| Elemento | Detalle |
|----------|---------|
| Forma | Dispositivo tipo juguete, **carcasa sellada** |
| Colores hardware | **Navy** `#2A3C86` + **Naranja** `#FF7A14` |
| Estética | Retro, robusto, esquineros de protección |
| Pantalla | **E-ink** (escala de grises, sin luz emitida) — apoyo visual al audio |
| Mascota | **Mati**, elefante en pixel art en la pantalla e-ink |
| Sin cámara | Por diseño (privacidad) |
| Ventilación | Sin rejillas; disipador interno (heat sink) |

---

## Audio-first

- El niño aprende **escuchando y conversando** con la IA
- Bocina + jack 3.5 mm + micrófono
- **Push-to-Talk (PTT):** el micrófono **solo** escucha mientras el niño mantiene presionado el botón
- **Sin escucha pasiva** — argumento clave de seguridad vs Miko, Curio, Echo Dot Kids

---

## Controles físicos

- Cruceta (D-pad)
- Botones A / B, Start / Select
- Perilla de volumen con tope seguro
- Puerto USB-C (carga)
- Jack 3.5 mm
- Lector NFC para **tarjetas-cartucho**

---

## Modelo híbrido online / offline

| Modo | Qué funciona |
|------|--------------|
| **Offline** | Audio pre-grabado del cartucho (cuentos, narraciones). Sin IA conversacional |
| **Online** | Tutor de IA generativo en la nube, acotado al tema del cartucho |

Las **tarjetas-cartucho físicas** (NFC):
- Cargan un tema y acotan a la IA
- Coleccionables
- Curadas / activadas por los padres desde la app

---

## IA acotada (RAG)

- Responde **solo** sobre contenido curado del cartucho activo
- **Sin web abierta**, filtros por edad
- Conversaciones que **terminan** — sin mecánicas de "brain rot"
- Moderación en entrada y salida
- Temperatura baja, respuestas cortas

---

## Sesión de aprendizaje (flujo pedagógico)

Mati **lidera** la sesión con estructura fija:

1. **Introducción** — explica el concepto con analogía simple
2. **Pregunta** — una pregunta de comprensión
3. **Evaluación** — celebra acierto o corrige con paciencia
4. **Refuerzo** — repaso de lección anterior (repetición espaciada)
5. **Cierre** — resume lo aprendido; se premia **terminar**, no empezar

El niño puede interrumpir con preguntas (PTT), pero Mati retoma el hilo.

---

## Pedagogía

- Recall activo
- Repetición espaciada (algoritmo tipo SM-2 / Anki)
- Reforzadores éticos
- **Regla de oro:** se premia terminar, no empezar

---

## Adaptación por edad

- Edad del niño configurada en perfil (app de padres)
- La IA adapta lenguaje y dificultad según edad (5–10)
- Contenido filtrado por edad

---

## Estados de Mati en pantalla e-ink

| Estado | Visual |
|--------|--------|
| Idle | Sentado, esperando |
| Escuchando (PTT) | Oreja levantada |
| Pensando | Burbuja de pensamiento |
| Respondiendo | Boca abierta, animado |
| Correcto | Celebrando |
| Incorrecto | Ánimo, "casi" |
| Offline | Durmiendo |
| Límite diario (Starter) | Expresión de descanso |

---

## Catálogo de contenido (referencia)

- Cuentos y leyendas
- Matemáticas básicas
- Ciencias
- Idiomas
- 500+ historias (claim marketing landing)

Ambos planes de suscripción incluyen **acceso completo a todos los cuentos**.

---

## Mati — personalidad de voz

- Elefante amigable y paciente
- Español mexicano (tú con el niño)
- Frases cortas (máx. ~2 oraciones por respuesta)
- Cálido, alentador; nunca hace sentir mal al niño por equivocarse
- TTS MVP: OpenAI `tts-1`, voz `nova` (futuro: voz custom ElevenLabs)
