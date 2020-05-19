import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      email
    }
  }
`;
export default { CREATE_USER };
