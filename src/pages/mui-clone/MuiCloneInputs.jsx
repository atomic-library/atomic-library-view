import { Layout, CodeBlock } from '../../components'
import { Box as Content, Box, Label, Input } from 'atomic-library-core'
import { Btn, BtnGroup, Checkbox, Radio, RadioGroup, Range, Rating, Switch, ToggleBtnGroup } from 'mui-clone'

const Result = ({ children, ...rest }) => {
  return (
    <Box rounded p='1rem' b='1px solid #ccc' {...rest}>
      {children}
    </Box>
  )
}

const MuiCloneInputs = () => {
  return (
    <Layout>
      <Content size='md' p='50px 30px'>
        <h2>Inputs</h2>
        <h3>Btn: done</h3>

        <p>the <code>Btn</code> accepts <code>types</code>  and <code>subTypes</code> </p>
        <CodeBlock
          language='jsx'
          code={`
<Btn>default</Btn>
<Btn type='filled' subType='primary'>Click here</Btn>
<Btn type='ghost' subType='success'>Click here</Btn>
<Btn type='smooth' subType='danger'>Click here</Btn>
<Btn type='text' subType='secondary'>Click here</Btn>
          `}
        />
        <Result>
          <Btn>default</Btn>
          <Btn type='filled' subType='primary'>Click here</Btn>
          <Btn type='ghost' subType='success'>Click here</Btn>
          <Btn type='smooth' subType='danger'>Click here</Btn>
          <Btn type='text' subType='secondary'>Click here</Btn>
        </Result>
        <p><code>Btn</code> return a <code>Button</code> from atomic-library-core so you can use any prop of this.
          for example:
        </p>
        <CodeBlock
          language='jsx'
          code={`
<Btn rounded raised >Click here</Btn>
<Btn 
  type='none' 
  fullRounded 
  c='#fff' 
  bg='#F9BA10' 
  bxSw='2px 3px 0px #E5AB0E'
>
  Click here
</Btn>
          `}
        />
        <Result>
          <Btn rounded raised>Click here</Btn>
          <Btn type='none' c='#fff' fullRounded bg='#F9BA10' bxSw='2px 3px 0px #E5AB0E'>Click here</Btn>
        </Result>
        <p>You can also disable it</p>
        <CodeBlock
          language='jsx'
          code={`
<Btn rounded disabled >Click here</Btn>
<Btn rounded disabled type="ghost">Click here</Btn>
          `}
        />
        <Result>
          <Btn rounded disabled>Click here</Btn>
          <Btn rounded disabled type='ghost'>Click here</Btn>
        </Result>
        <p>Sizes</p>
        <CodeBlock
          language='jsx'
          code={`
<Btn rounded size="sm" >Small</Btn>
<Btn rounded size="md" type="ghost">Medium</Btn>
<Btn rounded size="lg" type="smooth">Large</Btn>
          `}
        />
        <Result>
          <Btn rounded size='sm'>Small</Btn>
          <Btn rounded size='md' type='ghost'>Medium</Btn>
          <Btn rounded size='lg' type='smooth'>Large</Btn>
        </Result>

      </Content>
    </Layout>
  )
}
export default MuiCloneInputs
