import gql from 'graphql-tag';

export const CREATE_APARTMENT = gql`
  mutation CreateApartment($name: String, $number: Int, $block: String) {
    createApartment(name: $name) {
      id
      name
      number
      block
    }
  }
`;
