'use client'
import React, { useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const BadgeForm = () => {
  const [position, setPosition] = useState('top')

  const badgesList = [
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
    {
      id: 3,
      badge: <Badge variant="yellow">Inspiration ✨</Badge>,
    },
    {
      id: 3,
      badge: <Badge variant="yellow">Inspiration ✨</Badge>,
    },
    {
      id: 3,
      badge: <Badge variant="yellow">Inspiration ✨</Badge>,
    },
    {
      id: 3,
      badge: <Badge variant="yellow">Inspiration ✨</Badge>,
    },
    {
      id: 3,
      badge: <Badge variant="yellow">Inspiration ✨</Badge>,
    },
  ]

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Selecionar Tags</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Tags</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default BadgeForm
