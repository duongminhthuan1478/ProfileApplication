import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { BaseGraphqlAbstraction } from './base-graphql.abstraction';

@Injectable({ providedIn: 'root' })
export class ContentfullGraphqlApi extends BaseGraphqlAbstraction {
  public constructor(apollo: Apollo) {
    super(apollo);
  }
}
