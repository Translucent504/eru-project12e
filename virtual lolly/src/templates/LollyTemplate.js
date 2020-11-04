import React from "react"
import Lolly from "../components/Lolly"

const LollyTemplate = ({ pageContext }) => {
  const lolly = pageContext.data
  return (
    <div class="freezer-container">
      <Lolly
        fillLollyTop={lolly.topColor}
        fillLollyMiddle={lolly.midColor}
        fillLollyBottom={lolly.topColor}
      />
      <div>
        <h1>
          {lolly.from} Made this lolly for {lolly.to}
        </h1>
        <textarea className="message-from-freezer" disabled name="message" id="" cols="30" rows="10" value={lolly.message}>
        </textarea>
      </div>
    </div>
  )
}

export default LollyTemplate
