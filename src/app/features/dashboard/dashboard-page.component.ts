import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OPTIMUS_UI_IMPORTS } from '../../shared/optimus-ui.imports';
import { SectionTitleComponent } from '../../shared/widgets/section-title.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [FormsModule, SectionTitleComponent, ...OPTIMUS_UI_IMPORTS],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  projectName = 'Optimus starter app';
}
