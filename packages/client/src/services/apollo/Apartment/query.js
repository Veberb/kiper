import gql from 'graphql-tag';

const LIST_APARTMENTS = gql`
  query ListApartments($name: String) {
    listApartments(name: $name) {
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

export default { LIST_APARTMENTS, GET_APARTMENT };
