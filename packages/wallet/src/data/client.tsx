import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'
import { PropsWithChildren } from 'react'

const httpLink = createHttpLink({
  uri: `${process.env.UNISWAP_API_BASE_URL}/v1/graphql`,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.UNISWAP_API_KEY ?? '',
  },
})

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
})

export function GraphqlProvider({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}