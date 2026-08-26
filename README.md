# optimus-starter

Public Angular starter template powered by `@openng/optimus-ui`.

## 1) Setup & dependencies

```bash
# create a new standalone Angular app
npx @angular/cli@latest new optimus-starter --standalone --routing --style=scss
cd optimus-starter

# install Optimus UI + common peers
npm install @openng/optimus-ui @openng/optimus-ui-themes @openng/icons @angular/animations

# optional: let the official schematic wire providers for you
npx ng add @openng/optimus-ui
```

## 2) Folder structure

```text
src/app/
  core/
    layout/
      app-layout.component.ts
      app-layout.component.html
      app-layout.component.scss
  shared/
    optimus-ui.imports.ts
    widgets/
      section-title.component.ts
  features/
    dashboard/
      dashboard-page.component.ts
      dashboard-page.component.html
      dashboard-page.component.scss
    settings/
      settings-page.component.ts
      settings-page.component.html
      settings-page.component.scss
  app.ts
  app.config.ts
  app.routes.ts
```

## 3) Routing (`src/app/app.routes.ts`)

```ts
import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard-page.component').then(
            (m) => m.DashboardPageComponent
          )
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings-page.component').then(
            (m) => m.SettingsPageComponent
          )
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
```

## 4) Optimus provider setup (`src/app/app.config.ts`)

```ts
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideOptimus({ theme: { preset: Aura } })
  ]
};
```

## 5) Global styles (`src/styles.scss`)

```scss
@import '@openng/icons/openng-icons.css';
```

## 6) Basic layout + feature pages

The repository already includes a working starter layout and two standalone feature pages:

- `Dashboard`: Optimus Card + Buttons + InputText showcase
- `Settings`: simple preferences form page

Run locally:

```bash
npm install
npm start
```
