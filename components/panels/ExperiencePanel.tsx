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
          <p>
            Frontend developer React at <strong>AgileEng</strong>
          </p>
        </ItemTimeline>
        <ItemTimeline opositeContent={() => <h1>March 2021 </h1>} bottomLine>
          <p>
            Frontend developer React at <strong> nei digital</strong>
          </p>
        </ItemTimeline>
        <ItemTimeline opositeContent={() => <h1>Octuber , 2020</h1>} bottomLine>
          <p>
            Frontend developer React native<strong> Rionic</strong>
          </p>
        </ItemTimeline>
      </Timeline>
    </Box>
  )
}
