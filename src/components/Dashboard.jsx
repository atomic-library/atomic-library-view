import { Nav, Box } from 'atomic-library-core'
import Navbar from './Navbar'
import { NavLink, Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import { Collapse } from 'mui-clone'
import { useState } from 'react'
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
  const [stateMui, setStateMui] = useState(true)
  return (
    <>
      <AppBar />
      {/* lateral menu */}
      <Navbar location='left' position='fixed' myStyle={menuStyle}>
        <Nav flex flexWrap flowColumn>
          <NavLink exact to='/dashboard/home' activeClassName='active'>Home</NavLink>
          <NavLink exact to='/dashboard/core' activeClassName='active'>Core</NavLink>
          <NavLink exact to='/dashboard/components' activeClassName='active'>Components</NavLink>
          <NavLink exact to='/dashboard/hooks' activeClassName='active'>Hooks</NavLink>
          <NavLink exact to='/dashboard/style' activeClassName='active'>Style</NavLink>
          <NavLink exact to='/dashboard/my-system' activeClassName='active'>My System</NavLink>
          <NavLink exact onClick={() => setStateMui(!stateMui)} to='/dashboard/mui-clone' activeClassName='active'>Mui Clone</NavLink>
          <Collapse collapsed={stateMui}>
            <Box flex flowColumn flexWrap mL='1rem'>
            <NavLink exact to='/dashboard/mui-clone/quick-demo' activeClassName='active'>Quick Demo</NavLink>
              <NavLink exact to='/dashboard/mui-clone/inputs' activeClassName='active'>Inputs</NavLink>
              <NavLink exact to='/dashboard/mui-clone/data-display' activeClassName='active'>Data display</NavLink>
              <NavLink exact to='/dashboard/mui-clone/feedback' activeClassName='active'>Feed back</NavLink>
              <NavLink exact to='/dashboard/mui-clone/surfaces' activeClassName='active'>Surfaces</NavLink>
              <NavLink exact to='/dashboard/mui-clone/Navigation' activeClassName='active'>Navigation</NavLink>
              <NavLink exact to='/dashboard/mui-clone/layout' activeClassName='active'>Layout</NavLink>
              <NavLink exact to='/dashboard/mui-clone/utils' activeClassName='active'>Utils</NavLink>
            </Box>
          </Collapse>
        </Nav>
        <NavLink exact to='/dashboard/about' activeClassName='active'>About</NavLink>
      </Navbar>
      <Outlet />
    </>
  )
}
export default Dashboard

// css, effects, style functions, constants
