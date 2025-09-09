# Customizable Frontend App (Angular 19)

This project is an Angular 19 scaffold prepared for a highly customizable product UI:
- Global SCSS tokens and themes (light/dark)
- Reusable UI components (starter Button)
- Modular structure ready for authentication, dashboard, device/profile/firmware modules
- SSR-ready configuration

## Getting started

Install dependencies and run the dev server:
```bash
npm install
npm start
```
The app will be available at http://localhost:3000/.

## Theming

Themes are applied via data-theme on the <html> element:
- src/styles/tokens.scss: base CSS variables
- src/styles/themes/light.theme.scss and dark.theme.scss
- ThemeService toggles theme at runtime.

Example usage in AppComponent shows theme toggle and variant buttons.

## Structure highlights
- src/styles.scss and styles/ folder contain tokens, base, and theme files.
- src/app/shared/ui contains reusable UI elements (e.g., Button).
- src/app/core/services holds services such as ThemeService.

## Scripts
- npm start: dev server (port 3000)
- npm run build: production build
- npm test: unit tests

## Next steps
- Add layout (header/sidebar) and feature modules (auth, dashboard, device, profile, firmware).
- Expand reusable UI library (cards, modals, toasts, tables).
- Wire REST API calls for backend once available.

For more on Angular CLI: https://angular.dev/tools/cli
