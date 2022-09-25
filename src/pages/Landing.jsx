import { AppBar, CodeBlock } from '../components'
import { Box, H2, Main, Footer, Aside, Header, Box as Wrapper, AtomicContext } from 'atomic-library-core'
import { useState } from 'react'

const Container = ({atmClass, ...rest}) =>  
  <Box size="xl" atmClass={`grid grid-cols-2 gap:1rem h:calc(100vh_-_80px) p-10 m:auto ${atmClass}`} {...rest}/>

const Title = ({...rest}) => <H2 atmClass="fs:3.5rem fw:900 gc:span_2 m:20px" {...rest} />

const exampleCore = `
import {
  Box,
  Header,
  Main,
  Aside,
  Footer,
  AtomicContext
} from 'atomic-library-core'

function App() {
  const [state, setState] = useState(false)
  return (
    <>
      <Box 
        atmClass="grid grid-cols-3 gap:10px m-4"
        areas={${"`"}
          'header header header'
          'main main aside'
          'footer footer footer'
          ${"`"}}
        onClick={() => setState(!state)}
      >
        <AtomicContext.Provider value={${"`"} rounded $${"{"}state ? "bg:#808B96" : "bg:#D5D8DC"} ${"`"}}>
          <Header atmClass="h:80px  area:header"/>
          <Main atmClass="flex flex-wrap gap:10px area:main bg:none .first{ rounded-5 } ">
            <Box atmClass="h:150px w-full" className='first'/>
            <Box atmClass="h:150px w-full"/>
            <Box atmClass="h:150px w-full"/>
          </Main>
          <Aside atmClass="h:400px area:aside"/>
          <Footer atmClass="h:80px area:footer"/>
        </AtomicContext.Provider>
      </Box>
    </> 
  )
}

export default App

`


const Landing = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <AppBar />
      <Box
        atmClass={`
          h:40vh mT:80px bg:#fff flex ai:center jc:center
          bgRp:no-repeat bgPt:center bgSz:100%
        `}
      >
        <h1 className='main-title'>Atomic Library</h1>
      </Box>
      <Box atmClass="h:calc(60vh_-_80px) bg:rgb(32,35,41) flex jc:center ai:center">
        <H2 atmClass="c:#fff" size='md'>
          Want amazing components, functions, elements and other useful
          files, even css? then this is the place
        </H2>
      </Box>
      <Container>
        {/* Header */}
        <Title>Core</Title>
        {/* Code */}
        <CodeBlock 
          code={exampleCore}
          language="jsx"
        />
        {/* Example */}
        <>
          <Box 
            atmClass="grid grid-cols-3 gap:10px m-4"
            areas={`
              'header header header'
              'main main aside'
              'footer footer footer'
              `}
            onClick={() => setState(!state)}
          >
            <AtomicContext.Provider value={` rounded ${state ? "bg:#808B96" : "bg:#D5D8DC"} `}>
              <Header atmClass="h:80px  area:header"/>
              <Main atmClass="flex flex-wrap gap:10px area:main bg:none .first{ rounded-5 } ">
                <Box atmClass="h:150px w-full" className='first'/>
                <Box atmClass="h:150px w-full"/>
                <Box atmClass="h:150px w-full"/>
              </Main>
              <Aside atmClass="h:400px area:aside"/>
              <Footer atmClass="h:80px area:footer"/>
            </AtomicContext.Provider>
          </Box>
        </> 
        
      </Container>

    </>
  )
}
export default Landing
