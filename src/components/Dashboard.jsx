import { Nav, Box } from 'atomic-library-core'
import Navbar from './Navbar'
import { NavLink, Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import { Collapse } from 'mui-clone'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
// -----------------------STYLE--------------------------//

const menuStyle = `
  bR:1px_solid_#E8E8E8 m:0 w:250px bg:#fff fixed t:80px 
  br:0px_0px_60px_0px
  h:calc(100vh_-_80px) ofY:auto ofX:hidden p:20px_10px_40px_40px z:1
  ::-webkit-scrollbar{ w:5px m:100p }
  ::-webkit-scrollbar-thumb{ bg:#E8E8E8 br: 10px }
  ::-webkit-scrollbar-track{ m:0 0 50px }
  tt:left_.5s
`
 
// ---------------------END-STYLE--------------------------//

const Dashboard = ({ children }) => {
  const [stateMui, setStateMui] = useState(true)
  const [open, setOpen] = useState(true)
  return (
    <>
      <AppBar onClickMenu={() => setOpen(!open)} />
      {/* lateral menu */}
      <Navbar location='left' position='fixed' atmClass={`${menuStyle} `} >
        <Nav atmClass="flex flex-wrap flexDirection:column">
          <NavLink exact to='/dashboard/home' activeClassName='active'>Home</NavLink>
          <NavLink exact to='/dashboard/core' activeClassName='active'>Core</NavLink>
          <NavLink exact to='/dashboard/components' activeClassName='active'>Components</NavLink>
          <NavLink exact to='/dashboard/hooks' activeClassName='active'>Hooks</NavLink>
          <NavLink exact to='/dashboard/style' activeClassName='active'>Style</NavLink>
          <NavLink exact to='/dashboard/my-system' activeClassName='active'>My System</NavLink>
          <NavLink exact onClick={() => setStateMui(!stateMui)} to='/dashboard/mui-clone' activeClassName='active'>Mui Clone <IoIosArrowDown style={{ marginLeft: '10px' }} /></NavLink>
          <Collapse collapsed={stateMui}>
            <Box atmClass="flex flex-col flex-wrap mL:1rem">
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
