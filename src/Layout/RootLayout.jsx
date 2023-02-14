import React from 'react'
import HeaderB from '../components/User/Header/HeaderB'
import HeaderT from '../components/User/Header/HeaderT'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <HeaderT />
      <HeaderB />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout