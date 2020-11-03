const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
require('dotenv').config()
const shortid = require('shortid')
q = faundadb.query

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    to: String!
    from: String!
    message: String!
    topColor: String!
    midColor: String!
    botColor: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      to: String!
      from: String!
      message: String!
      topColor: String!
      midColor: String!
      botColor: String!
    ): Lolly
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return "Hello, world!"
    },
  },
  Mutation: {
    createLolly: (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET,
      })
      const id = shortid.generate();
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection('lollies'), {
          data: args
        })
      )
      console.log(result)
      return result.data
    }

  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
