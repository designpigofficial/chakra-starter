import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Navbar from '../src/components/Navbar'

const colors = {
  brand: {
    primaryColor: 'red',
    secondaryColor: 'blue',
    tertiaryColor: 'yellow',
    light: '#eaeaea',
    dark: '#303030',
    white: '#ffffff',
    black: '#000000',
  },
}

const theme = extendTheme ({ colors })

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Navbar  />
    <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
