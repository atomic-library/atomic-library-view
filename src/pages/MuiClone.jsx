import { Layout, CodeBlock } from '../components'
import { Box, Box as Content } from 'atomic-library-core'
import { Alert } from 'mui-clone'
const MuiClone = () => {
  return (
    <Layout>
      <Content size='md' p='50px 30px'>
        <h2>Mui clone</h2>
        <p>This is a "clone" of material ui using atomic-library-core.
          it's a recreation of the most components
        </p>
        <p>Although this is not what atomic library is intended to achieve, it is a good example of atomic-library-core's potential</p>
        <h2>Installation</h2>
        <h3>npm</h3>
        <CodeBlock
          language='bash'
          code=' npm install mui-clone --save'
        />
        <h3>yarn</h3>
        <CodeBlock
          language='bash'
          code=' yarn add mui-clone'
        /> <br />

        <h2>Usage</h2>
        In this package you need to replace "variant" with "type" and "color" with "subType".
        for instance

        <CodeBlock
          language='jsx'
          code={`
<Btn type='filled' subType='primary'>Click here</Btn>
<Btn type='ghost' subType='success'>Click here</Btn>
          `}
        />

        <h3>types</h3>
        <ul>
          <li>filled</li>
          <li>ghost</li>
          <li>text</li>
          <li>smooth</li>
        </ul>

        <h3>sub types</h3>
        <ul>
          <li>primary</li>
          <li>secondary</li>
          <li>success</li>
          <li>danger</li>
          <li>warning</li>
          <li>info</li>
          <li>disabled</li>
          <li>dark</li>
        </ul>
        <br />
        <Alert subType='info' rounded type='ghost' fs='1rem'>
          Note: if the component is an input, you can use inputType to set the type of the input
        </Alert>
        <br />
        <h2>Components</h2>
        <br />
        <h3>inputs</h3>
        <p><b>AutoSelect: not yet</b></p>
      </Content>
    </Layout>
  )
}
export default MuiClone
