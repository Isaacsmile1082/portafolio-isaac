import { Tab, TabList, TabPanel, TabPanels, Tabs, Fade } from '@chakra-ui/react'

import React from 'react'

import { panels } from './panels/index'

export const MoreAbout = () => {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  console.log(tabIndex)

  return (
    <Tabs
      index={tabIndex}
      onChange={handleTabsChange}
      isFitted
      sx={{ marginTop: '2rem' }}
      padding=".5rem"
    >
      <TabList>
        <Tab fontWeight="900">Stack</Tab>
        <Tab fontWeight="900">Repositories</Tab>
        <Tab fontWeight="900">Blog</Tab>
        <Tab fontWeight="900">Experience</Tab>
        <Tab fontWeight="900">Education</Tab>
      </TabList>

      <TabPanels>
        {panels.map(({ index, Panel }) => (
          <TabPanel key={index}>
            <Fade in={tabIndex == index}>{<Panel />}</Fade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
