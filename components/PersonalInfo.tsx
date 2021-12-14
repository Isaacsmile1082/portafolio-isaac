import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { SocialNetworks } from './SocialNetworks'
import { TagsTechnologies } from './TagsTechnologies'

export const PersonalInfo = () => {
  return (
    <Flex
      border="1px solid"
      borderRadius="10px"
      shadow="sm"
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
            fontSize={['2xl', '3xl', '5xl']}
            paddingY="1rem"
            fontFamily="Montserrat, sans-serif"
          >
            Isaac Vazquez
          </Heading>

          <Divider />
          <br />
          <Text
            fontSize={['sm', 'lg', '2xl']}
            fontWeight="600"
            fontFamily="Montserrat, sans-serif"
          >
            * Frontend developer * Jalisco, MX 🇲🇽
          </Text>
          <Text paddingTop="1.3rem" fontFamily="Montserrat, sans-serif">
            About one year of experience working on web development
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
