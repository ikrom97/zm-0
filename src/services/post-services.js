import { adaptPostsToClient } from '@/adapters/post-adapters';
import { api } from './api';

export const getPosts = async (locale) => {
  const { data } = await api.get(`/api/posts?locale=${locale}`);

  return adaptPostsToClient(data);
}
