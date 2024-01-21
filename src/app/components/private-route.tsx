'use client'
import React, { useEffect, ReactNode } from 'react'

import { useRouter } from 'next/navigation'

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter()

  const isAuth = true // TODO: check if user is authenticated

  useEffect(() => {
    if (!isAuth) {
      push('/sign-in')
    }
  }, [isAuth, push])

  return (
    <>
      {!isAuth && null}
      {isAuth && children}
    </>
  )
}

export default PrivateRoute
