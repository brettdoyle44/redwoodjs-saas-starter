import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeamCreateArgs>({
  team: {
    one: { data: { name: 'String', updatedAt: '2022-06-28T15:37:43Z' } },
    two: { data: { name: 'String', updatedAt: '2022-06-28T15:37:43Z' } },
  },
})

export type StandardScenario = typeof standard
