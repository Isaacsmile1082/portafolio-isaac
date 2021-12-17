import { Box, Flex, Text, Wrap } from '@chakra-ui/layout'
import { Image, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { education, EducationProps } from '../info/Education'
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
  const color = useColorMode()

  return (
    <Flex
      justify="center"
      backgroundColor={color?.colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius="lg"
      maxW="40%"
      shadow="md"
      border="1px solid"
    >
      <Box
        display="flex"
        alignItems="center"
        width="40%"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={image_url}
          padding={name == 'UDG' ? 7 : 0}
          objectFit="cover"
          alt="Universidad de gudalajara"
        />
      </Box>
      <Stack alignItems="center" justify="center" paddingX="1rem">
        <Heading as="h4" size="md" fontFamily="montserrat">
          {name}
        </Heading>
        <Text fontSize="sm" textAlign="center" fontFamily="montserrat">
          {title}
        </Text>
        <Text fontSize="md" fontFamily="montserrat">
          {period}
        </Text>
      </Stack>
    </Flex>
  )
}
