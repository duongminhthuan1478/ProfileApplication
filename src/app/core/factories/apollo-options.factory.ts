import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { AppConfigModel } from '@core/models/application';

export function apolloOptionFactory(httpLink: HttpLink, appConfig: AppConfigModel): ApolloClientOptions<unknown> {
  return {
    link: ApolloLink.from([
      httpLink.create({
        uri: appConfig.apolloContentfulConfig.uri,
        headers: new HttpHeaders().set('Authorization', `Bearer ${appConfig.apolloContentfulConfig.accessToken}`)
      })
    ]),
    cache: new InMemoryCache()
  };
}
