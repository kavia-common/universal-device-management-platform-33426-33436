# UI Components Library Archive

This repository contains a zipped bundle of the Angular UI Components library.

Archive:
- `ui-components-library.zip`

What’s included inside the zip:
- The entire `projects/ui-components` directory:
  - Source files under `src/lib/**`
  - Public API entry under `src/public-api.ts`
  - Theming variables under `src/lib/theme/_variables.scss`
  - Storybook-related assets and configuration present under `projects/ui-components` (e.g., stories in components)
  - Build and test configuration files: `ng-package.json`, `project.json`, `karma.conf.js`, `tsconfig.*.json`
  - Library `package.json` and `README.md`
  - Tailwind for Storybook: `tailwind-storybook.css`

How the archive was created:
- The archive was generated programmatically using Python’s `zipfile` module to include all files under `projects/ui-components` while preserving the relative directory structure in the zip:
  - Relative paths inside the archive are rooted at the Angular app root, e.g. `projects/ui-components/...`

Usage:
- Unzip `ui-components-library.zip` into the root of an Angular workspace (or any location where you want the library files).
- In an Angular workspace, ensure `angular.json` contains the library project, and build using:
  - `npm run build:lib` (if defined)
  - or `ng build ui-components`

Notes:
- This bundle includes Storybook stories (`*.stories.ts`) located with the components. If you have a Storybook setup, you can integrate these directly.
- If you are copying into a different workspace, verify Tailwind configuration and style include paths if you intend to use Tailwind within Storybook or the host app.
