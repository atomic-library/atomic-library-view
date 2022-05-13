import { Layout, CodeBlock, Result } from '../../components'
import { Box as Content, Box, Label, Input, Span } from 'atomic-library-core'
import { useState } from 'react'
import { BiBell } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import {
  Btn,
  BtnGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Range,
  Switch,
  Avatar,
  AvatarGroup,
  Badge,
  Chip,
  ContentItem,
  List,
  Alert,
  Backdrop,
  Skeleton,
  Accordion,
  Navbar,
  Link,
  Collapse,
  Slider
} from 'mui-clone'
const BACKDROPCLASSES = '`w:70vw bg:#fff br:10px of:hidden'
const BACKDROPCLASSESEND = '.comments{fs:1rem;m:0;p:1.5rem;b-t:1px/ssolid/s#EDEDED}`'
const MuiCloneQuickDemo = () => {
  const [radioValue, setRadioValue] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <Content size='md' p='50px 30px'>
        <h2>Quick Demo</h2>
        <p>This is a quick demostration of the components.</p>
        <br />
        <h3>Btn: done</h3>
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
          <Btn type='filled' subType='primary'>
            Click here
          </Btn>
          <Btn type='ghost' subType='success'>
            Click here
          </Btn>
          <Btn type='smooth' subType='danger'>
            Click here
          </Btn>
          <Btn type='text' subType='secondary'>
            Click here
          </Btn>
        </Result>
        <h3>BtnGroup: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<BtnGroup>
    <Btn>Click here</Btn>
    <Btn type='ghost' subType='success'>
        Click here
    </Btn>
    <Btn type='smooth' subType='danger'>
        Click here
    </Btn>
    <Btn type='text' subType='secondary'>
        Click here
    </Btn>
</BtnGroup>
<BtnGroup fullRounded mT='10px' type='text' subType='success' >
    <Btn>Click here</Btn>
    <Btn>Click here</Btn>
    <Btn>Click here</Btn>
</BtnGroup>
          `}
        />
        <Result>
          <BtnGroup>
            <Btn type='filled' subType='primary'>
              Click here
            </Btn>
            <Btn type='ghost' subType='success'>
              Click here
            </Btn>
            <Btn type='smooth' subType='danger'>
              Click here
            </Btn>
            <Btn type='text' subType='secondary'>
              Click here
            </Btn>
          </BtnGroup>
          <BtnGroup mT='10px' type='text' fullRounded subType='success'>
            <Btn>Click here</Btn>
            <Btn>Click here</Btn>
            <Btn>Click here</Btn>
          </BtnGroup>

        </Result>
        <h3>Checkbox: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Checkbox />
<Checkbox defaultChecked />
<br />
<Checkbox disabled />
<Checkbox disabled checked />
<br />
<Checkbox label='label' />
<Checkbox>label</Checkbox>
<br />
<Checkbox subType='success' />
<Checkbox subType='danger' />
<br />
<Checkbox colorCheck='orange' />
<Checkbox colorCheck='brown' />
<br />
<Checkbox flowRowReverse>Terms</Checkbox>
          `}
        />
        <Result>
          <Checkbox />
          <Checkbox defaultChecked />
          <br />
          <Checkbox disabled />
          <Checkbox disabled checked />
          <br />
          <Checkbox label='label' />
          <Checkbox>label</Checkbox>
          <br />
          <Checkbox subType='success' />
          <Checkbox subType='danger' />
          <br />
          <Checkbox colorCheck='orange' />
          <Checkbox colorCheck='brown' />
          <br />
          <Checkbox flowRowReverse>Terms</Checkbox>
        </Result>
        <h3>Radio: done // RadioGroup: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<RadioGroup
    value={radioValue}
    onChange={(e) => setRadioValue(e.target.value)}
    subType='success'
>
    <Radio value='label 1' label='label 1' />
    <Radio value='label 2'>label 2</Radio>
</RadioGroup>
          `}
        />
        <Result>
          <RadioGroup
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
            subType='success'
          >
            <Radio value='label 1' label='label 1' />
            <Radio value='label 2'>label 2</Radio>
          </RadioGroup>

        </Result>

        <h3>Range: in process</h3>
        <CodeBlock
          language='jsx'
          code={`
