import Head from 'next/head'
import { Cover } from '../components/Cover'
import styles from '../styles/Home.module.css'
import { Box, Container, Heading } from '@chakra-ui/react'
import { MoreAbout } from '../components/MoreAbout'
import { PersonalInfo } from '../components/PersonalInfo'
import { ToggleTheme } from '../components/ToggleTheme'
import { FormContact } from '../components/FormContact'
import { Footer } from '../components/Footer'
import { EducationPanel } from '../components/EducationSection'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
// import { BlogSection } from '../components/BlogSection'
import 'react-vertical-timeline-component/style.min.css'
import { ExperiencePanel } from '../components/ExperiencePanel'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Isaacs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <Container
        maxW={['container.lg', null, 'container.lg']}
        overflowX="hidden"
      >
        <ToggleTheme />
        <PersonalInfo />
        <MoreAbout />
        <ExperiencePanel />
        <Box
          borderRadius="md"
          paddingY="2rem"
          borderColor="gray.600"
          marginY="3rem"
        >
          <Heading
            textAlign="center"
            marginBottom="3rem"
            fontFamily="montserrat"
          >
            Education
          </Heading>
          <EducationPanel />
        </Box>
        <Box
          // border="1px solid"
          borderRadius="xl"
          paddingY="2rem"
          borderColor="gray.600"
          marginY="3rem"
        >
          <Heading
            textAlign="center"
            marginBottom="3rem"
            fontFamily="montserrat"
          >
            Blog
          </Heading>
          {/* <BlogSection /> */}
        </Box>
        <FormContact />
      </Container>
      <Box marginTop="2rem">
        <Footer />
      </Box>
    </div>
  )
}

export default Home
