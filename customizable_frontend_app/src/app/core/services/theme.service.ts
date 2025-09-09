/**
 * PUBLIC_INTERFACE
 * ThemeService provides runtime theme switching via data-theme attribute on <html>.
 */
export class ThemeService {
  private current: 'light' | 'dark' = 'light';

  /**
   * Safely returns a document-like object when running in the browser.
   * Uses globalThis to avoid ESLint no-undef and is safe during SSR.
   */
  private getDoc(): any | null {
    const g: any = typeof globalThis !== 'undefined' ? (globalThis as any) : undefined;
    return g && g.document && g.document.documentElement ? g.document : null;
    }

  private setAttribute(theme: 'light' | 'dark'): void {
    const doc = this.getDoc();
    if (doc && doc.documentElement) {
      doc.documentElement.setAttribute('data-theme', theme);
    }
  }

  // PUBLIC_INTERFACE
  setTheme(theme: 'light' | 'dark'): void {
    /** Sets the global theme on the documentElement. */
    this.current = theme;
    this.setAttribute(theme);
  }

  // PUBLIC_INTERFACE
  getTheme(): 'light' | 'dark' {
    /** Returns the current theme. */
    return this.current;
  }

  // PUBLIC_INTERFACE
  toggle(): 'light' | 'dark' {
    /** Toggles between light and dark theme and returns the active theme. */
    const next = this.current === 'light' ? 'dark' : 'light';
    this.setTheme(next);
    return next;
  }
}