<Range /> <br />
<Range subType="success"/> <br />
<Range subType="warning"/> <br />
<Range min={-10} max={90} step={10}/> <br />
<Range min={-10} max={90} step={10} marks/>
          `}
        />
        <Result>
          <Range /> <br />
          <Range subType='success' /> <br />
          <Range subType='warning' /> <br />
          <Range min={-10} max={90} step={10} /> <br />
          <Range min={-10} max={90} step={10} marks />
        </Result>
        <h3>Switch: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Switch />
<Switch subType='danger' label='hola' />
<Switch subType='dark' flowColumnReverse>Dark</Switch>
<Switch subType='dark' flowColumnReverse defaultChecked>Dark</Switch>
          `}
        />
        <Result>
          <Switch />
          <Switch subType='danger' label='hola' />
          <Switch subType='dark' flowColumnReverse>Dark</Switch>
          <Switch subType='dark' flowColumnReverse defaultChecked>Dark</Switch>
        </Result>
        <h3>Avatar: done // AvatarGroup: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Avatar />
<Avatar>Dg</Avatar>
<Avatar src='https://exampleUrl.com/image' alt='Profile' />
<Avatar src='https://exampleUrl.com/broke' alt='Profile' />
<Avatar src='https://exampleUrl.com/broke' />
<Avatar bg='orange' h='60px' w='60px' />
<AvatarGroup max='4' childrenStyle={{ w: '50px', h: '50px' }}>
  <Avatar />
  <Avatar />
  <Avatar />
  <Avatar />
  <Avatar />
</AvatarGroup>
          `}
        />
        <Result>
          <Avatar />
          <Avatar>Dg</Avatar>
          <Avatar src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Profile' />
          <Avatar src='https://exampleUrl.com/broke' alt='Profile' />
          <Avatar src='https://exampleUrl.com/broke' />
          <Avatar bg='orange' h='60px' w='60px' />
          <AvatarGroup max='4' childrenStyle={{ w: '50px', h: '50px' }}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </Result>

        <h3>Badge: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Box flex gap='20px'>
  <Badge badgeNumber={3}>
    <BiBell fontSize='1.5rem' />
  </Badge>
  <Badge badgeNumber={3} subType='success'>
    <BiBell fontSize='1.5rem' />
  </Badge>
  <Badge badgeNumber={100}>
    <BiBell fontSize='1.5rem' />
  </Badge>
  <Badge badgeContent={<BiBell fontSize='1rem' />}>
    <FiMail fontSize='1.5rem' />
  </Badge>
  <Badge vertical='bottom' badgeContent={<BiBell fontSize='1rem' />}>
    <FiMail fontSize='1.5rem' />
  </Badge>
  <Badge horizontal='left' badgeNumber={100}>
    <BiBell fontSize='1.5rem' />
  </Badge>
  <Badge badgeContent=' ' dot>
    <BiBell fontSize='1.5rem' />
  </Badge>
</Box>
          `}
        />
        <Result>
          <Box flex gap='20px'>

            <Badge badgeNumber={3}>
              <BiBell fontSize='1.5rem' />
            </Badge>
            <Badge badgeNumber={100} subType='success'>
              <BiBell fontSize='1.5rem' />
            </Badge>
            <Badge badgeContent={<BiBell fontSize='1rem' />}>
              <FiMail fontSize='1.5rem' />
            </Badge>
            <Badge vertical='bottom' badgeContent={<BiBell fontSize='1rem' />}>
              <FiMail fontSize='1.5rem' />
            </Badge>
            <Badge horizontal='left' badgeNumber={100}>
              <BiBell fontSize='1.5rem' />
            </Badge>
            <Badge badgeContent=' ' dot>
              <BiBell fontSize='1.5rem' />
            </Badge>
          </Box>

        </Result>
        <h3>Chip: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Box flex gap='10px' center>
  <Chip>hola</Chip>
  <Chip onClose={() => {}}>hola</Chip>
  <Chip display={<Avatar h='20px' w='20px' />}>Profile</Chip>
  <Chip subType='success'>hola</Chip>
  <Chip subType='danger' type='filled' onClose={() => {}}>hola</Chip>
