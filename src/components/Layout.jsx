import { Main } from 'atomic-library-core'
const styleMain = {
  h: 'calc(100vh -  80px)',
  width: 'calc(100vw - 250px)',
  position: 'absolute',
  top: '80px',
  left: '250px',

  overflowY: 'scroll',
  '::-webkit-scrollbar': { w: '8px' },
  '::-webkit-scrollbar-thumb': {
    bg: '#ccc', br: '10px'
  }
}
const Layout = ({ children }) => <Main myStyle={styleMain}> {children}</Main>

export default Layout
