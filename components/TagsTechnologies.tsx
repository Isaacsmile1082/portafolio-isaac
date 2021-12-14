import { Box, Center, Tag, TagLabel, Wrap, WrapItem } from '@chakra-ui/react'
import { technologies } from '../info/technologies'
import React from 'react'

export const TagsTechnologies = () => {
  return (
    <Box paddingY=".7rem">
      <Center>
        <Wrap spacing={4} align="center">
          {technologies.map(technologie => (
            <WrapItem key={technologie.title}>
              <Center>
                <Tag
                  size={'md'}
                  variant="outline"
                  fontWeight="600"
                  borderRadius="full"
                >
                  <TagLabel>
                    {technologie.title} {technologie.emoji}
                  </TagLabel>
                </Tag>
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </Box>
  )
}
