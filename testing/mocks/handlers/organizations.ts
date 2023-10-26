import { HttpResponse, delay, http } from 'msw'

import { API_URL } from '@config/constants'
import { db } from '../db'

const singleOrganization = http.get(
  `${API_URL}/organizations/:organizationId`,
  async ({ params }) => {
    const { organizationId } = params

    if (!organizationId) {
      return HttpResponse.json(null, { status: 404 })
    }

    const organization = db.organization.findFirst({
      where: {
        id: {
          equals: organizationId as string,
        },
      },
    })

    if (!organization) {
      return HttpResponse.json(null, { status: 404 })
    }

    await delay(300)
    return HttpResponse.json(organization, { status: 200 })
  },
)

export const organizationsHandlers = [singleOrganization]
