import {
  Stack,
  Text,
  Box,
  Link,
  Wrap,
  WrapItem,
  Center,
  Heading
} from '@chakra-ui/layout'
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  IconButton,
  Tag,
  TagLabel
} from '@chakra-ui/react'
import React from 'react'
import { getRepositories } from '../../api/github'
import { Head } from 'next/document'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

export const Repositories = () => {
  const [repos, setRepos] = React.useState<any>([])

  React.useEffect(() => {
    const getRepos = async () => {
      const data = await getRepositories()

      setRepos(data)
    }
    try {
      getRepos()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Wrap spacing={5} justify="space-around">
      {repos?.map((repo: any) => (
        <WrapItem
          flexBasis="30%"
          shadow="md"
          key={repo.id}
          backgroundColor="gray.700"
          p={4}
          borderRadius="lg"
        >
          <Stack >
            <Tag size="lg" colorScheme="blue"  borderRadius="full">
              <Avatar
                src={repo.owner.avatar_url}
                size="xs"
                name={repo.owner.login}
                ml={-1}
                mr={2}
              />
              <TagLabel>{repo.owner.login}</TagLabel>
            </Tag>
            <Heading
              size="sm"
              fontFamily="montserrat"
              paddingY="1rem"
              fontWeight="600"
            >
              {repo.name}
            </Heading>
            <Text  fontFamily="montserrat" paddingY=".5rem">
              {repo.created_at}
            </Text>
            <Link target="_blank" href={repo.svn_url}>
              <IconButton
                borderRadius="full"
                aria-label="d"
                colorScheme="gray"
                icon={<FaGithub />}
              />
            </Link>
          </Stack>
        </WrapItem>
      ))}
    </Wrap>
  )
}
