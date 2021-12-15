import { Box, Wrap, Flex, FlexProps, Divider, Stack } from '@chakra-ui/layout'
import React from 'react'

interface ItemTimeLineProps extends FlexProps {
  opositeContent?: () => JSX.Element
  upperLine?: boolean
  bottomLine?: boolean
}

export const ItemTimeline: React.FC<ItemTimeLineProps> = ({
  children,
  opositeContent = null,
  upperLine,
  bottomLine
}) => {
  return (
    <Stack direction="row" justify="center" align="center">
      {opositeContent ? <Box width="10rem">{opositeContent()}</Box> : null}
      <Stack direction="row" flexGrow={1}>
        <Stack direction="column" justify="end" align="center" width="100px">
          {upperLine && (
            <Divider
              orientation="vertical"
              sx={{ borderLeftWidth: '2px' }}
              height="40px"
              borderColor="white"
            />
          )}
          <Box>
            <Box // circle
              width={['10px', null, null, '15px']}
              height={['10px', null, null, '15px']}
              border="2px solid"
              borderRadius="full"
              flexGrow="1"
            ></Box>
          </Box>
          {bottomLine && (
            <Divider
              orientation="vertical"
              sx={{ borderLeftWidth: '2px' }}
              height="40px"
              borderColor="white"
            />
          )}
        </Stack>
        <Box>{children}</Box>
      </Stack>
    </Stack>
  )
}
