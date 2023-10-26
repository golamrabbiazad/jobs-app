import { DefaultBodyType, HttpRequestParsedResult, StrictRequest } from 'msw'

import { AuthUser } from '@features/auth'
import { testData } from '@testing/testData'
import { db } from './db'
import { IS_TEST } from '@config/constants'

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

export const AUTH_COOKIE = 'auth-token'

type USER = {
  id: string
  createdAt: number
  email: string
  password?: string
  organizationId: string
}

const sanitizeUser = (user: USER): AuthUser => {
  const sanitizeUser = {
    ...user,
  }

  return sanitizeUser
}

export const getUser = () => sanitizeUser(testData.users[0])

export const authenticate = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (!user) {
    throw new Error('User not found!')
  }

  if (user.password === password) {
    const sanitizedUser = sanitizeUser(user)
    const encodedToken = AUTH_TOKEN

    return {
      user: sanitizedUser,
      jwt: encodedToken,
    }
  }

  throw new Error('Invalid username and password')
}

export const requireAuth = ({
  request,
  shouldThrow = true,
}: {
  request: any
  shouldThrow?: boolean
}) => {
  if (IS_TEST) {
    return getUser()
  } else {
    const encodedToken = request.cookies[AUTH_COOKIE]

    if (encodedToken !== AUTH_TOKEN) {
      if (shouldThrow) {
        throw new Error('No authorization token provided!')
      }

      return null
    }

    return getUser()
  }
}
