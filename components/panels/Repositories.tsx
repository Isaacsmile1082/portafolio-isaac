import { Stack, Text, Link, Wrap, WrapItem, Heading } from '@chakra-ui/layout'
import { Avatar, IconButton, Tag, TagLabel } from '@chakra-ui/react'
import React from 'react'
import { getRepositories } from '../../api/github'

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

interface CardRepositoryProps {
  id: string
  avatarSrc: string
  ownerName: string
  repoName: string
  repoUrl: string
  repoCreated: string
}

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
        <RepositoryCard
          key={repo.id}
          id={repo.id}
          avatarSrc={repo.owner.avatar_url}
          ownerName={repo.owner.login}
          repoName={repo.name}
          repoUrl={repo.svn_url}
          repoCreated={repo.created_at}
        />
      ))}
    </Wrap>
  )
}

const RepositoryCard: React.FC<CardRepositoryProps> = ({
  id,
  avatarSrc,
  ownerName,
  repoName,
  repoUrl,
  repoCreated
}) => {
  return (
    <WrapItem
      flexBasis="30%"
      shadow="md"
      key={id}
      backgroundColor="gray.700"
      p={4}
      borderRadius="lg"
    >
      <Stack>
        <Tag size="lg" colorScheme="blue" borderRadius="full">
          <Avatar src={avatarSrc} size="xs" name={ownerName} ml={-1} mr={2} />
          <TagLabel>{ownerName}</TagLabel>
        </Tag>
        <Heading
          size="sm"
          fontFamily="montserrat"
          paddingY="1rem"
          fontWeight="600"
        >
          {repoName}
        </Heading>
        <Text fontFamily="montserrat" paddingY=".5rem">
          {repoCreated}
        </Text>
        <Link target="_blank" href={repoUrl}>
          <IconButton
            borderRadius="full"
            aria-label="d"
            colorScheme="gray"
            icon={<FaGithub />}
          />
        </Link>
      </Stack>
    </WrapItem>
  )
}
