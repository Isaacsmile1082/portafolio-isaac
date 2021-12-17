import { EducationPanel } from '../EducationSection'
import { ExperiencePanel } from './ExperiencePanel'
import { Repositories } from './Repositories'
import { StackTechs } from './StackTechs'

export const panels = [
  {
    index: 0,
    Panel: StackTechs
  },
  {
    index: 1,
    Panel: Repositories
  },
  {
    index: 2,
    Panel: ExperiencePanel
  },
  {
    index: 3,
    Panel: () => <h1>Currently im working on it :P</h1>
  }
]
