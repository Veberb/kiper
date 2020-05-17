import gql from 'graphql-tag';

const LIST_RESIDENTS = gql`
  query ListResidents($name: String, $apartmentId: ID) {
    listResidents(name: $name, apartmentId: $apartmentId) {
      _id
      name
      email
      responsible
    }
  }
`;

export default { LIST_RESIDENTS };
