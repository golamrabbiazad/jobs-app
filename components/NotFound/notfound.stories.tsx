import { ComponentMeta, Story } from '@storybook/react'

import { NotFound } from './NotFound'

export default {
  title: 'components/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>

const Template: Story = (props) => <NotFound {...props} />

export const Default = Template.bind({})
