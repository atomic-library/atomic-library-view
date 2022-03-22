import { Navbar, Nav } from 'atomic-library-core'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <Navbar
      position='fixed'
      nav={{ mxW: '100%', ai: 'center', jc: 'space-between' }}
      header={{ br: '0px 0px 10px 0px', b: '1px solid #E8E8E8' }}
      span='header'
      p='0px 40px'
      bg='#fff'
    >
      <Link className='link-title' to='/'>Atomic library</Link>
      <Nav>
        <Link to='/dashboard'>Documentation</Link>
        {/* <Link to='/dashboard/Forum'>Forum</Link>
        <Link to='/dashboard/join'>Join</Link> */}
      </Nav>
    </Navbar>
  )
}
export default AppBar
