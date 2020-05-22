const CREATE_USER = `
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      email
    }
  }
`;

const SIGNIN = `
  mutation SignIn($user: UserInput!) {
    signIn(user: $user)
  }
`;

module.exports = { CREATE_USER, SIGNIN };
