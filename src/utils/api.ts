import { get } from '@/utils/request'

const getConfig = () => {
  return get(`/site.json`)
}

const getPosts = (current = 1) => {
  return get(`/posts/${current}.json`)
}

const getPostBySlug = (slug) => {
  return get(`/articles/${slug}.json`)
}

const getCategories = () => {
  return get(`/categories.json`)
}

export { getConfig, getPosts, getPostBySlug, getCategories }