import gql from 'graphql-tag';

const GET_APARTMENTS = gql`
  query GetApartments($name: String) {
    getApartments(name: $name) {
      _id
      name
      number
      block
    }
  }
`;

const GET_APARTMENT = gql`
  query GetApartment($id: ID!) {
    getApartment(id: $id) {
      name
      number
      block
    }
  }
`;

export default { GET_APARTMENTS, GET_APARTMENT };
