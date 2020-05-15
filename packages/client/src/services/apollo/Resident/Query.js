import gql from 'graphql-tag';

const LIST_RESIDENTS = gql`
  query ListResidents($name: String) {
    listResidents(name: $name) {
      name
    }
  }
`;

export default { LIST_RESIDENTS };
