import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { id: 'String1444874', updatedAt: '2022-06-28T15:35:41Z' } },
    two: { data: { id: 'String8485623', updatedAt: '2022-06-28T15:35:41Z' } },
  },
})

export type StandardScenario = typeof standard
