import { Flex, IconButton, Link, Wrap, WrapItem } from '@chakra-ui/react'
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
        <Link target="_blank" href="https://www.facebook.com/angel.isaac.142/">
          <IconButton
            borderRadius="full"
            aria-label="d"
            colorScheme="facebook"
            icon={<FaFacebookF />}
          />
        </Link>
      </WrapItem>
      <WrapItem>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/angel-isaac-vazquez-valadez-14875a198/"
        >
          <IconButton
            borderRadius="full"
            aria-label="d"
            colorScheme="linkedin"
            icon={<FaLinkedinIn />}
          />
        </Link>
      </WrapItem>
      <WrapItem>
        <Link href="https://github.com/Isaacsmile1082" target="_blank">
          <IconButton
            borderRadius="full"
            aria-label="d"
            colorScheme="gray"
            icon={<FaGithub />}
          />
        </Link>
      </WrapItem>
    </Wrap>
  )
}
