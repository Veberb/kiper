import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { getToken } from '../auth';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    addTypename: false,
  }),
  request: (operation) => {
    const token = getToken();
    operation.setContext({ headers: { 'kiper-token': token } });
  },
});

export { default as ApartmentMutation } from './Apartment/mutation';
export { default as ApartmentQuery } from './Apartment/query';
export { default as ResidentQuery } from './Resident/Query';

export default client;
