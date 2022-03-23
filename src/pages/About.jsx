import { Layout } from '../components'
import { Box, Nav } from 'atomic-library-core'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

import { ImNpm } from 'react-icons/im'
import cardEffect001 from '../assets/cardEffect001'
import styled from 'styled-components'

const effect = cardEffect001()
const A = styled.a`
  color: #171c24;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  margin: 0px 10px;
  color: ${({ c }) => c && c};
`
const Card = ({ name, linkedin = '#', github = '#', npm = '#' }) => {
  return (
    <Box
      flex
      flexWrap
      jc='space-between'
      y='center'
      rounded
      insertStyle={effect}
      p='1rem'
      bg='#f2f2f2'
    >
      <p>{name}</p>
      <Nav flex flexWrap y='center'>
        <A href={linkedin} c='#2867B2'>
          <BsLinkedin color='#2867B2' /> Linkedin
        </A>
        <A href={github} c='#333333'>
          <AiFillGithub color='#333333' /> Github
        </A>
        <A href={npm} c='#CC3534'>
          <ImNpm color='#CC3534' />npm
        </A>
      </Nav>
    </Box>
  )
}
const About = () => {
  return (
    <Layout>
      <h2>This project is developed by:</h2>
      <Box flex flexWrap size='md' gap='1rem' mT='2rem'>
        <Card
          name='David Gonzalez'
          linkedin='https://www.linkedin.com/in/david-gonzalez-d'
          github='https://github.com/david-gonzalez-coder'
          npm='https://www.npmjs.com/~david-gonzalez-coder'
        />
      </Box>
    </Layout>
  )
}
export default About
