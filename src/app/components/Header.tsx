'use client'
import React from 'react'
import { Separator } from './ui/separator'
import { Home, PlusSquare } from 'lucide-react'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme-toggle'
import ThemeSwitch from './theme-toggle2'

const Header = () => {
  return (
    <header className="flex h-16 items-center border-b px-6">
      <div className="flex items-center space-x-4 lg:space-x-6">
        <h1 className="flex items-center gap-1.5 text-base font-medium text-gray-800 transition-colors hover:text-gray-900 dark:text-white">
          Nameless.Blog
        </h1>

        <Separator orientation="vertical" className="h-6" />

        <NavLink to="/">
          <Home className="h-4 w-4 " />
          Home
        </NavLink>

        <NavLink to="/post/new">
          <PlusSquare className="h-4 w-4 " />
          Novo Post
        </NavLink>
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
