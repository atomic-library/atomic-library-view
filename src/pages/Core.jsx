import { Layout, CodeBlock } from '../components'
import { Box, Box as Content, Ul } from 'atomic-library-core'
import { Link } from 'react-router-dom'

const Core = () => {
  return (
    <Layout>
      <Content size='md' p='50px 30px'>
        {/* <h1>atomic-library-core</h1> <br /> <br /> */}
        <h2>Installation</h2>
        <h3>npm</h3>
        <CodeBlock
          language='bash'
          code=' npm install atomic-library-core --save'
        />
        <h3>yarn</h3>
        <CodeBlock
          language='bash'
          code=' yarn add atomic-library-core'
        /> <br />
        <h2>The heart</h2>
        <p>styled-components is very useful because it allows you to modify the style of an element in a js file,
          for example:
        </p>
        <CodeBlock
          language='jsx'
          code={`
import styled from 'styled-components'

const Link = styled.a'
  text-decoration: none;
  cursor: $ {({disabled}) => disabled ? 'no-drop' : 'pointer'}; 
'
        `}
        />
        <p>
          on a specific component is very good, but what if you want it to be highly reusable and also
          completely customizable, well, this is where the idea of customizer comes in.
        </p>
        <h3>customizer</h3>
        <p>This function is very simple, it recieves an object, iterates over it and returns a string, for instance:</p>
        <CodeBlock
          language='jsx'
          code={`
customizer({w: '80%', h: '200px', bg: '#ccc', c: '#fff'})
// return
'width: 80%; height: 200px; background: #ccc; color: #fff;'
        `}
        />
        <p>This string is inserted into the styled-component. This way you can
          create a component and if you need it, modify any property of it, e.g.
        </p>
        <CodeBlock
          language='jsx'
          code={`
import styled from 'styled-components'
import { customizer } from 'atomic-library-core'

const Box = styled.div'
  padding: 1rem;
  margin: auto;
  background: #fff;
  //here you add customizer
  $ {({myStyle}) => myStyle && customizer(myStyle)} 
'

const MyComponent = () => {
  return (
    <>
      <Box myStyle={{bg: 'red',c: '#fff'}}>
        <p>lorem ipsum, is simply dummy text of the printing and typesetting</p> 
      </Box>
      <Box myStyle={{bg: '#f2f2f2',c: '#ccc'}}>
        <p>lorem ipsum, is simply dummy text of the printing and typesetting</p> 
      </Box>
      <Box myStyle={{b: '1px solid #ccc'}}>
        <p>lorem ipsum, is simply dummy text of the printing and typesetting</p> 
      </Box>
    </>
  )
}
          `}
        />
        <p>but this is just the beginning with this function you can modify anything you like</p>
        <CodeBlock
          language='jsx' code={`
import styled from 'styled-components'
import { customizer } from 'atomic-library-core'

const Box = styled.div'
  $ {({myStyle}) => myStyle && customizer(myStyle)}
'
const colors = {
  primary: '#f2f2f2',
  secondary: '#fff',
  title: 'blue'
  text: '#ccc'
}
const state = false

const MyComponent = () => {
  return (
    <>
      <Box 
        myStyle={{
          bg: state ? 'red': 'orange',
          c: colors.text, 
          p: '1rem',
          'h2': {
            c: colors.title,
            fs: '2rem',
            break: { //for breakpoints
              sm: { // @media (max-width: 540px)
                fs: '1.4rem'
              }
            }
          }
        }}
      >
        <h2>Title lorem ipsum, is simply</h2> 
      </Box>
    </>
  )
}

        `}
        />

        <p> you can use camel case or abbreviations e.g.</p>
        <CodeBlock
          language='jsx'
          code={`
customizer({width: '100%', height: '100px', borderRadius: '5px'})
//or
customizer({w: '100%', h: '100px', br: '5px'})
        `}
        />
        <p>if you want more information about it, you can
          <a
            className='link'
            href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/Dictionary.js'
          > click here
          </a>
        </p> <br />
        <h2>Elements</h2>
        <p>An element is a style-component created using customizer and other funcions, all of them receive the same properties,
          ignoring the properties that they receive by default. this elements are as follows:
        </p>
        <ul>
          <li>Article</li>
          <li>Aside</li>
          <li>Box</li>
          <li>Footer</li>
          <li>Form</li>
          <li>Header</li>
          <li>Main</li>
          <li>Section</li>
          <li>Nav</li>
          <li>Code</li>
          <li>Pre</li>
          <li>Button</li>
          <li>Img</li>
          <li>P</li>
          <li>H1</li>
          <li>H2</li>
          <li>H3</li>
          <li>H4</li>
          <li>H5</li>
          <li>H6</li>
          <li>Span</li>
          <li>Input</li>
          <li>Blockquote</li>
          <li>Hr</li>
          <li>Ul</li>
          <li>Ol</li>
          <li>Li</li>
          <li>Table</li>
          <li>Td</li>
          <li>Tr</li>
          <li>Th</li>
          <li>Thead</li>
          <li>Tbody</li>
          <li>Tfoot</li>
          <li>Textarea</li>
        </ul>
        <p>The following elements have <code>margin: auto; width: 100%;</code> by default. </p>
        <ul>
          <li>Box</li>
          <li>Section</li>
          <li>Header</li>
          <li>Footer</li>
          <li>Main</li>
          <li>Aside</li>
          <li>Article</li>
          <li>Form</li>
        </ul>
        <h3>myStyle</h3>
        <p>All elements recieves <code>myStyle</code> as prop. for example:</p>
        <CodeBlock
          language='jsx'
          code={`
import {Box, Button} from 'atomic-library-core'

const Component = () => {
  return (
    <>
      <Box myStyle={{bg: '#f2f2f2', c: '#141414', br: '10px'}}>
        <p>lorem ipsum, is simply dummy text of the </p>
      </Box>
      <Button myStyle={{bg: 'blue', c: '#fff', br: '10px'}}>
        <p>lorem ipsum, is simply dummy text of the </p>
      </Button>
    </>
  )
}
          `}
        />
        <p>They can also receive as pro any value accepted by the customizer function</p>
        <CodeBlock
          language='jsx'
          code={`
import {Box, Button} from 'atomic-library-core'

const Component = () => {
  return (
    <>
      <Box bg='#f2f2f2' c='#141414' br='10px'>
        <p>lorem ipsum, is simply dummy text of the </p>
      </Box>
      <Button bg='blue' color='#fff' borderRadius='10px'>
        <p>lorem ipsum, is simply dummy text of the </p>
      </Button>
    </>
  )
}
          `}
        />

        <h3>atomicClass</h3>
        <p>This prop receives a string or an array of strings</p>
        <p>if you pass a string you can pass it any property accepted by the customizer function which will be applied directly to the component</p>
        <CodeBlock
          language='jsx'
          code={`
<Box 
  atomicClass="bg:#ccc h:100px p:1rem br:10px "
/>
          `}
        />
        <p>if you pass it an array of strings, the structure is as follows: breakpoint, selectors, properties, also you have to pass an asterisk if you don't want to add any of the values in the structure</p>
        <CodeBlock
          language='jsx'
          code={`
<Box 
  atomicClass={[
    "* * bg:#f2f2f2 c:#1a1a1aa br:10px p:1rem",
    "* :hover bg:red c:blue",
    "sm .child p:1rem/s2rem m:20px" // use /s for add an space
  ]}
/>
          `}
        />
        <p>but in addition to these they also receive other very useful properties such as:</p> <br />
        <p>FlexBox props. The following props are useful for creating  flexible containers</p>
        <table>
          <tr>
            <th>prop</th>
            <th>description</th>
          </tr>
          <tr>
            <td>flex</td>
            <td>display: flex;</td>
          </tr>
          <tr>
            <td>inlineFlex</td>
            <td>display: inline-flex;</td>
          </tr>
          <tr>
            <td>flexWrap</td>
            <td>flex-wrap: wrap;</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>grid-gap: value;</td>
          </tr>
          <tr>
            <td>flowColumn</td>
            <td>flex-direction: column;</td>
          </tr>
          <tr>
            <td>flowColumnReverse</td>
            <td>flex-direction: column-reverse;</td>
          </tr>
          <tr>
            <td>flowRow</td>
            <td>flex-direction: row;</td>
          </tr>
          <tr>
            <td>flowRowReverse</td>
            <td>flex-direction: row-reverse;</td>
          </tr>
          <tr>
            <td>center</td>
            <td>align-items: center; justify-content: center;</td>
          </tr>
          <tr>
            <td>y</td>
            <td>align-items: value;</td>
          </tr>
          <tr>
            <td>x</td>
            <td>justify-content: velue;</td>
          </tr>
        </table>

        <br />
        <p>Css Grid. The following props are useful for creating a grid containers </p>
        <table>
          <tr>
            <th>prop</th>
            <th>description</th>
          </tr>
          <tr>
            <td>grid</td>
            <td>display: grid; grid-template-columns: 1fr 1fr;</td>
          </tr>
          <tr>
            <td>cols</td>
            <td>grid-template-columns: value;</td>
          </tr>
          <tr>
            <td>areas</td>
            <td>grid-template-areas: value;</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>grid-gap: value;</td>
          </tr>
          <tr>
            <td>flowColumn</td>
            <td>grid-auto-flow: column;</td>
          </tr>
          <tr>
            <td>flowRow</td>
            <td>grid-auto-flow: row;</td>
          </tr>
          <tr>
            <td>center</td>
            <td>align-items: center; justify-items: center;</td>
          </tr>
          <tr>
            <td>y</td>
            <td>align-items: value;</td>
          </tr>
          <tr>
            <td>x</td>
            <td>justify-items: center;</td>
          </tr>
        </table>
        <br />
        <p>Others. The following props are useful for modify some styles </p>

        <table>
          <tr>
            <td>insertStyleBefore</td>
            <td>insert code directly to the styled-component at the beginning</td>
          </tr>
          <tr>
            <td>insertStyle</td>
            <td>insert code directly to the styled-component at the end</td>
          </tr>
          <tr>
            <td>rounded</td>
            <td>border-radius: 5px</td>
          </tr>
          <tr>
            <td>fullRounded</td>
            <td>border-radius: 150px</td>
          </tr>
          <tr>
            <td>size</td>
            <td>go to size section</td>
          </tr>
          <tr>
            <td>shding</td>
            <td>go to shading section</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>go to variants section</td>
          </tr>
          <tr>
            <td>superStyle</td>
            <td>this is the same as myStyle but the code is inserted after myStyle</td>
          </tr>
          <tr>
            <td>raised</td>
            <td>this is a shadow</td>
          </tr>
        </table>

        <br />
        <h2>Provider</h2>
        <p>You can use <code>AtomicContext</code> to pass values to several elements. for example:</p>
        <CodeBlock
          language='jsx'
          code={`
import {
  Box as Wrapper,
  Header,
  Main,
  Aside,
  Footer,
  Box,
  AtomicContext
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
      <AtomicContext.Provider value={{ bg: "#ccc", rounded: true }}>
        <Header h="80px" span="header" />
        <Main flex flexWrap bg="#fff" gap="10px" span="main">
          <Box h="200px" />
          <Box h="200px" />
          <Box h="200px" />
        </Main>
        <Aside h="400px" m="0" span="aside" />
        <Footer h="80px" span="footer" />
      </AtomicContext.Provider>
    </Wrapper>
)
}

export default App
          `}
        />
        <h2>Theme</h2>
        <p>you can see the default values of Theme <a className='link' href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/Theme.js'>clicking here</a> </p>
        <p>You can use <code>createTheme()</code> to modify the breackpoints, the Max Widths, create variants
          and add custom values, for example:
        </p>
        <CodeBlock
          language='jsx'
          code={`
import { createTheme } from 'atomic-library-core'

createTheme({
    breakPoints: {
        small: '@media (max-width: 540px)',
        medium: '@media (max-width: 720px)',
        large: '@media (max-width: 960px)',
    }, 
    maxWidths: {
        card: '200px',
        container: '720px',
        wrapper: '960px',
    },
    varians: {
        buttons: {
            danger: 'background: red; color: #fff;',
            ghostPurple: 'border: 1px solid purple; background: none ;',
        },
        card: 'border-radius: 5px; background: #ccc;',
    },
    values: {
        colors: {
            primary: '#f2f2f2',
            secondary: '#fff',
            text: '#ccc'
        }
    }
})
            `}
        />
        <p>You need to use this function in a high component, for example:</p>
        <CodeBlock
          language='jsx'
          code={`
import { createTheme } from 'atomic-library-core'
import myTheme from './myTheme' //this is a file that you can download or create

createTheme(myTheme)

const App = () => {
    return <div>App</div>
}
            `}
        />
        <p>in addition, values such as breakpoints or values will only be accessible by styled components using the customizer function.</p>

        <p>here you have examples</p> <br />
        <p>breakpoints</p>
        <CodeBlock
          language='jsx'
          code={`
import {createTheme, Theme, Box} from 'atomic-library-core'

createTheme({
    breakPoints: {
        ...Theme,
        customBreak1: '@media (max-width: 1200px)',
        customBreak2: '@media (max-width: 250px)'
    }
})

const MyComponent = () => {
    return (
        <>
            <Box
                myStyle={{
                    break: {
                        sm: {bg: 'red},
                        md: {bg: 'green'},
                        customBreak1: {bg: 'yellow'},
                        customBreak2: {bg: 'gray'}
                    }
                }}
            >
                <p>lorem ipsum, is simply dummy text of the printing and typesetting</p>
            </Box>
        </>
    )
}

            `}
        />
        <p>maxWidths</p>
        <CodeBlock
          language='jsx'
          code={`
import {createTheme, Box} from 'atomic-library-core'

createTheme({
    maxWidths: {
        card: '200px',
        container: '720px',
        wrapper: '960px',
    }
})

const MyComponent = () => {
    return (
        <>
            <Box size="Wrapper">
                <Box size="container">
                    <Box size="card">
                        <p>lorem ipsum, is simply dummy text of the</p>
                    <Box>
                    <Box size="card">
                        <p>lorem ipsum, is simply dummy text of the</p>
                    <Box>
                    <Box size="card">
                        <p>lorem ipsum, is simply dummy text of the</p>
                    <Box>
                <Box>
            <Box>
        </>
    )
}
            `}
        />
        <p>variants</p>
        <CodeBlock
          language='jsx'
          code={`
import {createTheme, Box, myBtn} from 'atomic-library-core'
import sampleEffect2 from './sampleEffect2'

let effect1 = sampleEffect2({bg: '#286cff'})
let effect2 = sampleEffect2({bg: '#cc1010'})
let effect1 = sampleEffect2({bg: '#2f9b05'})
createTheme({
    varians: {
        buttons: {
            variant1: effect1,
            variant2: effect2,
            variant3: effect3
        },
        card: 'border-radius: 5px; font-size: 12px;',
    }
})

const MyComponent = () => {
    return (
        <>
            <MyBtn variants={["buttons.variant1"]}>button</MyBtn>
            <MyBtn variants={["buttons.variant2"]}>button</MyBtn>
            <MyBtn variants={["buttons.variant3"]}>button</MyBtn>
            <Box variants={["buttons.variant1", "Card"]}>
                <p className="effect-content">lorem ipsum dolor sit</p>
            </Box>
        </>
    )
}
            `}
        />
        <p>the advantage of this is that you can, for example, run style effects once and use them throughout the application</p>

        <p>values</p>
        <CodeBlock
          language='jsx'
          code={`
import {createTheme, Box, myBtn} from 'atomic-library-core'
import sampleEffect2 from './sampleEffect2'

let effect1 = sampleEffect2({bg: '#286cff'})
let effect2 = sampleEffect2({bg: '#cc1010'})
let effect1 = sampleEffect2({bg: '#2f9b05'})
createTheme({
    values: {
        shadows: {
            s1: '2px 3px 5px #ccc',
            s2: '2px 3px 5px #cc1010',
            s3: '4px 6px 8px #2f9b05',
        },
        colors: {
            primary: '#f2f2f2'
            secondary: '#fff',
            text: '#ccc'
        },
        border: '1px solid #ccc'
    }
})

const MyComponent = () => {
    return (
        <>
            <Box b="[border]" boxShadow="[shadows.s1]">
                <p>lorem ipsum, is simply dummy text of the</p>
            </Box>
        </>
    )
}
            `}
        />
        <h2>Constants</h2>
        <p>This package provides some utility constants, which are as follows</p>
        <p><b>Theme</b>. This constant contains the default values of breakPoints and maxWidths,
          you can see it <a className='link' href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/Theme.js'>clicking here</a>
        </p>
        <p><b>Colors</b>. This constant contains a series of colors
          you can see it <a className='link' href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/Colors.js'>clicking here</a>
        </p>
        <p><b>ThemeColors1</b>. This constant contains a series of ordered colors
          you can see it <a className='link' href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/ThemeColors1.js'>clicking here</a>
        </p>
        <p><b>ThemeColors2</b>. This constant contains a series of ordered colors
          you can see it <a className='link' href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/ThemeColors2.js'>clicking here</a>
        </p>
        <h2>Functions</h2>
        <p>
          apart from those already mentioned, there is one more function that the components of
          this package use: getProperties(), although it is for internal operation you can
          also use it, you can see it
          <a className='link' href='https://github.com/atomic-library/atomic-library-core/blob/master/lib/getProperties.js'> clicking here</a>
        </p>

      </Content>
    </Layout>
  )
}
export default Core
