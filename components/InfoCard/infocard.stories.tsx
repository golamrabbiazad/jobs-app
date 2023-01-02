import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InfoCard } from './InfoCard'

export default {
  title: 'components/InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>

const Template: ComponentStory<typeof InfoCard> = (props) => (
  <InfoCard {...props} />
)

export const Default = Template.bind({})

Default.args = {
  label: 'Full Name',
  value: 'John Doe',
}
