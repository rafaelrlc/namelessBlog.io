import React from 'react'
import { Badge } from '../components/ui/badge'

interface BadgeData {
  id: number
  badge: React.ReactElement
}

const badgesList: BadgeData[] = [
  {
    id: 1,
    badge: <Badge variant="blue">Anime 🍥</Badge>,
  },
  {
    id: 2,
    badge: <Badge variant="green">Art 🎨</Badge>,
  },
  {
    id: 3,
    badge: <Badge variant="yellow">Inspiration ✨</Badge>,
  },
]

const useBadgeById = (id: number): React.ReactElement | null => {
  const selectedBadge = badgesList.find((badge) => badge.id === id)
  return selectedBadge ? selectedBadge.badge : null
}

export default useBadgeById
