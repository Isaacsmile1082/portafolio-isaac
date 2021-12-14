import { Flex, IconButton, Wrap, WrapItem } from '@chakra-ui/react'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

import React from 'react'

export const SocialNetworks = () => {
  return (
    <Wrap
      borderRadius="lg"
      marginTop="1.5rem"
      borderColor="gray.400"
      justifyContent="start"
      spacing="25px"
    >
      <WrapItem>
        <IconButton
          borderRadius="full"
          aria-label="d"
          colorScheme="facebook"
          icon={<FaFacebookF />}
        />
      </WrapItem>
      <WrapItem>
        <IconButton
          borderRadius="full"
          aria-label="d"
          colorScheme="linkedin"
          icon={<FaLinkedinIn />}
        />
      </WrapItem>
      <WrapItem>
        <IconButton
          borderRadius="full"
          aria-label="d"
          colorScheme="gray"
          icon={<FaGithub />}
        />
      </WrapItem>
    </Wrap>
  )
}
