import { Flex, IconButton } from "@chakra-ui/react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaTwitter} from "@react-icons/all-files/fa/FaTwitter";

import React from "react";

export const SocialNetworks = () => {
  return (
    <Flex
      borderRadius="lg"
      marginTop="1.5rem"
      padding="1rem"
      border="1px solid"
      borderColor="gray.400"
      shadow="sm"
      justifyContent="space-around"
    >
      <IconButton
        borderRadius="full"
        aria-label="d"
        colorScheme="facebook"
        icon={<FaFacebookF />}
      />
      <IconButton
        borderRadius="full"
        aria-label="d"
        colorScheme="linkedin"
        icon={<FaLinkedinIn />}
      />
      <IconButton
        borderRadius="full"
        aria-label="d"
        colorScheme="whatsapp"
        icon={<FaWhatsapp />}
      />
    <IconButton
        borderRadius="full"
        aria-label="d"
        colorScheme="twitter"
        icon={<FaTwitter/>}
      />
    </Flex>
  );
};
