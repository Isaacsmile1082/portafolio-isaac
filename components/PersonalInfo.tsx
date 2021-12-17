import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { SocialNetworks } from './SocialNetworks'
import { TagsTechnologies } from './TagsTechnologies'

export const PersonalInfo = () => {
  return (
    <Flex
      borderRadius="10px"
      shadow="lg"
      borderColor="gray.600"
      paddingX="1rem"
      display="flex"
      marginTop={['1rem', null, '1rem']}
      boxSizing="border-box"
    >
      <Stack
        flexGrow={'1'}
        boxSizing="border-box"
        paddingTop=".8rem"
        paddingBottom="1.2rem"
      >
        <Box textAlign="center">
          <Heading
            fontWeight="600"
            fontSize={['2xl', '3xl', '4xl']}
            paddingY="1rem"
            fontFamily="Montserrat, sans-serif"
          >
            Isaac Vazquez
          </Heading>
          <Center>
            <Divider w="50%" />
          </Center>
          <br />
          <Text
            fontSize={['lg', 'lg', '2xl']}
            fontWeight="600"
            fontFamily="Montserrat, sans-serif"
          >
            * Frontend developer * Jalisco, MX 🇲🇽
          </Text>
          <Text
            paddingTop="1.3rem"
            paddingX={['.5rem', null, '5rem', '8rem']}
            fontFamily="Montserrat, sans-serif"
          >
            About one year of experience working on web development, i love to
            learn something new everyday, i like to make projects from scratch
            and i love then challenges
          </Text>
        </Box>
        <Box paddingY="1rem">
          <TagsTechnologies />
        </Box>
        <Flex justifyContent="center" alignItems="center">
          <SocialNetworks />
        </Flex>
      </Stack>
    </Flex>
  )
}
