import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/layout'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex justify="end" paddingTop="1.3rem" position="sticky" top="20px">
      <IconButton
        aria-label="toggle theme"
        variant="outline"
        borderRadius="full"
        onClick={toggleColorMode}
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      ></IconButton>
    </Flex>
  )
}
