import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
