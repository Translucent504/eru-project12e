const path = require("path")
exports.createPages = async ({ actions }) => {
  const faunadb = require("faunadb")
  // require("dotenv").config()
  q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET,
  })

  const result = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("lollies"))),
      q.Lambda("lollyref", q.Get(q.Var("lollyref")))
    )
  )

  const { createPage } = actions

  result.data.forEach(lolly => {
    const data = lolly.data
    createPage({
      path: `/${data.lollyPath}/`,
      component: path.resolve(`./src/templates/LollyTemplate.js`),
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        data,
      },
    })
  })
}
