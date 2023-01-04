import { API_URL } from '@config/constants'
import { rest } from 'msw'
import { db } from '../db'

const singleOrganization = rest.get(
  `${API_URL}/organizations/:organizationId`,
  async (req, res, ctx) => {
    const organizationId = req.params.organizationId as string

    const organization = db.organization.findFirst({
      where: {
        id: {
          equals: organizationId,
        },
      },
    })

    if (!organization) {
      return res(ctx.status(404), ctx.json({ message: 'Not found!' }))
    }

    return res(ctx.delay(300), ctx.status(200), ctx.json(organization))
  }
)

export const organizationsHandlers = [singleOrganization]
