import type { NextPage } from 'next'
import { Container, Flex, VStack} from '@chakra-ui/react'
import Hero from '../src/sections/hero'

const Home: NextPage = () => {
  return (
  <Container maxW='container.xl' p={0}>
    <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
      <Hero />
    </Flex>
  </Container>
  )
}

export default Home
