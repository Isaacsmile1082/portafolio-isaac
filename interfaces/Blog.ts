export interface BlogProps {
  id: string
  uuid: string
  title: string
  slug: string
  html: string
  comment_id: string
  feature_image: string
  featured: boolean
  visibility: string
  send_email_when_published: boolean
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt: string
  codeinjection_head: null
  codeinjection_foot: null
  custom_template: null
  canonical_url: null
  url: string
  excerpt: string
  reading_time: number
  og_image: null
  og_title: null
  og_description: null
  twitter_image: null
  twitter_title: null
  twitter_description: null
  meta_title: null
  meta_description: null
  email_subject: null
}
