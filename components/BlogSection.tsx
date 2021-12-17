import { Box, Flex, Heading, Link } from '@chakra-ui/layout'
import React from 'react'
import {
  Center,
  Image,
  Text,
  IconButton,
  SkeletonCircle,
  SkeletonText,
  Spinner
} from '@chakra-ui/react'
import { getPosts } from '../api/helpers/blog'
import { BlogProps } from '../interfaces/Blog'
import { GrNext } from '@react-icons/all-files/gr/GrNext'
import { GrPrevious } from '@react-icons/all-files/gr/GrPrevious'

export const BlogSection = () => {
  const [blogs, setBlogs] = React.useState<BlogProps[]>([])
  const [pages, setPages] = React.useState(1)

  const handleNext = React.useCallback(() => {
    setPages(pages => pages + 1)
  }, [])

  const handlePrev = React.useCallback(() => {
    setPages(pages => pages - 1)
  }, [])

  const [loading, setLoading] = React.useState(true)
  //   const resetPage = React.useCallback(() => {
  //     setPages(1)
  //   }, [])

  React.useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const data = await getPosts(pages)
        setBlogs(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    })()
  }, [pages])

  return (
    <>
      <Center>{loading && <Spinner />}</Center>
      <Flex padding={4} wrap="wrap" justifyContent="center">
        {blogs?.map(blog => (
          <Blog key={blog.id} {...blog} />
        ))}
      </Flex>
      <Center>
        {blogs?.length && pages == 1 ? (
          <IconButton
            borderRadius="full"
            aria-label="d"
            variant="outline"
            marginX="2rem"
            colorScheme="gray"
            onClick={handleNext}
            icon={<GrNext />}
          />
        ) : blogs.length ? (
          <>
            <Center>
              <IconButton
                borderRadius="full"
                aria-label="d"
                variant="outline"
                colorScheme="gray"
                onClick={handlePrev}
                marginX="2rem"
                icon={<GrPrevious />}
              />
              <IconButton
                borderRadius="full"
                aria-label="d"
                variant="outline"
                marginX="2rem"
                colorScheme="gray"
                onClick={handleNext}
                icon={<GrNext />}
              />
            </Center>
          </>
        ) : (
          <IconButton
            borderRadius="full"
            aria-label="d"
            variant="outline"
            colorScheme="gray"
            onClick={handlePrev}
            marginX="2rem"
            icon={<GrPrevious />}
          />
        )}
      </Center>
    </>
  )
}

export const Blog = (props: BlogProps) => {
  return (
    <Box
      borderRadius="md"
      marginX="1rem"
      w={['100%', '80%', '28%', '30%']}
      marginY="1rem"
      shadow="xl"
      transition="all ease .3s"
      _hover={{
        transform: 'translateY(-.5rem)'
      }}
    >
      <Image
        borderRadius="md"
        src={props.feature_image}
        alt="image of the blog"
      />
      <Box padding="1rem">
        <Heading>{props.title}</Heading>
        <Text>{props.custom_excerpt}</Text>
      </Box>
    </Box>
  )
}
