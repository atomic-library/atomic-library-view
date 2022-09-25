import React from 'react'
import { Header, Nav, useComponentContext } from 'atomic-library-core'

const headerStyles = {
  top: 'width: 100%; height: 80px; top: 0; aling-items: center;',
  bottom: 'width: 100%; height: 80px; bottom: 0; aling-items: center;',
  right: 'display: inline-block; width: 80px; height: 100vh; right: 0; aling-items: center;',
  left: 'display: inline-block; width: 80px; height: 100vh; left: 0; aling-items: center; '
}
const navStyles = {
  top: 'flex-direction: row; max-width: 1200px;',
  bottom: 'flex-direction: row ; max-width: 1200px;',
  right: 'flex-direction: column; max-height: 800px;',
  left: 'flex-direction: column; max-height: 800px;'
}
const Navbar = ({ children, location, header, nav, position, ...rest }) => {
  const { ...props } = useComponentContext() || false
  return (
    <Header
      atmClass={`
        <PURE>
          ${headerStyles[location || 'top'] + '.active {font-weight: 500;}'}
        </PURE>
        m:0px pt:${position}
        ${header}
      `}
      {...props}
      {...rest}
    >
      <Nav
        atmClass={`
        flex jc:space-between h:100% w:100% m:auto p:10px
        <PURE>
          ${navStyles[location || 'top']}
        </PURE>
        ${nav} 
        `}
      >
        {children}
      </Nav>
    </Header>
  )
}
export default Navbar
