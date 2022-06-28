import type {
  QueryResolvers,
  TeamResolvers,
  MutationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const teams: QueryResolvers['teams'] = () => {
  return db.team.findMany()
}

export const team: QueryResolvers['team'] = ({ id }) => {
  return db.team.findUnique({
    where: { id },
  })
}

export const createTeam: MutationResolvers['createTeam'] = ({
  id,
  input,
}: {
  id: string
  input: any
}) => {
  return db.team.create({
    data: {
      name: input.name,
      memberships: {
        create: {
          role: 'OWNER',
          user: {
            connect: {
              id,
            },
          },
        },
      },
    },
  })
}

export const Team: TeamResolvers = {
  memberships: (_obj, { root }) =>
    db.team.findUnique({ where: { id: root.id } }).memberships(),
}
