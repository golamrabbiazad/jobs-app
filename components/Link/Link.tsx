import { ReactNode } from 'react'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.9',
    },
  },
  outline: {
    variant: 'ouline',
    bg: 'white',
    color: 'primary',
  },
}

export type LinkProps = {
  children: ReactNode
  href: string
  variant?: keyof typeof variants
  icon?: JSX.Element
  shallow?: boolean
}

export function Link({
  children,
  href,
  variant = 'link',
  icon,
  shallow = false,
}: LinkProps) {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <Button leftIcon={icon} as="a" {...variants[variant]}>
        {children}
      </Button>
    </NextLink>
  )
}
