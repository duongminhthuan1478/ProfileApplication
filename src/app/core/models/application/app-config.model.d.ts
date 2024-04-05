import { ApolloConfigModel } from './app-apollo-graphl.model';

export interface AppConfigModel {
  apolloContentfulConfig: ApolloConfigModel;
}

export interface ApolloConfigModel {
  uri: string;
  accessToken: string;
  space: string;
}
