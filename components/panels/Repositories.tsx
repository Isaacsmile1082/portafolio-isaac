import {
  Stack,
  Text,
  Box,
  Link,
  Wrap,
  WrapItem,
  Center
} from '@chakra-ui/layout'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import React from 'react'
import { getRepositories } from '../../api/github'

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
    <Wrap spacing={5} justify="">
      {repos?.map((repo: any) => (
        <WrapItem
          shadow="md"
          key={repo.id}
          backgroundColor="gray.700"
          p={4}
          borderRadius="lg"
        >
          <Stack>
            <Avatar name={repo.owner.login} src={repo.owner.avatar_url} />
            <Text>{repo.owner.login}</Text>
            <Text>{repo.name}</Text>
            <Text>{repo.created_at}</Text>
            <Link target="_blank" href={repo.svn_url}>
              Repo
            </Link>
          </Stack>
        </WrapItem>
      ))}
    </Wrap>
  )
}
