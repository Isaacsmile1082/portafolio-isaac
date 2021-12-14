import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Fade,
  WrapItem,
  Tag,
  TagRightIcon,
  TagLabel,
  Wrap,
  Stack,
  Flex
} from '@chakra-ui/react'

import React from 'react'
import { stacks } from '../info/Stacks'

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
        {[0, 1, 2, 3].map(el => (
          <TabPanel key={el}>
            <Fade in={tabIndex == el}>
              <Wrap wrap="wrap" spacing="30px" align="center" justify="center">
                {stacks.map(({ name, icon, colorScheme }) => (
                  <WrapItem key={name}>
                    <Tag
                      size="lg"
                      borderRadius="full"
                      colorScheme={colorScheme}
                      padding=".8rem"
                    >
                      <TagLabel fontSize="xl">{name}</TagLabel>
                      <TagRightIcon
                        as={icon}
                        style={{ width: '30px', height: '30px' }}
                      />
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Fade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
