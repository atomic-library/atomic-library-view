import { Box } from 'atomic-library-core'

const Result = ({ children, ...rest }) => {
  return (
    <Box rounded p='1rem' b='1px solid #ccc' {...rest}>
      {children}
    </Box>
  )
}
export default Result
