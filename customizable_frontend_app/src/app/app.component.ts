import { Component } from '@angular/core';
import { MetricCardComponent } from '../../projects/ui-components/src/lib/components/metric-card/metric-card.component';
import { LabeledInfoRowComponent } from '../../projects/ui-components/src/lib/components/labeled-info-row/labeled-info-row.component';

@Component({
  selector: 'app-root',
  imports: [MetricCardComponent, LabeledInfoRowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, angular';
}
