import { Layout, CodeBlock } from '../components'
import { Box, Box as Content } from 'atomic-library-core'
import { Link } from 'react-router-dom'

const Core = () => {
  return (
    <Layout>
      <Content size='md' p='50px 30px'>
        {/* <h1>atomic-library-core</h1> <br /> <br /> */}
        <h2>Installation</h2> <br />
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
        <h2>The heart</h2> <br />
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
        </p> <br />
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
          p: '1rem'
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
        <p>The idea is not that you style the whole component using this function,
          but that you have the ability to modify any property of the component.
          you can use camel case or abbreviations e.g.
        </p>
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
        <h2>Components</h2>
        <p>This package includes some useful components for development, which are as follows:</p>
        <br />
        <h3>Containers</h3>
        <p>The containers are:</p>
        <ul>
          <li>Box</li>
          <li>Section</li>
          <li>Header</li>
          <li>Footer</li>
          <li>Main</li>
          <li>Nav</li>
          <li>Aside</li>
          <li>Article</li>
          <li>Form</li>
          <li>Img</li>
        </ul> <br />
        <p>All of these are basically the same component, the difference is that each one returns a semantic tag.
        </p> <br />
        <p>These receive as props any property accepted by the customizer function, e.g.</p>
        <CodeBlock
          language='jsx'
          code={`
import { Box } from 'atomic-library-core'

const MyComponent = () => {
  return (
    <>
      <Box c="red" br="5px" mT="10px" >
        <p>lorem ipsum, is simply dummy text of the printing and typesetting</p>
      </Box>
      <Box color="red" borderRadius="5px" marginTop="10px" >
        <p>lorem ipsum, is simply dummy text of the printing and typesetting</p>
      </Box>
    </>
  )
}
          `}
        />
        <p>but in addition to these they also receive other very useful properties such as:</p> <br />
        <p>FlexBox props. The following props are useful for creating a flexible containers</p>
        <ul>
          <li>flex</li>
          <li>inlineFlex</li>
          <li>flexWrap</li>
          <li>gap</li>
          <li>flexColumn</li>
          <li>flexColumnReverse</li>
          <li>flexRow</li>
          <li>flexRowReverse</li>
          <li>center</li>
          <li>y</li>
          <li>x</li>
        </ul>
        <br />
        <p>Css Grid. The following props are useful for creating a grid containers </p>
        <ul>
          <li>grid</li>
          <li>cols</li>
          <li>rows</li>
          <li>areas</li>
          <li>gap</li>
          <li>center</li>
          <li>y</li>
          <li>x</li>
        </ul>
        <br />
        <p>Others. The following props are useful for modify some styles </p>
        <ul>
          <li>insertStyleBefore</li>
          <li>rounded</li>
          <li>fullRounded</li>
          <li>size</li>
          <li>raised</li>
          <li>gradient</li>
          <li>variants</li>
          <li>myStyle</li>
          <li>superStyle</li>
          <li>insertStyle</li>
        </ul>
        <br />
        <h2>Provider</h2>
        <h2>Theme</h2>
        <h2>Functions</h2>
        <h2>Constants</h2>
      </Content>
    </Layout>
  )
}
export default Core
