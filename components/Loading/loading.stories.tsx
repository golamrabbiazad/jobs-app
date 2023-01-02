import { ComponentMeta, Story } from '@storybook/react'
import { Loading } from './Loading'

export default {
  title: 'component/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: Story = (props) => <Loading {...props} />

export const Default = Template.bind({})
