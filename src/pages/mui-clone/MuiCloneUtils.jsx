import { Layout, CodeBlock } from '../../components'
import { Box as Content } from 'atomic-library-core'

const MuiCloneUtils = () => {
  return (
    <Layout>
      <Content size='md' atmClass='p:50px_30px'>
        <h3>getTypes</h3>
        <p>This is a style function, so it returns code that can be inserted into a styled-component. This function receives an object with the following entries:</p>
        <table>
          <tr>
            <th>key</th>
            <th>accepted values </th>
          </tr>
          <tr>
            <td>type</td>
            <td>filled, ghost, text or smooth</td>
          </tr>
          <tr>
            <td>subType</td>
            <td>primary, secondary, success, danger, warning, info, disabled or dark</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
          </tr>
          <tr>
            <td>size</td>
            <td>sm, md or lg</td>
          </tr>
          <tr>
            <td>selected</td>
            <td>boolean</td>
          </tr>
          <tr>
            <td>cursor</td>
            <td>any value accepted by the property <code>cursor</code> </td>
          </tr>
          <tr>
            <td>userSelect</td>
            <td>any value accepted by the property <code>user-select</code> </td>
          </tr>
        </table>
        <p>The code returned is inserted into the styled-component using <code>insertStyleBefore</code> or <code>insertStyle</code> for example:</p>
        <CodeBlock
          language='jsx'
          code={`
let style = getTypes({type: "filled", subType: "primary"})
<Box insertStyleBefore={style}/>
//or 
let style = getTypes({type: "smooth", subType: "danger", cursor: 'wait', userSelect: 'text'})
<Box insertStyle={style}/>
          `}
        />
      </Content>
    </Layout>
  )
}
export default MuiCloneUtils
