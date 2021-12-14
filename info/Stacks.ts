import { IoLogoReact } from '@react-icons/all-files/io5/IoLogoReact'
import { IoLogoNodejs } from '@react-icons/all-files/io5/IoLogoNodejs'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { IoLogoJavascript } from '@react-icons/all-files/io5/IoLogoJavascript'
import { IoLogoSass } from '@react-icons/all-files/io5/IoLogoSass'
import { IoLogoCss3 } from '@react-icons/all-files/io5/IoLogoCss3'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import { SiRedux } from '@react-icons/all-files/si/SiRedux'
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb'
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql'
import { SiDocker } from '@react-icons/all-files/si/SiDocker'
import { SiGit } from '@react-icons/all-files/si/SiGit'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiGitlab } from '@react-icons/all-files/si/SiGitlab'

import { IconType } from 'react-icons'

interface StackProps {
  name: string
  colorScheme: string
  icon: IconType
}

export const stacks: StackProps[] = [
  {
    name: 'React',
    colorScheme: 'blue',
    icon: IoLogoReact
  },
  {
    name: 'Nodejs',
    colorScheme: 'green',
    icon: IoLogoNodejs
  },
  {
    name: 'Typescript',
    colorScheme: 'blue',
    icon: SiTypescript
  },
  {
    name: 'Javascript',
    colorScheme: 'yellow',
    icon: IoLogoJavascript
  },
  {
    name: 'Sass',
    colorScheme: 'pink',
    icon: IoLogoSass
  },
  {
    name: 'CSS',
    colorScheme: 'blue',
    icon: IoLogoCss3
  },
  {
    name: 'Tailwind',
    colorScheme: 'green',
    icon: SiTailwindcss
  },
  {
    name: 'GraphQL',
    colorScheme: 'purple',
    icon: SiGraphql
  },
  {
    name: 'Redux',
    colorScheme: 'purple',
    icon: SiRedux
  },
  {
    name: 'MongoDB',
    colorScheme: 'green',
    icon: SiMongodb
  },
  {
    name: 'Docker',
    colorScheme: 'blue',
    icon: SiDocker
  },
  {
    name: 'Git',
    colorScheme: 'gray',
    icon: SiGit
  },
  {
    name: 'GitHub',
    colorScheme: 'gray',
    icon: SiGithub
  },
  {
    name: 'GitLab',
    colorScheme: 'red',
    icon: SiGitlab
  }
]
