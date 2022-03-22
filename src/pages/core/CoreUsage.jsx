import { Layout, CodeBlock } from '../../components'
import { Box, Box as Content, Title, MyBtn } from 'atomic-library-core'
import { Link } from 'react-router-dom'

const CoreUsage = () => {
  return (
    <Layout>
      {/* <Box h='calc(100vh - 150px)' flex center>
        <h1>Not Content Yet</h1>
      </Box> */}
      {/* <Content size='lg' p='50px 30px'>
        <Title type='title2' m='auto'>
          Usage
        </Title>{' '}
        <br /> <br />
        <p>
          This package contain <b>Components, Functions</b> and{' '}
          <b>Variables. </b>
          You can import them as follows
        </p>
        <CodeBlock
          language='jsx'
          code={'import {components, functions, variables } from \'my-library-core\''}
        />
        <br /> <br />
        <Title h2 c='#171c24'>
          Overview
        </Title>
        <Title h3>Components</Title>
        <p>
          there are multiple components that will help you in the development of
          applications and new components. each of these has common properties
          and special properties, for example width, height and background, are
          properties that all components have, on the other hand properties like
          grid or flex, only container components like Box, Header or Main have
          them.
        </p>
        <p>
          in addition to this, there is a very important common property,
          myStyle, which is used to modify any css property of the component,
          for example, font-size, border-radius, transform etc
        </p>
        <br />
        <Title h3>Variables</Title>
        <p>
          There are two types of variables, utility variables and reference
          variables. Reference variables are those used by the components, such
          as Breackpoints and MaxWidths, which you can modify with functions
          that will be explained later. While utility variables are default
          variables, for example MyColors and Layers which you can use in
          development.
        </p>
        <br />
        <Title h3>Functions</Title>
        <p>
          there are two types of functions, utility functions and reference
          functions. reference functions are used to modify the reference
          variables while utility functions are those that will help you in the
          development of new components.
        </p>
        <br />
        <br />
        <Title h2 c='#171c24'>Examples</Title>
        <Title h3>Properties</Title>
        <p>
          Each component has common and special properties. let's see it with an
          example
        </p>
        <CodeBlock
          language='jsx'
          code={`
import { MyBtn, Box } from 'my-library-core'

const Component = () => {
    return(
        <Box rounded bg="#E8E8E8">
            <MyBtn rounded ghost>Button</MyBtn>
            <MyBtn rounded primary type="success">Button</MyBtn>
            <MyBtn rounded smooth type="danger">Button</MyBtn>
            <MyBtn rounded bg="orange" >Button</MyBtn>
        </Box>

    )
}
export default Component
                `}
        />
        <p>Result: </p>
        <br />
        <Box>
          <Box rounded bg='#E8E8E8'>
            <MyBtn rounded ghost>
              Button
            </MyBtn>
            <MyBtn rounded primary type='success'>
              Button
            </MyBtn>
            <MyBtn rounded smooth type='danger'>
              Button
            </MyBtn>
            <MyBtn rounded bg='orange'>
              Button
            </MyBtn>
          </Box>
        </Box>
        <br />
        <p>
          In this case the common properties are <b>bg</b> and <b>rounded </b>
          and the special properties are <b>primary, ghost, smooth, </b> and
          <b> type</b>
        </p>
        <br />
        <br />
        <p>
          In certain cases we can find the same property with different results
        </p>
        <CodeBlock
          language='jsx'
          code={`
import { MyBtn, Box } from 'my-library-core'

const Component = () => {
    return(
        <Box bg="#E8E8E8" size="sm">
            <MyBtn size="small">Button</MyBtn>
            <MyBtn size="medium" primary type="success">Button</MyBtn>
            <MyBtn size="large" smooth type="danger">Button</MyBtn>
        </Box>
    )
}
export default Component
                `}
        />
        <p>Result: </p>
        <Box>
          <Box bg='#E8E8E8' size='sm'>
            <MyBtn size='small' primary type='success'>
              Button
            </MyBtn>
            <MyBtn size='medium' primary type='success'>
              Button
            </MyBtn>
            <MyBtn size='large' primary type='success'>
              Button
            </MyBtn>
          </Box>
        </Box>
        <br />
        <p>
          In this example size in <b>Box</b> it refers to the maximun width,
          while in <b>MyBtn</b> it refers to the size of the button, padding,
          margin and font-size.
        </p>
        <br /> <br />
        <Title h3>myStyle</Title>
        <p>
          All components have the property <b>myStyle</b> with this property you
          can change the style of the component. Any property of css,
          bacgkround, color, padding, hover, active, even you can add media
          queries
        </p>
        <CodeBlock
          language='jsx'
          code={`
import {Box} from 'my-library-core'

const Component = () => {
  return (
    <Box
      myStyle={{
      background: '#fff', //or bg: '#fff'
      borderRadius: '10px', //or br: '10px'
      fontSize: '1rem', // or fs: '1rem'
      padding: '15px', // or p: '15px'
      'h1': {
        bg: '#E8E8E8',
        fs: '2rem',
        text: 'center',

        ':hover': {
          boxShadow: '2px 3px 5px #ccc',
        }
      }
    }}>
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet.</p>
    </Box>
  )
}
export default Component
          `}
        />
        <p>Result:</p>
        <br />
        <Box>
          <Box
            myStyle={{
              background: '#fff', // or bg: '#ccc'
              borderRadius: '10px', // or br: '10px'
              fontSize: '1rem', // or fs: '1.5rem'
              padding: '15px', // or p: '10px'
              h1: {
                bg: '#E8E8E8',
                fs: '2rem',
                text: 'center',

                ':hover': {
                  boxShadow: '2px 3px 5px #ccc'
                }
              }
            }}
          >
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eveniet.
            </p>
          </Box>
        </Box>
        <br />
        <p>
          If you want more information about <b>myStyle</b>{' '}
          <Link to='/dashboard/core/my-style'>click here</Link>{' '}
        </p>
        <br /> <br />
      </Content> */}
      <Content size='lg' p='50px 30px'>
        s
      </Content>
    </Layout>
  )
}
export default CoreUsage
