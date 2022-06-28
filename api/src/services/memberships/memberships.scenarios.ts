import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MembershipCreateArgs>({
  membership: {
    one: {
      data: {
        role: 'OWNER',
        team: { create: { name: 'String', updatedAt: '2022-06-28T15:36:29Z' } },
      },
    },
    two: {
      data: {
        role: 'OWNER',
        team: { create: { name: 'String', updatedAt: '2022-06-28T15:36:29Z' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
