import { Directive } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

@Directive()
export abstract class BaseGraphqlAbstraction {
  protected graphql: ApolloBase;

  protected constructor(protected apollo: Apollo) {
    this.graphql = this.apollo;
  }

  public query<T>(query: string, variables: Record<string, unknown>): Observable<T> {
    return this.graphql
      .query({
        query: gql`
          ${query}
        `,
        variables
      })
      .pipe(map(res => <T>res.data));
  }

  public mutation<T>(query: string, variables: Record<string, unknown>): Observable<T> {
    return this.graphql
      .mutate<T>({
        mutation: gql`
          ${query}
        `,
        variables
      })
      .pipe(map(res => <T>res.data));
  }
}
