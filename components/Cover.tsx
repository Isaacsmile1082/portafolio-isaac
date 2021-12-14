import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { useColorMode, useTheme } from "@chakra-ui/system";
import React from "react";

export const Cover = () => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Box
      bgImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80"
      backgroundSize="cover"
      flex="row"
      alignItems="flex-end"
      justifyContent="center"
      width="100vw"
      display="flex"
    >
      <Box
        sx={{
          maxWidth: ["100px", "130px", "150px", "200px"],
          height: "auto",
          border: `
          5px solid 
          ${colorMode === "light" ? colors.white : colors.gray[800]}`,
          borderRadius: "50%",
          position: "relative",
          top: ["1.3rem", null, "2rem"],
        }}
      >
        <Image
          alt="Picture profile"
          src={
            "https://res.cloudinary.com/nei/image/upload/v1633922157/udg/programacion%20para%20internet/portafolio/perfil_adc1qg.jpg"
          }
          borderRadius={["50%"]}
        />
      </Box>
    </Box>
  );
};
