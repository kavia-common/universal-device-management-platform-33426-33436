import type { Preview } from '@storybook/angular';

// Import Tailwind CSS (compiled through PostCSS via Storybook builder)
import '../../tailwind-storybook.css';

// Import Material Icons for icons used in components
import '../../../src/styles.css';

// Angular Material theming: bring in a prebuilt theme so Material components look correct in stories.
// You may swap this to a custom theme later.
import '@angular/material/prebuilt-themes/indigo-pink.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      toc: true,
    },
  },
};

export default preview;
