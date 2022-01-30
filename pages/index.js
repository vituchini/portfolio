import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'

const Index = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'} p={3} mb={6} align={'center'}>
        Hello, I&apos;m a full-stack developer based in Ukraine!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-tile'}>
            Victor Petrovych
          </Heading>
          <p>Fullstack Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Index
