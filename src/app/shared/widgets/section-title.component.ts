import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `
    <h2 class="section-title">{{ title() }}</h2>
    <p class="section-subtitle">{{ subtitle() }}</p>
  `,
  styles: [
    `
      .section-title {
        margin: 0;
        font-size: 1.5rem;
      }

      .section-subtitle {
        margin: 0.5rem 0 0;
        color: #475569;
      }
    `
  ]
})
export class SectionTitleComponent {
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
