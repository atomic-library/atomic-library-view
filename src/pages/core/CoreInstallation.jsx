import { CodeBlock, Layout } from '../../components'
import { Box, Box as Content, Box as Wrapper, Main, Aside, Header, Footer, Title } from 'atomic-library-core'

const CoreInstallation = () => {
  return (
    <Layout>
      <Content size='lg' p='50px 30px'>
        <Title type='title2' m='auto'>  Atomic-library-core </Title> <br /> <br />
        <Title h2 c='#171c24'>Installation </Title>
        <Title h3>npm</Title>
        <CodeBlock
          language='bash'
          code=' npm install atomic-library-core --save'
        />
        <Title h3>yarn</Title>
        <CodeBlock
          language='bash'
          code=' yarn add atomic-library-core'
        />
        <br /> <br />

        <Title h2 c='#171c24'> Quick Example </Title> <br />
        <p>Here's a quick example to get you started</p>
        <br />
        <CodeBlock
          language='jsx'
          code={`
import {
    Box as Wrapper,
    Box as Header,
    Box as Main,
    Box as Aside,
    Box as Footer,
    Box
} from 'my-library-core'
                
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
        <Header h='80px' bg="#ccc" span="header"/>
        <Main main flex flexWrap span="main" gap="10px">
            <Box  h='200px' bg="#909A9B" />
            <Box  h='200px' bg="#909A9B" />
            <Box  h='200px' bg="#909A9B" />
        </Main>
        <Aside  h='400px' bg="#CACACA" m="0" span="aside"/>
        <Footer h='80px' bg="#ccc" span="footer"/>
    </Wrapper>
    )
}
                
export default App
            `}
        />
        <br />
        <p>Result:</p>
        <br />
        <Box m='15px 0'>
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
        </Box>
      </Content>
    </Layout>
  )
}
export default CoreInstallation
