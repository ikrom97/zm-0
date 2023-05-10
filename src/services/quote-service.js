import { api } from './api';

export const QuoteService = {
  async paginate(locale, page = 1) {
    const { data } = await api.get(`/api/quotes?locale=${locale}&page=${+page}`);
    return data;
  },

  async search(locale, keyword) {
    const { data } = await api.get(`/api/quotes/search?locale=${locale}&keyword=${keyword}`);
    return data;
  }
};
