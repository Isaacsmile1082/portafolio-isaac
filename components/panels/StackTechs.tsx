import {
  ComponentWithAs,
  IconProps,
  Tag,
  TagLabel,
  TagRightIcon,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { stacks } from '../../info/Stacks'

type typeVariant = 'outline' | 'subtle'

export const StackTechs = () => {
  return (
    <Wrap wrap="wrap" spacing="30px" align="center" justify="center">
      {stacks.map(props => (
        <TagTech key="name" {...props} />
      ))}
    </Wrap>
  )
}

interface TagTechProps {
  name: string
  icon: IconType
  colorScheme: string
}

const TagTech = ({ name, icon, colorScheme }: TagTechProps) => {
  const [variant, setVariant] = useState<typeVariant>('outline')

  const handleHoverVariant = React.useCallback(
    () => setVariant(state => (state === 'outline' ? 'subtle' : 'outline')),
    []
  )

  return (
    <WrapItem key={name}>
      <Tag
        size="lg"
        borderRadius="full"
        colorScheme={colorScheme}
        variant={variant}
        onMouseEnter={handleHoverVariant}
        onMouseLeave={handleHoverVariant}
        transition="all ease-in .1s"
        cursor="pointer"
      >
        <TagLabel fontSize={['md']}>{name}</TagLabel>
        <TagRightIcon as={icon} sx={{ width: ['20px'], height: ['20px'] }} />
      </Tag>
    </WrapItem>
  )
}
