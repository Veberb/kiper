import gql from 'graphql-tag';

const LIST_APARTMENTS = gql`
  query ListApartments($name: String, $offset: Int, $limit: Int) {
    listApartments(name: $name, offset: $offset, limit: $limit) {
      apartments {
        _id
        name
        number
        block
      }
      totalApartment
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
