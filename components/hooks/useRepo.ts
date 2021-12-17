import React from 'react'
import { getRepositories } from '../../api/github'

export const useRepo = (initialPage = 1) => {
  const [repos, setRepos] = React.useState<any>([])

  const [page, setPage] = React.useState<number>(initialPage)

  const handleNextPage = React.useCallback(() => {
    setPage(page => page + 1)
  }, [])

  const handlePrevPage = React.useCallback(() => {
    setPage(page => page - 1)
  }, [])

  React.useEffect(() => {
    const getRepos = async (page: number) => {
      const data = await getRepositories(page)
      setRepos(data)
    }
    try {
      getRepos(page)
    } catch (error) {
      console.log(error)
    }
  }, [page])

  return {
    repos,
    page,
    handleNextPage,
    handlePrevPage
  }
}
