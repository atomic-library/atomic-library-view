import { Nav, Span } from 'atomic-library-core'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const AppBar = ({ onClickMenu }) => {
  return (
    <Navbar
      position='fixed'
      nav="mxW:100% ai:center jc:space-between"
      header="br:0px_0px_10px_0px b:1px_solid_#E8E8E8 area:header p:0px_40px bg:#fff z:3"
    >
      <Link className='link-title' to='/'>Atomic library</Link>
      <Nav>
        <Link to='/dashboard/home'>Documentation</Link>
        <Span onClick={onClickMenu} atmClass="d:none lg|inline"><AiOutlineMenu /></Span>
      </Nav>
    </Navbar>
  )
}
export default AppBar
