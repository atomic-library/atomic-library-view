import { Layout, CodeBlock } from '../../components'
import { Box as Content, Box, Label, Input, Span } from 'atomic-library-core'
import { Btn, Alert, Switch, BtnGroup } from 'mui-clone'
import { HiUpload } from 'react-icons/hi'
import { FiTrash2 } from 'react-icons/fi'
import { useState } from 'react'
const Result = ({ children, ...rest }) => {
  return (
    <Box rounded p='1rem' b='1px solid #ccc' {...rest}>
      {children}
    </Box>
  )
}

const MuiCloneInputs = () => {
  const [loading, setLoading] = useState(false)
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
<Btn raised>Click here</Btn>
<Btn 
  type='none' 
  br="50px"
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
          <Btn type='none' c='#fff' br='50px' bg='#F9BA10' bxSw='2px 3px 0px #E5AB0E'>Click here</Btn>
        </Result>
        <p>You can also disable it</p>
        <CodeBlock
          language='jsx'
          code={`
<Btn disabled >Click here</Btn>
<Btn disabled type="ghost">Click here</Btn>
          `}
        />
        <Result>
          <Btn disabled>Click here</Btn>
          <Btn disabled type='ghost'>Click here</Btn>
        </Result>
        <p>Sizes</p>
        <CodeBlock
          language='jsx'
          code={`
<Btn size="sm" >Small</Btn>
<Btn size="md" type="ghost">Medium</Btn>
<Btn size="lg" type="smooth">Large</Btn>
          `}
        />
        <Result>
          <Btn size='sm'>Small</Btn>
          <Btn size='md' type='ghost'>Medium</Btn>
          <Btn size='lg' type='smooth'>Large</Btn>
        </Result>
        <p>Change the rendered element using the prop <code>component</code></p>
        <Alert type='smooth' myStyle={{ code: { bg: 'transparent' } }} fs='1rem' rounded>
          <>Also, when using the prop <code>component</code>, you need to use capitalize, since the component uses atomic-library-core components</>
        </Alert>
        <p>For example:</p>
        <CodeBlock
          language='jsx'
          code={`
import { Btn } from 'mui-clone'
import { Input } from 'atomic-library-core'

const UploadButton = () => {
  return (
    <Label>
      <Input type='file' display='none' />
      <Btn component='Span'>Upload</Btn>
    </Label>
  )
}
 
          `}
        />
        <Result>

          <Label>
            <Input type='file' d='none' />
            <Btn component='Span' rounded subType='success'>Upload</Btn>
          </Label>

        </Result>
        <p>Use icons</p>
        <CodeBlock
          language='jsx'
          code={`
import { Btn } from 'mui-clone'
import { HiUpload } from 'react-icons/hi'
import { FiTrash2 } from 'react-icons/fi'

const Buttons = () => {
  return (
    <>
      <Btn startIcon={<HiUpload />}>Upload</Btn>
      <Btn endIcon={<FiTrash2 />}>Delete</Btn>
    </>
  )
}
          `}
        />
        <Result>
          <Btn startIcon={<HiUpload />}>Upload</Btn>
          <Btn endIcon={<FiTrash2 />}>Delete</Btn>
        </Result>
        <p>Icon buttons</p>
        <CodeBlock
          language='jsx'
          code={`
import { Btn } from 'mui-clone'
import { HiUpload } from 'react-icons/hi'
import { FiTrash2 } from 'react-icons/fi'

const Buttons = () => {
  return (
    <>
      <Btn type='icon'><HiUpload /></Btn>
      <Btn type='icon'><FiTrash2 /></Btn>
    </>
  )
}
          `}
        />
        <Result>
          <Btn type='icon'><HiUpload /></Btn>
          <Btn type='icon'><FiTrash2 /></Btn>
        </Result>
        <p>Loading buttons</p>
        <CodeBlock
          language='jsx'
          code={`
import { Btn, Switch } from 'mui-clone'
import { useState } from 'react

const Buttons = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Switch 
        checked={loading} 
        onChange={() => { setLoading(!loading) }} 
      />
      <Btn loading={loading}>fetch</Btn>
      <Btn loading={loading} loadingIndicator='loading...'>fetch</Btn>
    </>
  )
}
          `}
        />
        <Result>
          <Switch checked={loading} onChange={() => { setLoading(!loading) }} />
          <Btn loading={loading}>fetch</Btn>
          <Btn loading={loading} loadingIndicator='loading...'>fetch</Btn>
        </Result>
        <br />
        <h3>BtnGroup: done</h3>
        <BtnGroup>
          <Btn> button 1</Btn>
          <Btn> button 2</Btn>
          <Btn> button 3</Btn>
        </BtnGroup>
      </Content>
    </Layout>
  )
}
export default MuiCloneInputs
