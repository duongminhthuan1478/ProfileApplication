import { bootstrapApplication } from '@angular/platform-browser';
import { AppConfigModel } from '@core/models/application';
import { appConfig } from '@config/app.config';

import { AppComponent } from './app/app.component';

fetch('assets/app-config.json')
  .then<AppConfigModel>((it) => it.json())
  .then((it: AppConfigModel) =>
    bootstrapApplication(AppComponent, appConfig(it)).catch((err) =>
      console.error(err),
    ),
  );
