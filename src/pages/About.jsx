import { Layout } from '../components'
import { Box, Title, Text } from 'atomic-library-core'
import { AiFillGithub, AiOutlineDribbble } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

import { ImNpm } from 'react-icons/im'

import styled from 'styled-components'

const A = styled.a`
    color: #171c24;
    font-size: 1.5rem;
    display: inline-flex;
    align-items: center;
    margin: 20px 10px;
    color: ${({ c }) => c && c};
`

const About = () => {
  return (
    <Layout>
      <Box h='100%' flex flexColumn center wrap>
        <Title type='title1' size='md' m='0px auto'>
          This project is developed by <br /> <span>David Gonzalez</span>
        </Title> <br />

        <Text type='text1' m='50px'>
          <p>My Social Media</p>
          <A href='https://www.linkedin.com/in/david-gonzalez-d' c='#2867B2'>
            <BsLinkedin color='#2867B2' /> Linkedin
          </A>
          <A href='https://github.com/david-gonzalez-coder' c='#333333'>
            <AiFillGithub color='#333333' /> Github
          </A>
          <A href='https://www.npmjs.com/~david-gonzalez-coder' c='#CC3534'>
            <ImNpm color='#CC3534' />npm
          </A>
          <A href='https://dribbble.com/davidd-gonzalez-coder' c='#de1a66'>
            <AiOutlineDribbble color='#de1a66' />Dribbble
          </A>
          <A href='https://www.behance.net/davidgonzalez154' c='#1769ff'>
            <AiOutlineDribbble color='#1769ff' />Behance
          </A>

        </Text>
      </Box>
    </Layout>
  )
}
export default About
