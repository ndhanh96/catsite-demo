import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-cat-api.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;