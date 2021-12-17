import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
// ''
const api = new GhostContentAPI({
  url: 'https://isaacsblog.herokuapp.com',
  key: '1ba0f58fad43ee56a7e55ef8c0',
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
