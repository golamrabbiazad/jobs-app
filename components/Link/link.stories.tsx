import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Link } from './Link'

export default {
  title: 'components/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (props) => <Link {...props} />

export const Default = Template.bind({})

Default.args = {
  href: '/',
  children: 'Click Me',
}
