import { api } from './api';

export const QuoteService = {
  async paginate(locale, page=1) {
    const { data } = await api.get(`/api/quotes?locale=${locale}&page=${+page}`);
    return data;
  }
};
