# 06 — Pedagogía y seguridad

## Pedagogía

### Principios
- **Recall activo** — el niño responde, no solo escucha
- **Repetición espaciada** — repaso en intervalos crecientes (SM-2)
- **Reforzadores éticos** — celebrar esfuerzo y completar, no manipular engagement
- **Sin brain rot** — conversaciones que terminan; no feeds infinitos

### Regla de oro
> Se premia **terminar**, no empezar.

### Flujo de sesión (Mati lidera)
1. Introducción → 2. Pregunta → 3. Evaluación → 4. Refuerzo → 5. Cierre

### Adaptación
- Edad en perfil (5–10) ajusta vocabulario y dificultad
- Si el niño falla 2 veces, Mati explica diferente y avanza (sin frustrar)

---

## Seguridad de la IA

### Push-to-Talk
- Micrófono **solo activo** mientras se presiona el botón
- Imposible escucha pasiva por hardware + firmware
- Diferenciador vs juguetes IA criticados en 2025

### IA acotada (RAG)
- Solo responde sobre contenido del cartucho activo
- Sin acceso a internet abierta
- System prompt con restricción de tema + reglas de seguridad absolutas
- Moderación OpenAI en entrada y salida
- `temperature: 0.5`, `max_tokens: ~120`

### Temas bloqueados (Mati no responde)
Violencia, adultos, política, noticias, miedo, religión, datos personales, contenido inapropiado.

Respuesta estándar:
> *"Eso no lo sé, pero sí sé mucho sobre [tema]. ¿Me preguntas algo de eso?"*

### Anti-jailbreak infantil
El prompt no obedece "olvida tus instrucciones". Preguntas meta → Mati se mantiene en personaje.

---

## Privacidad de datos

| Dato | ¿Se guarda? | Retención |
|------|-------------|-----------|
| Audio de voz del niño | **No** | Procesado y descartado al instante |
| Transcripción texto | Sí (solo reporte Completo) | 90 días |
| Progreso / aciertos | Sí | Mientras cuenta activa |
| Nombre y edad | Sí | Mientras cuenta activa |

### Medidas técnicas
- HTTPS/TLS 1.3
- Sin cámara, sin geolocalización en dispositivo
- API keys solo en backend (nunca en firmware)
- PTT = privacidad por diseño

---

## Compliance

| Regulación | Aplica | Acción |
|------------|--------|--------|
| **LFPDPPP** (México) | Sí | Aviso de privacidad; datos del menor bajo custodia del padre |
| **COPPA** (EE.UU.) | Si venden en USA | Consentimiento parental explícito |
| **GDPR** | Si expanden a EU | Derecho al olvido, portabilidad |

La app debe incluir:
- Aviso de privacidad claro
- Consentimiento parental al registrar perfil del niño
- Opción de exportar / eliminar datos del niño

---

## Evidencia para pitch (cómo hablar del problema)

### Pantallas y memoria/atención
- **No** decir "provoca daño" — decir **"se asocia con"**
- Evidencia mayormente correlacional, no causal robusta a largo plazo
- Mecanismos: atención dividida, efecto Google, sueño
- Fuentes: Science (Sparrow 2011), PNAS (Uncapher 2018), Psychonomic Bulletin & Review (2015), Nature Sci Reports (2025)

### PROFECO 2018 (CDMX)
Usar para empatizar con padres mexicanos — ver `01-contexto-y-objetivos.md`.

---

## Mensajes clave para la app (confianza)

| Mensaje | Dónde mostrarlo |
|---------|-----------------|
| "La voz de tu hijo no se guarda" | Onboarding / privacidad |
| "Mati solo escucha cuando tu hijo presiona el botón" | FAQ / seguridad |
| "Sin cámara, sin escucha permanente" | Marketing + app |
| "Tú eliges qué cartuchos están activos" | Gestión contenido |
| "30 preguntas/día en Starter — incluido en tu plan" | Dashboard Starter |
