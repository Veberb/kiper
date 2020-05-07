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

export default { CREATE_APARTMENT };
