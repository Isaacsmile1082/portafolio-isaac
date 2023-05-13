import { Box } from '@chakra-ui/layout'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const ExperiencePanel = () => {
  return (
    <Box>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(3, 6, 158)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(3, 6, 158)' }}
          date="2021 november - 2023 march"
        >
          <h3 className="vertical-timeline-element-title">
            Fullstack Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Estee lauder Companies
          </h4>
          <p>Frontend, Nodejs and CMS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 165, 0)' }}
          date="2021 november - 2023 march"
        >
          <h3 className="vertical-timeline-element-title">
            Middle Frontend Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Agile Engine Indeed
          </h4>
          <p>Responsive, Accesibility, Integration test, React, Unittesting</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2021 march - 2021 november"
        >
          <h3 className="vertical-timeline-element-title">
            {' '}
            Frontend developer React
          </h3>
          <h4 className="vertical-timeline-element-subtitle">nei digital</h4>
          <p>Authentication, Dashboard, Landings, Animations, Blogs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(184,184,184)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(184,184,184)' }}
          date="2021 march - 2021 november"
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle">Rionic</h4>
          <p>Login screens, Global authentication, Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  )
}
