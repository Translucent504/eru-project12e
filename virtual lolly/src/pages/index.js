import { navigate } from "gatsby"
import React from "react"
import Header from "../components/Header"
import Lolly from "../components/Lolly"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="lolly-display">
        <Lolly
          fillLollyBottom="red"
          fillLollyMiddle="blue"
          fillLollyTop="pink"
        />
        <Lolly
          fillLollyBottom="pink"
          fillLollyMiddle="lime"
          fillLollyTop="red"
        />
        <Lolly
          fillLollyBottom="yellow"
          fillLollyMiddle="lightblue"
          fillLollyTop="blue"
        />
        <Lolly
          fillLollyBottom="blue"
          fillLollyMiddle="lightblue"
          fillLollyTop="green"
        />
        <Lolly
          fillLollyBottom="yellow"
          fillLollyMiddle="yellow"
          fillLollyTop="yellow"
        />
      </main>
      <button onClick={() => navigate('/CreateNew')}>Create Lolly!</button>
    </div>
  )
}
