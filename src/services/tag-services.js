import { adaptTagToClient, adaptTagsToClient } from '@/adapters/tag-adapters';
import { api } from './api';

export const getTags = async (locale) => {
  if (locale) {
    const { data } = await api.get(`/api/tags?locale=${locale}`);
    return adaptTagsToClient(data);
  }
  const { data } = await api.get(`/api/tags`);
  return adaptTagsToClient(data);
};

export const getTagBySlug = async (slug) => {
  const { data } = await api.get(`/api/tags/${slug}`);
  return adaptTagToClient(data);
};
