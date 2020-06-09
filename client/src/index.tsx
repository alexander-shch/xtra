import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ServerError } from 'apollo-link-http-common';
import { from } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from 'apollo-link-error';
import { User } from "./view/users/users.model";
import { Merchant } from "./view/merchants/merchants.model";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "/graphql"
});

const authHandlerLink = onError(({ networkError}) => {
  if(networkError !== undefined) {
    if (networkError.name === "ServerError") {
      if ((networkError as ServerError).statusCode === 401) {
        window.location.href = '/login';
      }
    }
  }
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: from([
    authHandlerLink,
    httpLink
  ]),
});

export interface PaginatedItems<T> {
  offset: number,
  limit: number,
  total: number,
  items: T[],
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
