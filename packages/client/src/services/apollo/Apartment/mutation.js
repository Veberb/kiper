import gql from 'graphql-tag';

const CREATE_APARTMENT = gql`
  mutation CreateApartment($apartment: ApartmentInput!) {
    createApartment(apartment: $apartment) {
      name
      number
      block
    }
  }
`;

const DELETE_APARTMENT = gql`
  mutation DeleteApartment($_id: ID!) {
    deleteApartment(_id: $_id) {
      name
    }
  }
`;

export default { CREATE_APARTMENT, DELETE_APARTMENT };
