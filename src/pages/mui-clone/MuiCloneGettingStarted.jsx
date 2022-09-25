import { Layout, CodeBlock } from '../../components'
import { Box as Content } from 'atomic-library-core'
import { Alert } from 'mui-clone'
const MuiCloneGettingStarted = () => {
  return (
    <Layout>
      <Content size='md' atmClass='p:50px_30px'>
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
        In this package you need to replace <code>variant</code> with <code>type</code> and <code>color</code>  with <code>subType</code>
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
        <Alert subType='info' rounded type='smooth' fs='1rem'>
          <>Note: if the component is an input, you can use inputType to set the type of the input</>
        </Alert>
        <br />

        <p>Also, when using <code>component</code> prop, you need to use capitalize, since the component uses atomic-library-core components. for  example:</p>
        <CodeBlock
          language='jsx'
          code={`
<Btn component="H1" >click</Btn>
//instead of using
<Btn component="h1" >click</Btn>
//or
<Avatar component="Button" >click</Avatar>
//instead of using
<Avatar component="button" >click</Avatar>
          `}
        />

        <h2>Status of components</h2>
        <p>In the following tables i expose information about the components with the categories: component, status and description.</p>
        <p>If you want more information about the components you can go to the rest of the documentation </p>
        <Alert subType='info' rounded type='smooth' fs='1rem'>
          <>Note: this is the first version of the package so the components are not perfect and some have missing functionalities</>
        </Alert>

        <br />
        <table>
          <tr>
            <td colspan='3'><p><b>Inputs</b></p></td>
          </tr>
          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>

          <tr>
            <td>Autocomplete</td>
            <td>Not yet</td>
            <td />
          </tr>
          <tr>
            <td>Button</td>
            <td>replaced</td>
            <td>this component was replaced with <code>Btn</code></td>
          </tr>
          <tr>
            <td>Btn</td>
            <td>done</td>
            <td>this is the replacement for <code>Button</code> . This component return directly a <code>Button</code>  element from atomic-library-core</td>
          </tr>
          <tr>
            <td>IconButton</td>
            <td>not necessary</td>
            <td>instead use <code>Btn</code></td>
          </tr>
          <tr>
            <td>LoadingButton</td>
            <td>not necessary</td>
            <td>instead use <code>Btn</code></td>
          </tr>

          <tr>
            <td>ButtonGroup</td>
            <td>replaced</td>
            <td>this component was replaced with <code>BtnGroup</code> </td>
          </tr>
          <tr>
            <td>BtnGroup</td>
            <td>done</td>
            <td>this is the replacement for <code>ButtonGroup</code> </td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Fab floating action button</td>
            <td>not necessary</td>
            <td> .</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>RadioGoup</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Rating</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Slider</td>
            <td>replaced</td>
            <td>This component was replaced with Range</td>
          </tr>
          <tr>
            <td>Range</td>
            <td>in process</td>
            <td>this is the replacement for Slider</td>
          </tr>
          <tr>
            <td>Select</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Switch</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>TextField</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>ToggleButton</td>
            <td>in process</td>
            <td />
          </tr>
          <tr>
            <td colspan='3'><p><b>Data Display</b></p></td>
          </tr>

          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>done</td>
            <td />
          </tr>

          <tr>
            <td>AvatarGroup</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Badge</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Chip</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Divider</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>ContentItem</td>
            <td>done</td>
            <td>this is a new component. receive the following props:
              type,subType, disabled, size, action, onClose,
              selected, display, title, content. in a next version of this documentation wil more explained
            </td>
          </tr>
          <tr>
            <td>List</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Table</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Tooltip</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Typography</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td colspan='3'><p><b>Feedback</b></p></td>
          </tr>
          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>
          <tr>
            <td>Alert</td>
            <td>Done</td>
            <td />
          </tr>
          <tr>
            <td>Backdrop</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Dialog</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td>Progress</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Skeleton</td>
            <td>done</td>
            <td>this compoenent is Span element from atomic-library-core
              with a default style. you can use any prop of Span element, but the main ones
              in this componet are height or h, with or w, borderRadius or br and background or bg.
              note: missing animation
            </td>
          </tr>
          <tr>
            <td>Snackbar</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td colspan='3'><p><b>Surfaces</b></p></td>
          </tr>
          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>
          <tr>
            <td>Accordion</td>
            <td>done</td>
            <td>in this case, only this component is required. receive the following props:
              type, subType, action, disabled, selected, display, title, content, description, onClose, size = 'md',
            </td>
          </tr>
          <tr>
            <td>Appbar</td>
            <td>not necesary</td>
            <td>instead use <code>Navbar</code></td>
          </tr>
          <tr>
            <td>Card</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td>Paper</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td colspan='3'><p><b>Navigation</b></p></td>
          </tr>
          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>
          <tr>
            <td>Navbar</td>
            <td>done</td>
            <td>this is new component</td>
          </tr>
          <tr>
            <td>BottomNavigation</td>
            <td>not necessary</td>
            <td>instead use <code>Navbar</code></td>
          </tr>
          <tr>
            <td>breadcrumbs</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Drawer</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Link</td>
            <td>done</td>
            <td />
          </tr>

          <tr>
            <td>SpeedDial</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Stepper</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td>Taps</td>
            <td>not yet</td>
            <td />
          </tr>
          <tr>
            <td colspan='3'><p><b>Layout</b></p></td>
          </tr>
          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>
          <tr>
            <td>Box</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td>Container</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td>Grid</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td>Stack</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>

            <td>ImageList</td>
            <td>not necessary</td>
            <td />
          </tr>
          <tr>
            <td colspan='3'><p><b>Utils</b></p></td>
          </tr>
          <tr>
            <th>component</th>
            <th>status</th>
            <th>description</th>
          </tr>
          <tr>
            <td>Collapse</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>getTypes</td>
            <td>done</td>
            <td />
          </tr>
          <tr>
            <td>Slider</td>
            <td>in process</td>
            <td />
          </tr>
        </table>

      </Content>
    </Layout>
  )
}
export default MuiCloneGettingStarted
