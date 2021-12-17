import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { getPosts } from '../api/helpers/blog'

export const BlogSection = () => {
  const [blogs, setBlogs] = React.useState<any>([])

  React.useEffect(() => {
    ;(async () => {
      try {
        const data = await getPosts()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <Flex>
      <h1>hola</h1>
    </Flex>
  )
}
