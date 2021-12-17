import { Stack, Text, Link, Wrap, WrapItem, Heading } from '@chakra-ui/layout'
import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  IconButton,
  Fade,
  Tag,
  TagLabel,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { useRepo } from '../hooks/useRepo'
import React from 'react'

interface CardRepositoryProps {
  id: string
  avatarSrc: string
  ownerName: string
  repoName: string
  repoUrl: string
  repoCreated: string
}

export const Repositories = () => {
  const { repos, handleNextPage, handlePrevPage, page } = useRepo(1)
  return (
    <Box>
      <Wrap spacing={5} justify={['center', 'start', 'space-around']}>
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
        {!repos.length && (
          <Alert status="error">
            <AlertIcon />
            There are no more repos :(
          </Alert>
        )}
      </Wrap>
      <Stack spacing={8} paddingLeft="2.1rem" direction="row" marginY="1rem">
        {repos.length && page == 1 ? (
          <Button onClick={handleNextPage}>Next</Button>
        ) : repos.length ? (
          <>
            <Button onClick={handlePrevPage}>Prev</Button>
            <Button onClick={handleNextPage}>Next</Button>
          </>
        ) : (
          <Button onClick={handlePrevPage}>Prev</Button>
        )}
      </Stack>
    </Box>
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
  const color = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  React.useEffect(() => {
    onToggle()
  }, [])
  return (
    <Fade in={isOpen}>
      <WrapItem
        shadow="md"
        key={id}
        backgroundColor={color?.colorMode == 'dark' ? 'gray.700' : 'white'}
        p={4}
        borderRadius="lg"
        border="1px solid"
        borderColor="gray.400"
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
    </Fade>
  )
}
