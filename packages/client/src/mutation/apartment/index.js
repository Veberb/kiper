import gql from 'graphql-tag';

export const CREATE_APARTMENT = gql`
  mutation CreateApartment($apartment: Apartment) {
    createApartment(apartment: $apartment) {
      name
      number
      block
    }
  }
`;
