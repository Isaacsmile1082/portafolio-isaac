import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: `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`
})

export const authenticate = async () => {
  const {
    data: { login }
  } = await octokit.rest.users.getAuthenticated()

  return login
}

export const getRepositories = async () => {
  console.log(authenticate())
  const { data } = await octokit.request('GET /users/{username}/repos', {
    username: 'Isaacsmile1082'
  })

  return data
}
