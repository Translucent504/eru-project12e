import React, { useRef } from "react"
import Lolly from "../components/Lolly"

interface TemplateProps {
  pageContext: {
    data: {
      topColor: string
      midColor: string
      botColor: string
      from: string
      to: string
      lollyPath: string
      message: string
    }
  }
}

const LollyTemplate = ({ pageContext }: TemplateProps) => {
  const lolly = pageContext.data
  const shareRef = useRef(null)
  return (
    <div className="freezer-container">
      <Lolly
        fillLollyTop={lolly.topColor}
        fillLollyMiddle={lolly.midColor}
        fillLollyBottom={lolly.topColor}
      />
      <div>
        <h1>
          {lolly.from} Made this lolly for {lolly.to}
        </h1>
        <textarea
          className="message-from-freezer"
          disabled
          name="message"
          id=""
          cols={30}
          rows={10}
          value={lolly.message}
        ></textarea>
        <h2>Share it with:</h2>
        <input type="text" value={window.location.href} ref={shareRef} />{" "}
        <button onClick={() => {
          const thing = shareRef.current
          thing.select()
          document.execCommand("copy")
        }}>Copy</button>
      </div>
    </div>
  )
}

export default LollyTemplate
