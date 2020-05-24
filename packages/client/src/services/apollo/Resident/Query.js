import gql from 'graphql-tag';

const LIST_RESIDENTS = gql`
  query ListResidents($name: String, $apartmentId: ID, $responsible: String, $offset: Int, $limit: Int) {
    listResidents(name: $name, apartmentId: $apartmentId, responsible: $responsible, offset: $offset, limit: $limit) {
      residents {
        _id
        name
        email
        responsible
        apartmentName
      }
      totalResident
    }
  }
`;

const GET_RESIDENT = gql`
  query GetResident($id: ID!) {
    getResident(id: $id) {
      name
      birth
      phone
      cpf
      email
      apartment
      responsible
    }
  }
`;

export default { LIST_RESIDENTS, GET_RESIDENT };
