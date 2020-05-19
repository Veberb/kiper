import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      email
    }
  }
`;

const SIGNIN = gql`
  mutation SignIn($user: UserInput!) {
    signIn(user: $user)
  }
`;
export default { CREATE_USER, SIGNIN };
