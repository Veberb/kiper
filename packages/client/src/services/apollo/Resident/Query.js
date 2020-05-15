import gql from 'graphql-tag';

const LIST_RESIDENTS = gql`
  query ListResidents($name: String, $apartmentId: ID) {
    listResidents(name: $name, apartmentId: $apartmentId) {
      name
    }
  }
`;

export default { LIST_RESIDENTS };
