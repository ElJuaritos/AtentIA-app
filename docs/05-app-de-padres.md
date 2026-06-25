# 05 — App de padres (alcance funcional)

Documento de **qué debe hacer** AtentIA-app. Sin implementación ni código.

---

## Propósito

Panel de control para padres del ecosistema matIA. No es la interfaz del niño. Es donde el adulto:

- Entiende qué aprendió su hijo
- Configura límites y contenido
- Gestiona suscripción y dispositivo

---

## Usuario

- **Padre o madre** (comprador, 59% decide según PROFECO)
- Un dispositivo = un niño (MVP)
- Uso principal en **celular** (revisar reportes al final del día)

---

## Autenticación y cuenta

| Función | Descripción |
|---------|-------------|
| Registro / login | Email + contraseña o magic link (Supabase Auth) |
| Vincular dispositivo | Emparejar matIA con cuenta (código QR o ID en pantalla e-ink) |
| Perfil del niño | Nombre, edad (adapta lenguaje IA), foto opcional |
| Suscripción | Ver plan actual (Starter / Unlimited), fecha renovación, cambiar plan |

---

## Dashboard principal

Vista al abrir la app después del login.

| Elemento | Descripción |
|----------|-------------|
| Estado dispositivo | En línea / offline / última sync |
| Resumen hoy | Minutos de uso, cuentos escuchados, preguntas a Mati |
| Racha | Días consecutivos con actividad |
| Cartucho activo | Tema actual en el dispositivo |
| Preguntas IA hoy | Contador X/30 (Starter) o "Ilimitadas" (Unlimited) |
| CTA rápido | Ver reporte completo, ajustar límites |

---

## Reportes (3 niveles — padre elige)

### Básico
- Tiempo de uso hoy / semana
- Temas / cuentos trabajados
- Racha de días consecutivos
- Preguntas realizadas a Mati (conteo)

### Detallado
- Todo lo básico +
- % preguntas correctas por tema
- Conceptos dominados vs pendientes
- Curva de progreso semanal
- Próximas revisiones (repetición espaciada)

### Completo
- Todo lo detallado +
- Transcripción de conversaciones de la sesión (texto, no audio)
- Análisis pedagógico: *"Mati notó que [Nombre] tuvo dificultad con [concepto]"*

> Retención transcripciones: 90 días (política privacidad). Audio de voz **nunca** se almacena.

---

## Gestión de contenido

| Función | Descripción |
|---------|-------------|
| Biblioteca de cuentos | Lista completa (ambos planes tienen acceso total) |
| Cartuchos | Activar / desactivar cartuchos en el dispositivo |
| Descarga offline | Indicador de qué contenido está en el dispositivo |
| Nuevo cartucho | Notificación cuando hay cartucho disponible |

Los padres **no crean contenido** — solo curan qué está activo. El contenido lo produce AtentIA.

---

## Límites y controles

| Control | ¿Quién lo define? | Notas |
|---------|-------------------|-------|
| Preguntas IA / día (30) | **Plan Starter** (fijo) | No configurable por padre |
| Preguntas ilimitadas | **Plan Unlimited** | — |
| Tiempo máximo diario | Padre | Ej. 30 min/día, independiente del plan |
| Horarios permitidos | Padre | Ej. solo después de 4 pm |
| Apagar Mati remotamente | Futuro / nice-to-have | No MVP obligatorio |

Cuando Starter alcanza 30 preguntas, Mati en el dispositivo dice:
> *"¡Hoy ya hicimos muchas preguntas! Mañana seguimos aprendiendo."*

---

## Notificaciones push

| Evento | Mensaje ejemplo |
|--------|-----------------|
| Sesión completada | "[Nombre] terminó su cuento de hoy" |
| Racha en riesgo | "Lleva 11 días seguidos — ¿otro cuento hoy?" |
| Límite Starter | "[Nombre] usó sus 30 preguntas de hoy" |
| Nuevo contenido | "Nuevo cartucho disponible: Dinosaurios" |

---

## Suscripción y facturación

| Pantalla | Contenido |
|----------|-----------|
| Plan actual | Starter o Unlimited, precio, renovación |
| Comparar planes | Tabla clara: mismo contenido, diferente límite preguntas |
| Cambiar plan | Upgrade / downgrade |
| Historial pagos | Facturas (integración Stripe/Conekta futura) |

Copy sugerido en comparación:
> *"Mismo contenido en ambos planes. Elige según cuántas preguntas quiera hacer tu hijo al día."*

---

## Pantallas mínimas MVP

1. Login / registro
2. Onboarding (vincular dispositivo + perfil niño)
3. Dashboard
4. Reporte (con selector básico / detallado / completo)
5. Biblioteca + cartuchos activos
6. Límites y horarios
7. Cuenta y suscripción
8. Ajustes (notificaciones, privacidad, cerrar sesión)

---

## Fuera de alcance MVP

- Multi-perfil (varios niños en un dispositivo)
- Chat padre–Mati
- Creación de contenido por padres
- Red social / comparación entre familias
- Control remoto en tiempo real del dispositivo

---

## Criterios de éxito UX

1. Padre entiende el plan en **< 10 segundos**
2. Reporte básico visible en **1 tap** desde dashboard
3. Activar/desactivar cartucho en **≤ 3 taps**
4. App usable con una mano en móvil
5. Coherencia visual con landing (ver `03-identidad-visual.md`)
