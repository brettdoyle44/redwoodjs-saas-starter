export const schema = gql`
  type Membership {
    id: String!
    team: Team!
    teamId: String!
    user: User
    userId: String
    createdAt: DateTime!
    updatedAt: DateTime!
    invitedName: String
    invitedEmail: String
    role: MembershipRole!
  }

  enum MembershipRole {
    OWNER
    MEMBER
    ADMIN
  }

  type Query {
    memberships: [Membership!]! @requireAuth
  }

  input CreateMembershipInput {
    teamId: String!
    userId: String
    invitedName: String
    invitedEmail: String
    role: MembershipRole!
  }

  input UpdateMembershipInput {
    teamId: String
    userId: String
    invitedName: String
    invitedEmail: String
    role: MembershipRole
  }
`
