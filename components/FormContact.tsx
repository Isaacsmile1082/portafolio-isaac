import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Box, Heading } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import React from 'react'

export const FormContact = () => {
  return (
    <div>
      <Box
        border="1px solid"
        borderRadius="lg"
        padding="1.3rem"
        borderColor="gray.600"
        fontFamily="Montserrat"
      >
        <Heading as="h6">Contact me</Heading>
        <form>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>Well never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Your name:</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Your Message:</FormLabel>
            <Textarea placeholder="Here is a sample placeholder" />
          </FormControl>
        </form>
      </Box>
    </div>
  )
}
