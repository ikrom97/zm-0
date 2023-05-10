import { api } from './api';

export const PostService = {
  async getAll(locale) {
    const { data } = await api.get(`/api/posts?locale=${locale}`);
    return data;
  }
};
