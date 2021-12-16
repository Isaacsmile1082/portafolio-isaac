import { Box, Divider, Flex, Text, Wrap } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'
import { education, EducationProps } from '../../info/Education'
import { Heading, Stack } from '@chakra-ui/react'

export const EducationPanel = () => {
  return (
    <Wrap spacing={4} justify="space-around">
      {education.map(props => (
        <EducationCard {...props} key={props.name} />
      ))}
    </Wrap>
  )
}

const EducationCard = ({ name, title, period, image_url }: EducationProps) => {
  return (
    <Flex
      justify="center"
      backgroundColor="gray.700"
      borderRadius="lg"
      maxW="40%"
    >
      <Box
        display="flex"
        alignItems="center"
        width="40%"
        backgroundColor="gray.500"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={image_url} padding={ name == 'UDG' ? 7 : 0 }  objectFit="cover"/>
      </Box>
      <Stack alignItems="center" justify="center" paddingX="1rem">
        <Heading as="h4" size="md" fontFamily="montserrat">
          {name}
        </Heading>
        <Text fontSize="sm" textAlign="center" fontFamily="montserrat">{title}</Text>
        <Text fontSize="md" fontFamily="montserrat">{period}</Text>
      </Stack>
    </Flex>
  )
}
