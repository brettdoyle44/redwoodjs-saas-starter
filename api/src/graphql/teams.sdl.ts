export const schema = gql`
  type Team {
    id: String!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    memberships: [Membership]!
  }

  type Query {
    teams: [Team!]! @requireAuth
    team(id: String!): Team @requireAuth
  }

  input CreateTeamInput {
    name: String!
  }

  input UpdateTeamInput {
    name: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!, id: String!): Team! @requireAuth
  }
`
