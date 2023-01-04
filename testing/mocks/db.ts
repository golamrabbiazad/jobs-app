import { factory, primaryKey } from '@mswjs/data'

import { uid } from '@utils/uid'

const models = {
  user: {
    id: primaryKey(uid),
    email: String,
    password: String,
    organizationId: String,
    createdAt: Date.now,
  },
  organization: {
    id: primaryKey(uid),
    name: String,
    email: String,
    phone: String,
    info: String,
    admindId: String,
    createdAt: Date.now,
  },
  job: {
    id: primaryKey(uid),
    position: String,
    locaiton: String,
    department: String,
    info: String,
    organizationId: String,
    createdAt: Date.now,
  },
}

export const db = factory(models)
