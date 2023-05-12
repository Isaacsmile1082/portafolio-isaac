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
      sx={{ marginTop: '2rem' }}
      padding=".5rem"
      marginY="5rem"
      isFitted
    >
      <TabList>
        <Tab fontWeight="700">Stack</Tab>
      </TabList>

      <TabPanels>
        {panels.map(({ Panel }, index) => (
          <TabPanel key={index}>
            <Fade in={tabIndex == index}>{<Panel />}</Fade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
