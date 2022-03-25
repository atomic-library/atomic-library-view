const coreContainersStr = `
import {
  Box as Wrapper,
  Header,
  Main,
  Aside,
  Footer,
  Box
} from 'atomic-library-core'

function App() {
return (
  <Wrapper 
      grid
      gap="10px"
      size="lg" 
      cols="1fr 1fr 1fr" 
      areas="
          'header header header'
          'main main aside'
          'footer footer footer'
      "
    >
      <Header  h='80px' bg="#ccc" span="header"/>
      <Main  flex flexWrap gap="10px" span="main">
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
      </Main>
      <Aside  h='400px' bg="#CACACA" m="0" span="aside"/>
      <Footer  h='80px' bg="#ccc" span="footer"/>
  </Wrapper>
)
}

export default App
`
const styleFunctionsStr = `
import {Box} from 'atomic-library-core'
import cardEffect from './cardEffect' //this is a file that you can download or create

const cardEffect1 = cardEffect()
const cardEffect2 = cardEffect({time: '1s', translate: '-10px, -20px'})

const MyComponent = () => {
  return (
    <Box grid gap="1rem">
      <Box insertStyle={cardEffect1} p="1rem" bg="#f2f2f2" rounded >
        Click here
      </Box>
      <Box
        insertStyleBefore={cardEffect2} 
        myStyle={{p: '1rem', bg: '#f2f2f2'}}
        rounded  
      >Click here</Box>
    <Box>
  )
}
`
const styleFunctionsLandingStr = `
import {Box} from 'atomic-library-core'
import cardEffect from './cardEffect' 
//cardEffect is a file that you can download or create

const cardEffect1 = cardEffect()
const cardEffect2 = cardEffect({
    shadow: '3px 5px 8px #B9B9B9',
    time: '1s', 
    translate: '-10px, -20px'
})

const MyComponent = () => {
  return (
    <Box grid gap="1rem" c='#fff'>
      <Box insertStyle={cardEffect1} p="1rem" rounded bg='#8d49f7'>
        Click here
      </Box>
      <Box
        insertStyleBefore={cardEffect2} 
        myStyle={{p: '1rem', bg: 'rgb(32, 35, 41)'}}
        rounded  
      >Click here</Box>
    <Box>
  )
}
`
export {
  coreContainersStr,
  styleFunctionsStr,
  styleFunctionsLandingStr
}
