import type { QueryResolvers, TeamResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const teams: QueryResolvers['teams'] = () => {
  return db.team.findMany()
}

export const team: QueryResolvers['team'] = ({ id }) => {
  return db.team.findUnique({
    where: { id },
  })
}

export const Team: TeamResolvers = {
  memberships: (_obj, { root }) =>
    db.team.findUnique({ where: { id: root.id } }).memberships(),
}
