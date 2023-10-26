import { HttpResponse, delay, http } from 'msw'

import { API_URL } from '@config/constants'
import { db } from '../db'
import { requireAuth } from '../utils'

const allJobs = http.get(`${API_URL}/jobs`, async ({ request }) => {
  const organizationId = new URL(request.url).searchParams.get('organizationId')
  if (!organizationId) {
    return HttpResponse.json(null, { status: 404 })
  }
  const jobs = db.job.findMany({
    where: {
      organizationId: {
        equals: organizationId,
      },
    },
  })

  await delay(300)

  return HttpResponse.json(jobs, { status: 200 })
})

interface Job {
  position: string
  location: string
  department: string
  info: string
}

const postJob = http.post(`${API_URL}/jobs`, async ({ request }) => {
  const user = requireAuth({ request })
  const jobData = await request.json()

  const job = db.job.create({
    ...(jobData as Job),
    organizationId: user?.organizationId,
  })

  await delay(300)

  return HttpResponse.json(job, { status: 201 })
})

const singleJob = http.get(`${API_URL}/jobs/:jobId`, async ({ params }) => {
  const { jobId } = params

  const job = db.job.findFirst({
    where: {
      id: {
        equals: jobId as string,
      },
    },
  })

  if (!job) {
    return HttpResponse.json(null, { status: 404 })
  }

  await delay(300)

  return HttpResponse.json(job, { status: 200 })
})

export const jobsHandlers = [allJobs, singleJob, postJob]
