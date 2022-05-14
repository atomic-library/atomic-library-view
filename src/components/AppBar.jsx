import { Nav, Span } from 'atomic-library-core'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const AppBar = ({ onClickMenu }) => {
  return (
    <Navbar
      position='fixed'
      nav={{ mxW: '100%', ai: 'center', jc: 'space-between' }}
      header={{ br: '0px 0px 10px 0px', b: '1px solid #E8E8E8' }}
      span='header'
      p='0px 40px'
      bg='#fff'
      z='3'
    >
      <Link className='link-title' to='/'>Atomic library</Link>
      <Nav>
        <Link to='/dashboard/home'>Documentation</Link>
        <Span onClick={onClickMenu} myStyle={{ d: 'none', break: { lg: { d: 'inline' } } }}><AiOutlineMenu /></Span>

        {/* <Link to='/dashboard/Forum'>Forum</Link>
        <Link to='/dashboard/join'>Join</Link> */}
      </Nav>
    </Navbar>
  )
}
export default AppBar
