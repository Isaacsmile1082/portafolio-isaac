import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
// ''
const api = new GhostContentAPI({
  url: 'https://isaacsblog.herokuapp.com',
  key: process.env.GHOST as any,
  version: 'v3'
})

export async function getPosts(page = 1) {
  return await api.posts
    .browse({
      limit: '3',
      page
    })
    .catch(err => {
      console.error(err)
    })
}
