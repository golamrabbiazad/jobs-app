import { ReactNode } from 'react'
import { MSWDevTools } from 'msw-devtools'

import { IS_DEVELOPMENT } from '@config/constants'
import { db, handlers } from '@testing/mocks'

require('@testing/mocks/initialize')

export function MSWWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {IS_DEVELOPMENT && <MSWDevTools db={db} handlers={handlers} />}
      {children}
    </>
  )
}
