import React from 'react'
import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { InputField } from './InputField'

export default {
  title: 'components/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (props) => (
  <InputField {...props} />
)

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
}

export const WithError = Template.bind({})

WithError.args = {
  label: 'Name',
  error: {
    type: 'required',
    message: 'Name is required!',
  },
}
