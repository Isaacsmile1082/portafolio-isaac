import { Box } from '@chakra-ui/layout'
import React from 'react'
import { ItemTimeline } from '../timeline/ItemTimeline'
import { Timeline } from '../timeline/Timeline'

export const ExperiencePanel = () => {
  return (
    <Box>
      <Timeline>
        <ItemTimeline
          opositeContent={() => <h1>November, 2021 </h1>}
          bottomLine
        >
          Frontend developer React
        </ItemTimeline>
        <ItemTimeline
          opositeContent={() => <h1>November, 2021 </h1>}
          bottomLine
        >
          Frontend developer React
        </ItemTimeline>
        <ItemTimeline
          opositeContent={() => <h1>March, 2021 - November 2021 </h1>}
          bottomLine
        >
          Frontend developer React
        </ItemTimeline>
      </Timeline>
    </Box>
  )
}
