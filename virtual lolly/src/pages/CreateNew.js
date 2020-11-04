import { gql, useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import React, { useState } from "react"
import { useRef } from "react"
import Lolly from "../components/Lolly"



const CREATE_LOLLY = gql`
  mutation createLolly(
    $to: String!
    $from: String!
    $message: String!
    $topColor: String!
    $midColor: String!
    $botColor: String!
  ) {
    createLolly(
      to: $to
      from: $from
      message: $message
      topColor: $topColor
      midColor: $midColor
      botColor: $botColor
    ) {
      message
      lollyPath
    }
  }
`

const CreateNew = () => {
  const [topColor, setTopColor] = useState("#d52358")
  const [midColor, setMidColor] = useState("#e95946")
  const [botColor, setBotColor] = useState("#deaa43")

  const toRef = useRef(null)
  const fromRef = useRef(null)
  const messageRef = useRef(null)

  // const { loading, error, data } = useQuery(GET_DATA)
  const [createLolly] = useMutation(CREATE_LOLLY)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      to: toRef.current.value,
      from: fromRef.current.value,
      message: messageRef.current.value,
      topColor,
      midColor,
      botColor,
    }
    const result = await createLolly({ variables: formData })
    navigate(`/${result.data.createLolly.lollyPath}`)
    console.log(result)
    toRef.current.value = ''
    fromRef.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <div>
      <h1>Create New Lolly</h1>
      <main className="new-lolly-container">
        <Lolly
          fillLollyTop={topColor}
          fillLollyMiddle={midColor}
          fillLollyBottom={botColor}
        />
        <div className="color-picker">
          <input
            onChange={e => setTopColor(e.target.value)}
            type="color"
            name="top"
            id="top"
            value={topColor}
          />
          <input
            onChange={e => setMidColor(e.target.value)}
            type="color"
            name="mid"
            id="mid"
            value={midColor}
          />
          <input
            onChange={e => setBotColor(e.target.value)}
            type="color"
            name="bot"
            id="bot"
            value={botColor}
          />
        </div>
        <form onSubmit={handleSubmit} className="lolly-info-form">
          <label >
            To: <input  ref={toRef} type="text" />{" "}
          </label>
          <label htmlFor="message">Message:</label>
          <textarea id="message" ref={messageRef} rows="15" columns="30" />
          <label>
            From: <input ref={fromRef} type="text" />{" "}
          </label>
          <input type="submit" value="Create" />
        </form>
      </main>
    </div>
  )
}

export default CreateNew
