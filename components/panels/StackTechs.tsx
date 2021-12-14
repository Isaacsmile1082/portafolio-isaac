import { Tag, TagLabel, TagRightIcon, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { stacks } from '../../info/Stacks'

export const StackTechs = () => {
  return (
    <Wrap wrap="wrap" spacing="30px" align="center" justify="center">
      {stacks.map(({ name, icon, colorScheme }) => (
        <WrapItem key={name}>
          <Tag
            size="lg"
            borderRadius="full"
            colorScheme={colorScheme}
            padding=".8rem"
            variant="outline"
          >
            <TagLabel fontSize="xl">{name}</TagLabel>
            <TagRightIcon as={icon} style={{ width: '30px', height: '30px' }} />
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  )
}
