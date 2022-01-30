import React from 'react'
import Layout from '../components/layouts/Main'
import { ChakraProvider } from '@chakra-ui/react'
const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router} />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default MyApp
