import { PlusSquareIcon } from '@chakra-ui/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'Click Me',
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  children: 'Click Me',
  icon: <PlusSquareIcon />,
}
