# Storybook setup for ui-components

This Storybook is configured to support:
- Angular Material components and theming (via prebuilt theme import in `preview.ts`)
- Tailwind CSS utilities for composing layouts/styles inside stories

Files:
- `.storybook/main.ts` – Storybook config for stories and addons.
- `.storybook/preview.ts` – Loads Tailwind and Material theme CSS globally for all stories.
- `tailwind-storybook.css` – Tailwind entry loaded by preview.
- Root `tailwind.config.js` and `postcss.config.cjs` – Tailwind/PostCSS setup for Storybook build.

Usage:
- Run `npm run storybook` at the workspace root to launch.
- Use Material modules inside stories by importing required Angular Material modules into the story `moduleMetadata` or standalone component `imports`.
