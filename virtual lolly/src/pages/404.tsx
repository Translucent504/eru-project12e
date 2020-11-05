import { gql, useQuery } from "@apollo/client"
import React from "react"
import LollyTemplate from "../templates/LollyTemplate"
import { PageProps } from "gatsby"

const GET_LOLLY = gql`
  query getLolly($lollyPath: String!) {
    getLolly(lollyPath: $lollyPath) {
      to
      from
      message
      topColor
      midColor
      botColor
      lollyPath
    }
  }
`

const NotFound = ({ location } : PageProps) => {
  const lollyPath = location.pathname.slice(1)
  const { loading, data } = useQuery(GET_LOLLY, {
    variables: { lollyPath },
  })
  return (
    <>
      {data && <LollyTemplate pageContext={{ data: data.getLolly }} />}
      {loading && (
        <h1>
          Searching for Your lolly with id: {lollyPath} in the freezer, Please
          wait.
        </h1>
      )}
      {!loading && !data && (
        <h1>
          Woops! Can't find your lolly, maybe you wrote the wrong id? or are you
          just playing around with the url.
        </h1>
      )}
    </>
  )
}
export default NotFound