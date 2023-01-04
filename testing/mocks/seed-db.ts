import { db } from './db'
import { testData } from '@testing/testData'

export const seedDb = () => {
  const userCount = db.job.count()

  if (userCount > 0) return

  testData.users.forEach((user) => db.user.create(user))

  testData.organizations.forEach((organization) =>
    db.organization.create(organization)
  )

  testData.jobs.forEach((job) => db.job.create(job))
}
