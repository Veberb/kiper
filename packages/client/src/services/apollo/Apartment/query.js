import gql from 'graphql-tag';

const GET_APARTMENTS = gql`
  query GetApartments {
    getApartments {
      _id
      name
      number
      block
    }
  }
`;

export default { GET_APARTMENTS };
