import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { provideHttpClient } from '@angular/common/http';
import { APP_CONFIG } from '@core/constants';
import { apolloOptionFactory } from '@core/factories';
import { AppConfigModel } from '@core/models/application';

import { routes } from '../app.routes';

function providerApolloOptions(): Provider {
  return {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionFactory,
    deps: [HttpLink, APP_CONFIG]
  };
}

export function appConfig(myAppConfigData: AppConfigModel): ApplicationConfig {
  return {
    providers: [
      { provide: APP_CONFIG, useValue: myAppConfigData },
      provideRouter(routes),
      provideHttpClient(),
      providerApolloOptions(),
      Apollo
    ]
  };
}
