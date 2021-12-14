import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

export const Footer = () => {
  return (
    <Box
      backgroundColor="gray.900"
      paddingY="2rem"
      borderRadius="lg"
      textAlign="center"
    >
      <Text fontWeight="600" color="white">
        Made with love by @IsaacSmile in 2021
      </Text>
    </Box>
  )
}
