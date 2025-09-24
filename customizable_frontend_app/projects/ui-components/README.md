# UI Components Library

Reusable, themeable Angular components extracted from the "Device Information & Performance" card.

Included components:
- MetricCard: A card with an icon, label, value, optional tag, and optional progress bar.
- LabeledInfoRow: A compact labeled information card.

Theming:
- Uses CSS custom properties (variables). Override in global styles or host app to theme colors, radius, shadows, and typography.

Storybook:
- Stories are available for each component for interactive testing and documentation.

Usage:
1. Build library:
   npm run build

2. Import components in your Angular app modules or standalone components:
   import { MetricCardComponent, LabeledInfoRowComponent } from 'ui-components';

3. Apply theming via CSS variables (see projects/ui-components/src/lib/theme/_variables.scss and README notes).
