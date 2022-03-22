import { Navbar, Nav } from 'atomic-library-core'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import AppBar from './AppBar'
// -----------------------STYLE--------------------------//

const menuStyle = {
  bR: '1px solid #E8E8E8',
  m: '0',
  w: '250px',
  bg: '#fff',
  pt: 'fixed',
  t: '80px',
  br: '0px 0px 60px 0px',
  h: 'calc(100vh - 80px)',
  overflowY: 'auto',
  overflowX: 'hidden',
  p: '20px 10px 40px 40px',
  z: '1',
  '::-webkit-scrollbar': {
    w: '5px',
    m: '100px'
  },
  '::-webkit-scrollbar-thumb': {
    bg: '#E8E8E8', br: '10px'
  },
  '::-webkit-scrollbar-track': {
    m: '0 0 50px 0'
  }
}
// ---------------------END-STYLE--------------------------//

const Dashboard = ({ children }) => {
  const [coreState, setCoreState] = useState(false)

  return (
    <>
      <AppBar />

      {/* lateral menu */}
      <Navbar location='left' position='fixed' myStyle={menuStyle}>
        <Nav flex flexWrap flexColumn>
          <NavLink exact to='/dashboard' activeClassName='active'>
            Home
          </NavLink>

          <NavLink
            exact
            to='/dashboard/core'
            onClick={(e) => {
              e.preventDefault()
              setCoreState(!coreState)
            }}
            activeClassName='active'
          >
            Core
          </NavLink>
          <Nav
            flex
            flexColumn
            wrap
            m='0 0 0 20px'
            className={`${coreState ? 'openMenu' : 'closeMenu'}`}
          >
            <NavLink exact to='/dashboard/core/installation' activeClassName='active'>Installation</NavLink>
            <NavLink exact to='/dashboard/core/usage' activeClassName='active'>Usage</NavLink>
            <NavLink exact to='/dashboard/core/components' activeClassName='active'>Components</NavLink>
            <NavLink exact to='/dashboard/core/functions' activeClassName='active'>Functions</NavLink>
            <NavLink exact to='/dashboard/core/constants' activeClassName='active'>Constants</NavLink>
            <NavLink exact to='/dashboard/core/provider' activeClassName='active'>Provider</NavLink>
          </Nav>
          <NavLink exact to='/dashboard/components' activeClassName='active'>
            Components
          </NavLink>
          {/* <NavLink exact to='/dashboard/constants' activeClassName='active'>
            Constants
          </NavLink>
          <NavLink exact to='/dashboard/functions' activeClassName='active'>
            Functions
          </NavLink> */}
          <NavLink exact to='/dashboard/hooks' activeClassName='active'>
            Hooks
          </NavLink>
          <NavLink exact to='/dashboard/style' activeClassName='active'>
            Style
          </NavLink>
          <NavLink exact to='/dashboard/my-system' activeClassName='active'>
            My System
          </NavLink>
        </Nav>
        <NavLink exact to='/dashboard/about' activeClassName='active'>
          About
        </NavLink>
      </Navbar>
      <Outlet />
    </>
  )
}
export default Dashboard

// css, effects, style functions, constants
