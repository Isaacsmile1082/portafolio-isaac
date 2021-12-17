import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: process.env.OCTO as any
})
// process.env.OCTO as any

export const authenticate = async () => {
  const {
    data: { login }
  } = await octokit.rest.users.getAuthenticated()

  return login
}

export const getRepositories = async (page = 1) => {
  const resp = await octokit.request('GET /users/{username}/repos', {
    username: 'Isaacsmile1082',
    page,
    per_page: 3
  })

  return resp.data
}
