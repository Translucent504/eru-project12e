import React from "react"
import LollyFormik from "./LollyFormik"

export default {
  title: "Components/LollyFormik",
  component: LollyFormik,
}

const Template = args => <LollyFormik {...args} />

export const BasicForm = Template.bind({})
BasicForm.argTypes = { onSubmit: "onSubmit" }
