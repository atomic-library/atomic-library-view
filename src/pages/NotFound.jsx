import { Layout } from '../components'
import { Box } from 'atomic-library-core'

const NotFound = () => {
  return (
    <Layout>
      <Box  atmClass='h:calc(100vh-150px) flex ai:center jc:center' >
        <h1>Page Not Found</h1>
      </Box>
    </Layout>
  )
}
export default NotFound
