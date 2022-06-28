export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    email: String
    image: String
    memberships: [Membership]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String
    image: String
  }

  input UpdateUserInput {
    name: String
    email: String
    image: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
  }
`
