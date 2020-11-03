import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import fetch from "cross-fetch"

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "/.netlify/functions/lolly-graphql",
    fetch,
  }),
})
