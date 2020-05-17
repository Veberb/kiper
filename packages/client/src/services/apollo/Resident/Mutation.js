import gql from 'graphql-tag';

const CREATE_RESIDENT = gql`
  mutation CreateResident($resident: ResidentInput!) {
    createResident(resident: $resident) {
      name
    }
  }
`;

export default { CREATE_RESIDENT };
