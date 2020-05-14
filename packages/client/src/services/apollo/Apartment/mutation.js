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

const UPDATE_APARTMENT = gql`
  mutation UpdateApartment($apartment: ApartmentInput!, $id: ID!) {
    updateApartment(apartment: $apartment, id: $id) {
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

export default { CREATE_APARTMENT, DELETE_APARTMENT, UPDATE_APARTMENT };
