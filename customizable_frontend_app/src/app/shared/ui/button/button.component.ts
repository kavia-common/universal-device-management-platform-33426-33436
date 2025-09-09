import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="btn"
      [ngClass]="variantClass"
      (click)="clicked.emit($event)"
      [attr.aria-label]="ariaLabel || label"
    >
      <ng-content></ng-content>
      <span *ngIf="label">{{ label }}</span>
    </button>
  `,
  styles: [`
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: var(--radius-6);
      font-family: var(--font-family);
      cursor: pointer;
      border: 1px solid transparent;
    }
    .btn-primary {
      background: var(--color-primary);
      color: #fff;
    }
    .btn-outline-pink {
      background: transparent;
      border-color: var(--color-primary);
      color: var(--color-primary);
      border-width: 1px;
      border-style: solid;
    }
  `]
})
export class ButtonComponent {
  /** Button label text */
  @Input() label = '';
  /** Visual variant: primary or outline-pink */
  @Input() variant: 'primary' | 'outline-pink' = 'primary';
  /** Optional aria-label override */
  @Input() ariaLabel?: string;
  /** Emits click event (MouseEvent in browser) */
  @Output() clicked = new EventEmitter<any>();

  get variantClass(): string {
    return this.variant === 'outline-pink' ? 'btn-outline-pink' : 'btn-primary';
  }
}
