import gql from 'graphql-tag';

const CREATE_RESIDENT = gql`
  mutation CreateResident($resident: ResidentInput!) {
    createResident(resident: $resident) {
      name
    }
  }
`;

const UPDATE_RESIDENT = gql`
  mutation UpdateResident($resident: ResidentInput!, $id: ID!) {
    updateResident(resident: $resident, id: $id) {
      name
    }
  }
`;

export default { CREATE_RESIDENT, UPDATE_RESIDENT };
