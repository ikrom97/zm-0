import { api } from './api';

export const TagService = {
  async getAll(locale) {
    const { data } = await api.get(`/api/tags?locale=${locale}`);
    return data;
  }
};
