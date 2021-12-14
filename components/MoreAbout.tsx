import { Tab, TabList, TabPanel, TabPanels, Tabs, Fade } from '@chakra-ui/react'
import React from 'react'

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
        <Tab fontWeight="900">Portafolio</Tab>
        <Tab fontWeight="900">Curriculum</Tab>
      </TabList>

      <TabPanels>
        {[0, 1, 2].map(el => (
          <TabPanel key={el}>
            <Fade in={tabIndex == el}>
              <p>{el}</p>
            </Fade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
