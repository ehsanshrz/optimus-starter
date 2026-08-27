import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OPTIMUS_UI_IMPORTS } from '../../shared/optimus-ui.imports';
import { SectionTitleComponent } from '../../shared/widgets/section-title.component';

@Component({
  selector: 'app-settings-page',
  imports: [FormsModule, SectionTitleComponent, ...OPTIMUS_UI_IMPORTS],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  workspaceName = 'Community Starter';
}
