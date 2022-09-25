import { Main } from 'atomic-library-core'
const styleMain = `
  h:calc(100vh_-_80px) w:calc(100vw_-_250px) pt:absolute t:80px l:250px ofY:scroll
  flex jc:center
  ::-webkit-scrollbar{ w:8px }
  ::-webkit-scrollbar-thumb{ bg:#ccc br:10px }
`
const Layout = ({ children }) => <Main atmClass={styleMain}> {children}</Main>

export default Layout

// break: {lg:{
//   w: '100%', 
//   l: '0'
// }}