</Box>
          `}
        />
        <Result>
          <Box flex gap='10px' center>
            <Chip>hola</Chip>
            <Chip onClose={() => {}}>hola</Chip>
            <Chip display={<Avatar h='20px' w='20px' />}>Profile</Chip>
            <Chip subType='success'>hola</Chip>
            <Chip subType='danger' type='filled' onClose={() => {}}>hola</Chip>
          </Box>

        </Result>
        <h3>Alert: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Alert>this is a default Alert </Alert>
<Alert type='ghost'> Lorem ipsum dolor sit amet.</Alert>
<Alert type='ghost' subType='warning' fullRounded>
Lorem ipsum dolor sit amet.
</Alert>
<Alert type='smooth' subType='danger' rounded onClose={() => {}}>
  Lorem ipsum dolor sit amet.
</Alert>
          `}
        />
        <Result>
          <Alert>this is a default Alert </Alert>
          <Alert type='ghost'> Lorem ipsum dolor sit amet.</Alert>
          <Alert type='ghost' subType='warning' fullRounded>
            Lorem ipsum dolor sit amet.
          </Alert>
          <Alert type='smooth' subType='danger' rounded onClose={() => {}}>
            Lorem ipsum dolor sit amet.
          </Alert>
        </Result>
        <h3>List: done</h3>
        <h3>ContentItem: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<ContentItem
  display={<Avatar />}
  title='Anton Luk'
  content='photo taken by Anton Luk'
  rounded
  onClose={someFunction}
/>
          `}
        />
        <Result>
          <ContentItem
            display={<Avatar />}
            title='Anton Luk'
            content='photo taken by Anton Luk'
            rounded
            onClose={() => {}}
          />
        </Result>
        <h3>Backdrop: done</h3>

        <CodeBlock
          language='jsx'
          code={`
<Btn onClick={() => setOpen(true)}>Open</Btn>

<Backdrop z='1000' open={open} onClick={() => setOpen(false)}>
  {/* content of Backdrop */}
  <Box
    shading={5}
    grid
    atomicClass={
      ${BACKDROPCLASSES}
      .image{h:100%;br:10px;of:hidden}
      .image>img{h:100%;w:100%}
      .content{h:100%;d:flex;jc:space-between;fx-dit:column}
      ${BACKDROPCLASSESEND}
    }
  >
    <Box className='image'><img src='https://exampleUrl.com/' /></Box>
    <Box className='content'>
      <ContentItem
        c='#676767'
        display={<Avatar />}
        title='Anton Luk'
        content='photo taken by Anton Luk'
        bBm='1px solid #EDEDED'
        onClose={() => setOpen(false)}
      />
      <Box className='comments'>Click outside...</Box>
    </Box>
  </Box>
  {/* -------------- */}
</Backdrop>
          `}
        />
        <Result>
          <Btn onClick={() => setOpen(true)}>Open</Btn>
          <Backdrop z='1000' open={open} onClick={() => setOpen(false)}>
            {/* content of backdrop */}
            <Box
              shading={5}
              grid
              atomicClass={`
                w:70vw bg:#fff br:10px of:hidden
                .image{h:100%;br:10px;of:hidden}
                .image>img{h:100%;w:100%}
                .content{h:100%;d:flex;jc:space-between;fx-dit:column}
                .comments{fs:1rem;m:0;p:1.5rem;b-t:1px/ssolid/s#EDEDED}
              `}
            >
              <Box className='image'>
                <img src='https://images.unsplash.com/photo-1652339710187-ac698792edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt='' />
              </Box>
              <Box className='content'>
                <ContentItem
                  c='#676767'
                  display={<Avatar />}
                  title='Anton Luk'
                  content='photo taken by Anton Luk'
                  bBm='1px solid #EDEDED'
                  onClose={() => setOpen(false)}
                />
                <Box className='comments'>
                  Click outside...
                </Box>
              </Box>
            </Box>
            {/* ------------- */}
          </Backdrop>

        </Result>
        <h3>Skeleton: done</h3>
        <CodeBlock
          language='jsx'
          code={`
<Box w='300px'>
    <Box flex y='center'>
        <Skeleton h='50px' w='50px' br='25px' />
        <Box w='120px' m='0'>
            <Skeleton />
            <Skeleton w='70px' />
        </Box>
    </Box>
    <Skeleton />
    <Skeleton />
    <Skeleton h='150px' />
</Box>
          `}
        />
        <Result>
          <Box w='250px'>
            <Box flex y='center'>
              <Skeleton h='50px' w='50px' br='25px' />
              <Box w='120px' m='0'>
                <Skeleton />
                <Skeleton w='70px' />
              </Box>
            </Box>
            <Skeleton />
            <Skeleton />
            <Skeleton h='150px' />
          </Box>

        </Result>
        <h3>Accordion: done</h3>
        <h3>Navbar: done</h3>
        <h3>Link: done</h3>

        <h3>Collapse: done</h3>
        <h3>Slider: done</h3>
      </Content>
    </Layout>
  )
}
export default MuiCloneQuickDemo
