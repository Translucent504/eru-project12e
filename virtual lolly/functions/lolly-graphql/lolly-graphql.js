const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
require("dotenv").config()
const shortid = require("shortid")
q = faunadb.query

const typeDefs = gql`
  type Query {
    hello: String
    getLolly(lollyPath: String!): Lolly
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
    getLolly: async (_, args) => {
      const lollyPath = args.lollyPath
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET,
      })
      console.log("getting data for", lollyPath)
      const result = await client.query(
        q.Get(q.Match(q.Index("lolly_by_path"), lollyPath))
      )
      if(result.data){
        return result.data
      }
      return null
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET,
      })
      const id = shortid.generate()
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args,
        })
      )
      console.log(result)
      return result.data
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
