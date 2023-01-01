import { MouseEventHandler, ReactNode } from 'react'
import { Button as ChackraButton } from '@chakra-ui/react'

const variants = {
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.9',
    },
  },
  outline: {
    variant: 'outline',
    bg: 'white',
    color: 'primary',
  },
}

export type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: keyof typeof variants
  isLoading?: boolean
  isDisabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: JSX.Element
}

export function Button({
  children,
  type = 'button',
  variant = 'solid',
  isLoading,
  isDisabled,
  onClick,
  icon,
  ...props
}: ButtonProps) {
  return (
    <ChackraButton
      type={type}
      leftIcon={icon}
      {...variants[variant]}
      {...props}
    >
      {children}
    </ChackraButton>
  )
}
