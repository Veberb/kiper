import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: (err) => {
    if (
      err.graphQLErrors[0] &&
      err.graphQLErrors[0].extensions &&
      err.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED'
    ) {
      window.location.pathname = '/';
    }
  },
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({ headers: { 'kiper-token': token } });
  },
});

export { default as ApartmentMutation } from './Apartment/mutation';
export { default as ApartmentQuery } from './Apartment/query';
export { default as ResidentQuery } from './Resident/Query';
export { default as ResidentMutation } from './Resident/Mutation';
export { default as UserMutation } from './User/Mutation';

export default client;
