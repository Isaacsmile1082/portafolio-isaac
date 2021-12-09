import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TagsTechnologies } from "./TagsTechnologies";

export const PersonalInfo = () => {
  return (
    <Flex
    border="1px solid"
    borderRadius="10px"
    shadow="sm"
    borderColor="gray.400"
    paddingX="1rem"
    display="flex"
    marginTop={["1rem", null, "2rem"]}
    boxSizing="border-box"
  >
    <Stack
      flexGrow={"1"}
      boxSizing="border-box"
      paddingTop=".8rem"
      paddingBottom="1.3rem"
    >
      <Box textAlign="center">
        <Heading
          fontWeight="600"
          fontSize={["2xl", "3xl", "5xl"]}
          paddingY=".7rem"
          fontFamily="Montserrat, sans-serif"
        >
          Isaac Vazquez
        </Heading>
        <hr />
        <br />
        <Text
          fontSize={["sm", "lg", "xl"]}
          fontWeight="600"
          fontFamily="Montserrat, sans-serif"
        >
          * Frontend developer * Jalisco, MX 🇲🇽
        </Text>
        <Text paddingTop="1rem">
          Brindando soluciones tecnologicas en frontend y backend
        </Text>
      </Box>
      <TagsTechnologies />
    </Stack>
  </Flex>
  )
};
