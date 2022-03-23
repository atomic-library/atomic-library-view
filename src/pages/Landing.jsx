import { AppBar, CodeBlock } from '../components'
import { Box, Title, Main, Footer, Aside, Header, Box as Wrapper } from 'atomic-library-core'
import atomic from '../assets/atomic.svg'

const Landing = () => {
  return (
    <>
      <AppBar />
      <Box
        h='40vh' bg='#fff' m='80px 0 0 0' flex center myStyle={{
          backgroundImage: `url(${atomic})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%'
        }}
      >
        <h1 className='main-title'>Atomic Library</h1>
      </Box>
      <Box h='calc(60vh - 80px)' bg='rgb(32, 35, 41)' flex center>
        <Title h2 c='#fff' size='md'>Want amazing components, functions, elements and other useful
          files, even css? then this is the place
        </Title>
      </Box>
      <Box flex flexWrap m='2rem auto' size='xl' gap='1rem'>
        <Box w='calc(50% - .5rem)'>
          <CodeBlock
            language='jsx' code={`
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
`}
          />
        </Box>
        <Box w='calc(50% - .5rem)'>
          <Wrapper
            grid
            gap='10px'
            size='lg'
            cols='1fr 1fr 1fr'
            areas="
          'header header header'
          'main main aside'
          'footer footer footer'
      "
          >
            <Header h='80px' bg='#ccc' span='header' />
            <Main flex flexWrap span='main' gap='10px'>
              <Box h='150px' bg='#909A9B' />
              <Box h='150px' bg='#909A9B' />
              <Box h='150px' bg='#909A9B' />
            </Main>
            <Aside h='400px' bg='#CACACA' m='0' span='aside' />
            <Footer h='80px' bg='#ccc' span='footer' />
          </Wrapper>
        </Box>
      </Box>
    </>
  )
}
export default Landing
