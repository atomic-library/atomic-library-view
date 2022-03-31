import { Layout, CodeBlock } from '../components'
import cardEffect001 from '../assets/cardEffect001'
import buttonEffect001 from '../assets/buttonEffect001'
import buttonEffect002 from '../assets/buttonEffect002'
import { coreContainersStr, styleFunctionsStr } from '../utils/codeExamples'
import { Box as Content, Box as Wrapper, Main, Footer, Aside, Header, Box } from 'atomic-library-core'
import atomicDesign from '../assets/atomicDesign.png'
import styled from 'styled-components'

const cardEffect1 = cardEffect001()
const cardEffect2 = cardEffect001({ time: '1s', translate: '-10px, -20px' })
const buttonEffect1 = buttonEffect001()
const buttonEffect2 = buttonEffect002({ when: 'active', bg: '#286cff' })
const Box2 = styled(Box)`
  border-radius: 5px;
  padding: 0 1rem;
  border: 1px solid #ccc;
  ${({ effect1 = false }) => effect1 && buttonEffect001(effect1)}
  ${({ effect2 = false }) => effect2 && buttonEffect002(effect2)}
`

const Home = () => {
  return (
    <Layout>
      <Content size='md' p='50px 30px'>
        <h1>Atomic Library</h1> <br />
        <Box h='300px' myStyle={{ img: { objectFit: 'cover' } }}>
          <img
            src={atomicDesign}
            alt='atomic design image'
            width='100%'
            height='100%'
          />
        </Box>{' '}
        <p>
          <b>Atomic library</b>, inspired by the concept of
          <a
            className='link'
            href='https://bradfrost.com/blog/post/atomic-web-design/'
          >
            atomic design,
          </a>
          is intended to be a set of components, functions, constants and other
          useful elements in web development, from react components to css
          files. but how?
        </p><br />
        <h2>Structure</h2>
        <p>The first thing to know, are the levels</p>
        <ul>
          <li>
            <strong>Atoms </strong>
            are the basic components of matter. Applied to our library, they
            are the smallest elements, which do not depend on others, e.g. an
            icon, a button, a label, but also a constant, a function or even a
            styled-component.
          </li> <br />
          <li>
            <strong>Molecules </strong>
            are elements composed of two or more atoms, i.e. a function that
            depends on an external constant, a button that depends on an icon,
            a component that depends on another component, but in any case,
            being small blocks.
          </li> <br />
          <li>
            <strong>Organisms </strong>
            are elements formed by two or more molecules. in this case, a
            complete component, i.e. an AppBar, a Menu, a Card, a Form, etc.
            elements ready to build a page.
          </li><br />
          <li>
            <strong>A system </strong>
            is a harmonic set of atoms, molecules and organism, which can be
            used by the developer. For example, a system can be composed by a
            set of icons, a constant of colors, multiple components like
            AppBar, Slider, Card, Footer, etc. In addition to hooks, css
            modules and any other type of files.
          </li><br />
          <li>
            <strong>Templates </strong>
            consist mainly of groups of organisms stitched together to form
            pages. An application is already created, ready for content to be
            inserted into it. This, with some degree of customization, but
            limited by the already formed structure.
          </li> <br />
          <li>
            <strong>Pages </strong>
            are specific instances of templates. Here, placeholder content is
            replaced with real representative content to give an accurate
            depiction of what a user will ultimately see.
          </li>
        </ul>
        <p>
          This structure (although it is not the classification by which the
          content of this library will be ordered) it allows us to have a
          clearer conception of what it is intended to achieve. A library where
          you can download or install already created elements of all types and
          levels, from a constant with predefined values to an entire system of
          elements, not similar to the others, but with its own style and well
          defined, while standardized and easy to use.
        </p>
        <br />
        <h2>Development</h2>
        <p>
          This project is divided in two parts. the first one, is the{' '}
          <a className='link' to='/dashboard/core'>
            core
          </a>
          , which has different components and basic functions. the second one,
          are the components, functions, elements and other files developed by
          the community using the core and following the standards of this
          project, this way you can have a great amount of these elements and files
          developed in an easy and simple way, which
          you can customize and, being standardized, use them with the same
          properties and the same logic.
        </p> <br />
        <h2>Overview</h2>
        <h3>Core</h3>
        <p>
          The core (atomic-library-core) is a package of different components,
          constants and functions important for the development of other
          elements, for example, Box, Header, Nav, Footer among others,
          which are containers that can receive props such as grid, cols,
          areas; or flex, wrap, flexColumn etc. useful for create grid or
          flex containers. Besides that they can receive any class, for example,
          tailwind classes. Another example is createTheme, a function to
          change default values like
          the maximum width of containers or breakpoints, as well as add
          constant values that can be used throughout the application.
        </p>
        <h3>myStyle and customizer</h3>
        <p>
          myStyle is a very important prop which have all the components. with this prop you can style the components adding or modifying any css property
          of the component, for example, font-family, background, padding, etc. This prop works from customizer,
          a function included in the core
        </p>
        <h3>Components</h3>
        <p>The components are created by the comunity following a set of rules and standards.
          For example in the props, of which there are multiple types, such as styling props, logic props, or build props,
          which in turn are divided into more types. for example a build prop of app bars is links, which receive
          an array of objects with the link properties, such as name, link or icon.
          this way you can have multiple pre-built AppBar options (i.e. AppBarDribbble or AppBarInstagram) and they will all receive the same property for adding links.
        </p>
        <h3>Custom Hooks</h3>
        <p>The comunity can create their own custom hooks such as useFetch or useDimensions and share it with
          others
        </p>
        <h3>Style Functions</h3>
        <p>
          Style functions are, simply put, classes with variable values. For instance, if you run
          <code>cardEffect()</code> this will return a code that you can insert  into a component via  <code>insertStyleBefore</code> or
          <code>insertStyle</code> but you can also run <code>{"cardEffect({time: '.3s', translate: '-10px, -20px'})"}</code>
          to get a custom value
        </p>
        <h3>Style Effects</h3>
        <p>
          Style effects are very similar to style functions, the difference is that a style effect is executed
          in a special state, for example, <code>{"bgGradientEffect({values: ['red', 'blue']})"}</code>
          will return a code that changes the background on hover by default, but if you execute
          <code>{"bgGradientEffect({when: 'active', values: ['red', 'blue']})"}</code>
          the change will occur on active. (this example is simple, but with this you can save hundreds of lines of code)
        </p>
        <h3>Css</h3>
        <p>
          Unlike other libraries or frameworks, atomic library does not try to run away from css,
          but use it as a support, you can download css files, with different styles and default
          classes. from normalize to entire css systems.
        </p>
        <h3>Utils</h3>
        <p>in this part you can find a lot of useful constants such as colors, shadows, spacing or
          specific functions already developed and shared by the community.
        </p>
        {/* <h3>Sets</h3> */}
        <h3>My System</h3>
        <p>This is a useful tool we provide you to build your own systems, for example adding AppBarInstagram, FooterAmazon,
          Card015, etc to the folder components, or adding shadow024, colorPallet04, etc to constants or other folders. so your system will be documented, accessible and easy to share privately or publicly.
        </p> <br />
        <h2>Quick Examples</h2>
        <h3>core</h3>
        <p>This is a little demo about the core container components. All of them are basically the same component,
          but with the difference that each one returns a semantic tag
        </p>
        <CodeBlock language='jsx' code={coreContainersStr} />
        <p>Result:</p>
        <Box>
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
              <Box h='200px' bg='#909A9B' />
              <Box h='200px' bg='#909A9B' />
              <Box h='200px' bg='#909A9B' />
            </Main>
            <Aside h='400px' bg='#CACACA' m='0' span='aside' />
            <Footer h='80px' bg='#ccc' span='footer' />
          </Wrapper>
        </Box> <br />
        <h3>myStyle and customizer</h3>
        <p>To style the components in addition to the style props like bg or background, h or height, c or color, etc,
          you can use the myStyle prop to modify any css property using camel-case or abbreviations
        </p>
        <CodeBlock
          language='jsx' code={`
import {Box} from 'atomic-library-core'
const MyComponent = () => {
  return (
    <Box
      myStyle={{
        bg: '#ccc', // or background: '#ccc'
        h: '200px', // or height: '200px'
        br: '10px', // or borderRadius: '10px'
        p: '1rem', //  or padding: '1rem'
        'p': { // it refers to tag p
          fs: '1.5rem' // or fontSize: '1.5rem'
        }
      }}
    >
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Molestias, tempore.
      </p>
    </Box>
  )
}
export default MyComponent
        `}
        />
        <p>Result: </p>
        <Box
          myStyle={{
            bg: '#ccc', // or background: '#ccc'
            h: '200px', // or height: '200px'
            br: '10px', // or borderRadius: '10px'
            padding: '1rem', // or p: '1rem'
            p: { // it refer to tag p
              fs: '1.5rem' // or fontSize: '2rem'
            }
          }}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore.</p>
        </Box> <br />
        <p>customizer is the function on which myStyle is based. you can use it to
          modify any property of your own styled-components.
        </p>
        <CodeBlock
          language='jsx' code={`
import {customizer} from 'atomic-library-core'
import styled from 'styled-components'

const Container = styled.div'
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  // here you use customizer
  $ {({myStyle}) => myStyle && customizer(myStyle) }
'
        `}
        /> <br />
        <h3>Style Functions</h3>
        <CodeBlock language='jsx' code={styleFunctionsStr} />
        <p>Result: </p>
        <Box grid gap='1rem'>
          <Box
            insertStyle={cardEffect1} p='1rem' rounded bg='#f2f2f2'
          >
            click here
          </Box>
          <Box
            insertStyle={cardEffect2}
            myStyle={{ p: '1rem', bg: '#f2f2f2' }}
            rounded
          >click here
          </Box>
        </Box> <br />
        <h3>Style Effects</h3>
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
        <p>Result: </p>
        <Box rounded b='1px solid #ccc' insertStyle={buttonEffect1}>
          <p className='effect-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,</p>
        </Box>
        <Box p='1rem' b='1px solid #ccc' mT='1rem' rounded insertStyle={buttonEffect2}>
          <span className='effect-content'>click here</span>
        </Box>
        <br /> <br />
        <h3>Extending Styles</h3>
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
      </Content>
    </Layout>
  )
}
export default Home
