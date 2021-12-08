import { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import BaseContext from 'templates/Base/baseContext'
import { useApollo, initializeApollo } from 'utils/apollo'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { QueryFooter } from 'graphql/generated/QueryFooter'
import { QUERY_FOOTER } from 'graphql/queries/base'
import { FooterProps } from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  const [footer, setFooter] = useState<FooterProps>()
  const client = useApollo(pageProps.initialApolloState)

  const context = { footer }

  useEffect(() => {
    const fetchData = async () => {
      const apolloClient = initializeApollo()
      const footerResp = await apolloClient.query<QueryFooter>({
        query: QUERY_FOOTER
      })

      if (footerResp.data.footer) {
        setFooter(footerResp.data.footer as FooterProps)
      }
    }
    fetchData()
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BaseContext.Provider value={context}>
          <Head>
            <title>Athleta</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="description" content="Athleta Management" />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </BaseContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
