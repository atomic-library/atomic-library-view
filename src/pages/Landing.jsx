import { AppBar, CodeBlock } from '../components'
import cardEffect001 from '../assets/cardEffect001'
import buttonEffect001 from '../assets/buttonEffect001'
import buttonEffect002 from '../assets/buttonEffect002'
import { coreContainersStr, styleFunctionsLandingStr } from '../utils/codeExamples'
import { Box, H2, Main, Footer, Aside, Header, Box as Wrapper } from 'atomic-library-core'
import atomic from '../assets/atomic.svg'
import styled from 'styled-components'

const cardEffect1 = cardEffect001()
const cardEffect2 = cardEffect001({ shadow: '3px 5px 8px #B9B9B9', time: '1s', translate: '-10px, -20px' })
const buttonEffect1 = buttonEffect001()
const buttonEffect2 = buttonEffect002({ when: 'active', bg: '#286cff' })
const Box2 = styled(Box)`
  border-radius: 5px;
  padding: 0 1rem;
  border: 1px solid #ccc;
  ${({ effect1 = false }) => effect1 && buttonEffect001(effect1)}
  ${({ effect2 = false }) => effect2 && buttonEffect002(effect2)}
`
const Content = ({ text, code = '', reverse, ...rest }) => {
  return (
    <Box flex flexWrap flexRowReverse={reverse} m='5rem auto' {...rest}>
      <Box w='calc(50% - 1rem)'>
        <CodeBlock language='jsx' code={code} />
      </Box>
      <Box w='calc(50% - 1rem)' p='1rem'>
        {text}
      </Box>
    </Box>
  )
}
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
        <H2 c='#fff' size='md'>Want amazing components, functions, elements and other useful
          files, even css? then this is the place
        </H2>
      </Box>
      <Box size='xl' mT='4rem' p='1rem' gap='2rem'>
        <h2 className='title-landing'>Core</h2>
        <p className='p-landing'>
          atomic-library-core provides you with a large number of highly customizable components and other useful features.
        </p>
        <Content
          mT='2rem'
          code={coreContainersStr}
          text={
            <>
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
            </>
          }
        />
        <Content
          bg='#f2f2f2'
          br='10px'
          p=' 2rem'
          reverse
          code={styleFunctionsLandingStr}
          text={
            <>
              <h2 className='title-landing'>Style Functions</h2> <br />
              <p className='p-landing'>
                Style functions are, simply put, classes with variable values.
              </p>
              <Box grid gap='1rem' mT='1rem' c='#fff'>
                <Box insertStyle={cardEffect1} p='1rem' rounded bg='#8d49f7'>
                  click here
                </Box>
                <Box
                  insertStyle={cardEffect2}
                  myStyle={{ p: '1rem', bg: 'rgb(32, 35, 41)' }}
                  rounded
                >click here
                </Box>
              </Box>
            </>
          }
        />

        <Box flex flexWrap gap='2rem'>
          <Box w='calc(50% - 1rem)'>
            <CodeBlock
              language='jsx' code={`
import { Box } from 'atomic-library-core' 
import sampleEffect1 from './sampleEffect1' //this is a file that you can download or create
import sampleEffect2 from './sampleEffect2' //this is a file that you can download or create

const effect1 = sampleEffect1()
const effect2 = sampleEffect2({when: 'active', bg: '#286cff'})

const MyComponent = () => {
  return (
    <>
      <Box 
        b='1px solid #ccc' 
        rounded 
        insertStyle={effect1} 
      >
        <p className='effect-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
        </p>
      </Box>
      <Box 
        p='1rem' 
        b='1px solid #ccc' 
        mT='1rem' 
        rounded  
        insertStyle={effect2}
      >
        <p className='effect-content'>click here</p>
      </Box>
    <>
  )
}
`}
            />
          </Box>
          <Box w='calc(50% - 1rem)'>
            <h2 className='title-landing'>Style Effects</h2> <br />
            <p>Style effects are very similar to style functions, the difference is that a style effect is executed
              in a special state
            </p> <br />
            <Box rounded b='1px solid #ccc' insertStyle={buttonEffect1}>
              <p className='effect-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,</p>
            </Box>
            <Box p='1rem' b='1px solid #ccc' mT='1rem' rounded insertStyle={buttonEffect2}>
              <span className='effect-content'>click here</span>
            </Box>
          </Box>
        </Box>

        <br /> <br />
        <h2 className='title-landing'>Extending Styles</h2>
        <p>You can modify the style of a component which return a style-component for example:
          Box
        </p>
        <CodeBlock
          language='jsx' code={`
import {Box} from 'atomic-library-core'
import styled from 'style-components'
import sampleEffect1 from './sampleEffect1' //this is a file that you can download or create
import sampleEffect2 from './sampleEffect2' //this is a file that you can download or create

const Box2 = styled(Box)'
  border-radius: 5px;
  padding: 0 1rem;
  border: 1px solid #ccc;
  $ {({effect1 = false}) => effect1 && sampleEffect1(effect1)}
  $ {({effect2 = false}) => effect2 && sampleEffect2(effect2)}
'
const MyComponent = () => {
  return (
    <>
      <Box2 effect1>
        <p className='effect-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
        </p>
      </Box2>
      <Box2 m='1rem 0' effect2={{when: 'active'}}>
        <p className='effect-content'>click here</p>
      </Box2>
      <Box2>
          <p>Lorem ipsum dolor sit amet.</p>
      </Box2>
    <>
  )
}
        `}
        />
        <p>Result: </p> <br />
        <Box2 effect1>
          <p className='effect-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          </p>
        </Box2>
        <Box2 m='1rem 0' effect2={{ when: 'active' }}>
          <p className='effect-content'>click here</p>
        </Box2>
        <Box2>
          <p>Lorem ipsum dolor sit amet.</p>
        </Box2>
      </Box>
      <H2 m='4rem' className='title-landing'>And much more</H2>

    </>
  )
}
export default Landing
