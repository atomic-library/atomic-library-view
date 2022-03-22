import { AppBar } from '../components'
import { Box, Title } from 'atomic-library-core'
import atomic from '../assets/atomic.svg'

const Landing = () => {
  return (
    <>
      <AppBar />
      <Box
        h='40vh' bg='#fff' m='80px 0 0 0' flex center myStyle={{
          backgroundImage: `url(${atomic})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%'
        }}
      >
        <h1 className='main-title'>Atomic Library</h1>
      </Box>
      <Box h='calc(60vh - 80px)' bg='rgb(32, 35, 41)' flex center>
        <Title h2 c='#fff' size='md'>Want amazing components, functions, elements and other useful
          files, even css? then this is the place
        </Title>
      </Box>
    </>
  )
}
export default Landing
