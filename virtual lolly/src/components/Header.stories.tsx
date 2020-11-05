import Header from "./Header"
import React from 'react'


export default {
  title: "Components/Header",
  component: Header,
}

const Template = args => <Header {...args} />

export const DefaultHeader = Template.bind({})
