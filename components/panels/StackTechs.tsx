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
            variant="outline"
          >
            <TagLabel fontSize={['md']}>{name}</TagLabel>
            <TagRightIcon
              as={icon}
              sx={{ width: ['20px'], height: ['20px'] }}
            />
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  )
}
