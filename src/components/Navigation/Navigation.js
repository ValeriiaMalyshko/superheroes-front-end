import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import s from './Navigation.module.css'

function Navigation() {
  return (
    <>
      <div className={s.container}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active_link : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          // href="heroes-colection"
          className={({ isActive }) => (isActive ? s.active_link : s.link)}
        >
          Information about superhero
        </NavLink>
        <NavLink
          to="new-hero"
          className={({ isActive }) => (isActive ? s.active_link : s.link)}
        >
          Create superhero
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
