import React, { useState } from "react"
import { useRef } from "react"
import Lolly from "../components/Lolly"

const CreateNew = () => {
  const [topColor, setTopColor] = useState("#d52358")
  const [midColor, setMidColor] = useState("#e95946")
  const [botColor, setBotColor] = useState("#deaa43")

  const toRef = useRef(null)
  const fromRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      to: toRef.current.value,
      from: fromRef.current.value,
      message: messageRef.current.value,
      lolly: {
        topColor,
        midColor,
        botColor
      }
    }
    console.log(formData)
    e.target.reset()
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
          <label>
            To: <input ref={toRef} type="text" />{" "}
          </label>
          <label>Message:</label>
          <textarea ref={messageRef} rows="15" columns="30" />
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
