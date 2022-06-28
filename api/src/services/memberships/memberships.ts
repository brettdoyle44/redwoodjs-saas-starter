import type { QueryResolvers, MembershipResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const memberships: QueryResolvers['memberships'] = () => {
  return db.membership.findMany()
}

export const membership: QueryResolvers['membership'] = ({ id }) => {
  return db.membership.findUnique({
    where: { id },
  })
}

export const Membership: MembershipResolvers = {
  team: (_obj, { root }) =>
    db.membership.findUnique({ where: { id: root.id } }).team(),
  user: (_obj, { root }) =>
    db.membership.findUnique({ where: { id: root.id } }).user(),
}
