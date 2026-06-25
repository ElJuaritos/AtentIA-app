# 04 — Negocio y mercado

## Modelo de ingresos

| Concepto | Precio (MXN) | Notas |
|----------|--------------|-------|
| **Dispositivo matIA** | ~1,499 (one-time) | Hardware + onboarding |
| **Mati Starter** | 149 / mes | Todos los cuentos + **30 preguntas/día** a la IA |
| **Mati Unlimited** | 299 / mes | Todos los cuentos + **preguntas ilimitadas** a la IA |

### Regla de diferenciación

> **El único diferenciador entre Starter y Unlimited es el límite diario de preguntas a Mati.**

Ambos planes incluyen:
- Acceso completo a todos los cuentos
- App para padres con reportes (básico / detallado / completo)

Facturación anual (landing): 2 meses gratis (10 meses pagados).

Pre-orden early adopter: primeras 100 familias → **3 meses gratis** (claim landing).

---

## Unit economics (API / IA)

Referencia para decisiones de producto (no mostrar al usuario final):

| Métrica | Valor |
|---------|-------|
| Costo por interacción (1 pregunta PTT) | ~$0.0022 USD (~$0.04 MXN) |
| Costo por sesión (~20 preguntas) | ~$0.044 USD |
| Starter tope 30 preg/día × 30 días | ~900 preguntas/mes → ~$1.98 USD (~$36 MXN) |
| Margen Starter al límite diario | ~80%+ sobre costos de API |

Stack IA MVP: OpenAI Whisper + GPT-4o-mini + TTS `nova`.

---

## TAM / SAM / SOM (2024–2025)

Presentar siempre como **rangos con fuente** — las cifras varían entre firmas.

| Métrica | Valor | Fuente / notas |
|---------|-------|----------------|
| **TAM** | ≈ 187 mil M USD | EdTech global (Grand View Research) |
| **TAM operativo** | ≈ 18 mil M USD | Juguetes inteligentes 14.4B + tutores IA 3.55B |
| **SAM** | ≈ 3.2 mil M USD | Reproductores audio niños (Marketintelo) |
| Validación SAM | Tonies ~519M USD (2024, +33%); Yoto ~128M USD (2024, +86%) | Ingresos reales |
| **SOM México premium** | EdTech MX 4.4 mil M (2024) → 14.4 mil M (2033, CAGR 12.8%) | IMARC |
| Población objetivo | ~12.9 M niños 6–11 | CONAPO/INEGI 2024 |
| Techo premium MX | ~165 M USD/año | Estimación equipo |
| Captura temprana | ~1.9–3.8 M USD/año | Escenario conservador–moderado |

---

## Competidores y diferenciación

| Competidor | Su enfoque | Ventaja matIA |
|------------|------------|---------------|
| **Yoto / Tonies / Storypod** | Audio pasivo sin pantalla | Tutor IA + recall + medición + reportes |
| **Miko, Curio/Grok, Echo Dot Kids** | IA con escucha permanente; criticados 2025 (Fairplay, PIRG, NBC, CNN) | Push-to-talk + IA acotada + curado padres |
| **Moxie / Embodied** (quebró ene-2025) | 100% nube | Offline con cartuchos |
| **Khanmigo / Synthesis** | Software en tablet/teléfono | Dispositivo dedicado sin pantalla |
| **Casi todos** | — | Español primero, currículo MX, precio MX |

---

## Beachhead y GTM

1. **CDMX** — hogares premium, early adopters EdTech
2. **Expansión** — Guadalajara, Monterrey, ciudades media-alta
3. **LatAm** — ventaja contenido español

Canales probables:
- Landing + waitlist (existente)
- Regalo Navidad/Reyes (55% compras como regalo en PROFECO)
- Comunidades de padres preocupados por pantallas
- Contenido educativo / pediatría digital (futuro)

---

## Métricas clave a trackear (app + negocio)

| Métrica | Por qué importa |
|---------|-----------------|
| Waitlist signups | Demanda pre-lanzamiento |
| Conversión waitlist → pre-orden | Validación precio |
| DAU / sesiones por niño | Engagement real |
| Preguntas IA / día | Uso del diferenciador Unlimited |
| % sesiones completadas | Pedagogía "premiar terminar" |
| Churn suscripción | Retención |
| NPS padres | Confianza en app + dispositivo |

---

## Riesgos de negocio

| Riesgo | Mitigación |
|--------|------------|
| Costo IA si Unlimited abusado | Límite Starter; monitoreo costos; tope tiempo padre |
| Competidor global entra MX | Español + currículo local + precio MX |
| Percepción "otro juguete con IA" | Push-to-talk, sin cámara, sin escucha pasiva |
| Dependencia nube (como Moxie) | Contenido offline en cartucho |
| Regulación datos menores | COPPA/LFPDPPP; mínimos datos; consentimiento parental |
