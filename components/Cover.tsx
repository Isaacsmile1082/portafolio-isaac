import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/system'
import React from 'react'

export const Cover = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bgImage="https://res.cloudinary.com/nei/image/upload/v1639718715/4K-Code-Programming-Text-Wallpaper-3840x2160_a3ste5.jpg"
      backgroundSize="cover"
      flex="row"
      alignItems="flex-end"
      justifyContent="center"
      display="flex"
      backgroundAttachment="fixed"
    >
      <Box
        sx={{
          maxWidth: ['150px', '100px', '200px', '280px'],
          height: 'auto',
          position: 'relative',
          top: ['1.3rem', null, '2rem']
        }}
        display="flex"
        justifyContent="center"
      >
        <Image
          alt="Picture profile"
          src={
            'https://res.cloudinary.com/nei/image/upload/v1633922157/udg/programacion%20para%20internet/portafolio/perfil_adc1qg.jpg'
          }
          borderRadius="full"
          border="5px solid"
          borderColor={colorMode === 'dark' ? 'gray.800' : 'white'}
        />
      </Box>
    </Box>
  )
}
