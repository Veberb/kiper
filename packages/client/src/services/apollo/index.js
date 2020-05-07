import ApolloClient from 'apollo-boost';
import { getToken } from '../auth';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  request: (operation) => {
    const token = getToken();
    operation.setContext({ headers: { 'kiper-token': token } });
  },
});

export { default as ApartmentMutation } from './Apartment/mutation';

export default client;
