import { Component, inject } from '@angular/core';
import { ButtonComponent } from './shared/ui/button/button.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ThemeService]
})
export class AppComponent {
  title = 'Customizable Frontend App';

  private theme = inject(ThemeService);

  // PUBLIC_INTERFACE
  switchTheme(): void {
    /** Toggle between light and dark theme globally. */
    this.theme.toggle();
  }

  // PUBLIC_INTERFACE
  setLight(): void {
    /** Force light theme. */
    this.theme.setTheme('light');
  }

  // PUBLIC_INTERFACE
  setDark(): void {
    /** Force dark theme. */
    this.theme.setTheme('dark');
  }
}
