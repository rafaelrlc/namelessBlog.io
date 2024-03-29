import React from 'react'
import { usePathname } from 'next/navigation'
import { checkIsPublicRoute } from '@/app/lib/functions/check-route'

const CheckRoute = () => {
  const pathname = usePathname()

  const isPublic = checkIsPublicRoute(pathname!)

  return <div>CheckRoute</div>
}

export default CheckRoute
