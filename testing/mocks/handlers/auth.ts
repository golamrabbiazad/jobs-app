import { http, delay, HttpResponse } from 'msw'

import { API_URL } from '@config/constants'
import { authenticate, requireAuth } from '../utils'

interface Credential {
  email: string
  password: string
}

const signinHandler = http.post(
  `${API_URL}/auth/login`,
  async ({ request }) => {
    const credentials = (await request.json()) as Credential
    const { user, jwt } = authenticate(credentials)

    await delay(300)

    return new HttpResponse(JSON.stringify({ user }), {
      headers: {
        'auth-token': jwt,
        path: '/',
      },
    })
  },
)

const signoutHandler = http.post(`${API_URL}/auth/logout`, async () => {
  await delay(300)
  return new HttpResponse(JSON.stringify({ success: true }), {
    headers: {
      'auth-token': '',
      path: '/',
    },
  })
})

const meHandler = http.get(`${API_URL}/auth/me`, async ({ request }) => {
  const user = requireAuth({ request, shouldThrow: false })

  await delay(300)

  return HttpResponse.json(user)
})

export const authHandlers = [signinHandler, signoutHandler, meHandler]
