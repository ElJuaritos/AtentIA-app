# AtentIA-app — App de padres matIA

> MVP visual de la app móvil para padres. Expo Go + backend mock Node.

## Estructura

| Carpeta | Descripción |
|---------|-------------|
| `mobile/` | App Expo (React Native) — 6 pantallas + login |
| `server/` | Backend mock Express con datos JSON |
| `docs/` | Documentación de producto y diseño |

## Paleta de colores

| Token | Hex |
|-------|-----|
| navy | `#111E31` |
| coral | `#FFAEB2` |
| mint | `#B2D7C8` |
| olive | `#658E74` |
| offwhite | `#FAFAFA` |

## Cómo correr (Expo Go)

> **Importante:** Este proyecto usa **Expo SDK 54**, compatible con la versión de Expo Go en App Store / Play Store. No uses SDK 56 si pruebas con Expo Go de la tienda.

### 1. Backend mock (opcional)

```bash
cd server
npm install
npm start
```

Servidor en `http://0.0.0.0:3001`

### 2. App móvil

```bash
cd mobile
npm install
npx expo start
```

Escanea el QR con **Expo Go** (misma red WiFi).

> Si usas el backend, cambia `API_BASE_URL` en `mobile/data/mockData.js` a tu IP local (ej. `http://192.168.1.10:3001`). Sin servidor, la app usa datos mock locales.

## Pantallas

1. **Login** — diseño educativo con animaciones
2. **Dashboard** — panel familiar, stats, gráfica semanal
3. **Biblioteca** — cartuchos y filtros por edad
4. **Reportes** — evolución y conceptos dominados/pendientes
5. **Control** — límites, horarios, toggles
6. **Perfil** — cuenta, suscripción, ajustes

## Estado

| Elemento | Estado |
|----------|--------|
| MVP visual | ✅ |
| Conectividad real | ❌ (mock) |
| Auth real | ❌ (simulado) |
| Pagos | ❌ (futuro) |
