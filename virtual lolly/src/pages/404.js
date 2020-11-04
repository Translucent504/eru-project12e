import { gql, useQuery } from "@apollo/client"
import React from "react"
import { useEffect } from "react"
import LollyTemplate from "../templates/LollyTemplate"

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

const NotFound = ({ location }) => {
  const lollyPath = location.pathname.slice(1)
  const { loading, error, data } = useQuery(GET_LOLLY, {
    variables: { lollyPath },
  })
  useEffect(() => {
    console.log(loading, data)
  }, [data, loading])
  return (
    <>
      {data && <LollyTemplate pageContext={{data: data.getLolly}}/>}
      {loading && (
        <h1>
          Your lolly for {lollyPath} is currently freezing or might not even exist!, check back in 2 to 3
          minutes.
        </h1>
      )}
    </>
  )
}
export default NotFound
