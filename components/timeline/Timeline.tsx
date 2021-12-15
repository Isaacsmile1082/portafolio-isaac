import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'

interface TimeLineProps {
  children: React.ReactNode
}

export const Timeline: React.FC<TimeLineProps> = ({ children }) => {
  return (
    <Stack justify="center" align="center">
      {children}
    </Stack>
  )
}
