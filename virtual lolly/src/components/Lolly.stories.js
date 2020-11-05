import React from "react"
import Lolly from "./Lolly"

export default {
  title: "Components/Lolly",
  component: Lolly,
  argTypes: {
    fillLollyTop: { control: 'color' },
    fillLollyMiddle: { control: 'color' },
    fillLollyBottom: { control: 'color' },
  },
  
}

const Template = args => <Lolly {...args} />

export const RedLolly = Template.bind({})
RedLolly.args = {
  fillLollyTop: "red",
  fillLollyMiddle: "red",
  fillLollyBottom: "red",
}

export const BlueLolly = Template.bind({})
BlueLolly.args = {
  fillLollyTop: "blue",
  fillLollyMiddle: "blue",
  fillLollyBottom: "blue",
}
