import { InjectionToken } from '@angular/core';
import { AppConfigModel } from '@core/models/application';

export const APP_CONFIG = new InjectionToken<AppConfigModel>('Profile Application Config');
